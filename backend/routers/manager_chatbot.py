# routers/manager_chatbot.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, extract
from datetime import date
from backend.db import database, models
from backend.nlp1.manager_nlp import parse_manager_query

from ..ai.gemini_client import summarize_response

router = APIRouter(prefix="/chat/manager", tags=["Manager Chatbot"])

@router.post("/")
def manager_chat(query: dict, db: Session = Depends(database.get_db)):
    """
    Handles manager queries by parsing natural language,
    aggregating full dashboard metrics, and summarizing results with Gemini.
    """
    user_query = query.get("message", "").strip()
    if not user_query:
        return {"error": "Please enter a valid query."}

    # --- 1️⃣ Parse query using NLP ---
    parsed = parse_manager_query(user_query)
    filters = parsed.get("filters", {})

    # --- 2️⃣ Build queries for all dashboard metrics ---
    # Lease & operational filters
    lease_q = db.query(models.Lease)
    ops_q = db.query(models.OperationalMonthly)
    if lease_type := filters.get("lease_type"):
        lease_q = lease_q.filter(models.Lease.lease_type.ilike(f"%{lease_type}%"))
    if payment_status := filters.get("payment_status"):
        lease_q = lease_q.filter(models.Lease.payment_status.ilike(f"%{payment_status}%"))
    if sustainability_min := filters.get("sustainability_min"):
        lease_q = lease_q.filter(models.Lease.sustainability_rating >= sustainability_min)
    if max_maintenance_costs := filters.get("max_maintenance_costs"):
        ops_q = ops_q.filter(models.OperationalMonthly.maintenance_costs <= max_maintenance_costs)

    # --- 3️⃣ Aggregate key metrics ---
    total_properties = db.query(models.Property).count()
    total_leases = lease_q.count()
    avg_occupancy = db.query(func.avg(models.Property.occupancy_rate)).scalar() or 0
    avg_rent = lease_q.with_entities(func.avg(models.Lease.annual_rent)).scalar() or 0
    high_risk_leases = lease_q.filter(models.Lease.payment_status.ilike("%delinquent%")).count()
    total_ops_reports = ops_q.count()
    avg_maintenance = ops_q.with_entities(func.avg(models.OperationalMonthly.maintenance_costs)).scalar() or 0
    high_energy = ops_q.filter(models.OperationalMonthly.energy_consumption_kwh > 10000).count()

    # Operational trends by month
    trends = db.query(
        extract('month', models.OperationalMonthly.month_reported).label('month'),
        func.sum(models.OperationalMonthly.maintenance_costs).label('total_maintenance'),
        func.avg(models.OperationalMonthly.energy_consumption_kwh).label('avg_energy'),
        func.avg(models.OperationalMonthly.water_consumption_gal).label('avg_water')
    ).group_by('month').order_by('month').all()
    operational_trends = [
        {
            "month": int(r.month),
            "total_maintenance": float(r.total_maintenance or 0),
            "avg_energy": float(r.avg_energy or 0),
            "avg_water": float(r.avg_water or 0)
        } for r in trends
    ]

    # Sustainability ratings
    ratings = db.query(
        models.Property.property_id,
        models.Property.name,
        models.Lease.sustainability_rating
    ).join(models.Lease, models.Property.property_id == models.Lease.property_id, isouter=True).all()
    sustainability_ratings = [
        {"property_id": r.property_id, "name": r.name, "sustainability_rating": int(r.sustainability_rating or 0)}
        for r in ratings
    ]

    # Top tenants by rent
    top_tenants = db.query(
        models.Lease.tenant_name,
        models.Lease.property_id,
        models.Lease.annual_rent
    ).order_by(models.Lease.annual_rent.desc()).limit(10).all()
    top_tenants_data = [
        {"tenant": r.tenant_name, "property_id": r.property_id, "annual_rent": float(r.annual_rent)}
        for r in top_tenants
    ]

    # --- 4️⃣ Prepare dashboard metrics object ---
    dashboard_metrics = {
        "total_properties": total_properties,
        "total_leases": total_leases,
        "average_occupancy_rate": round(float(avg_occupancy), 2),
        "average_rent": round(float(avg_rent), 2),
        "high_risk_leases": high_risk_leases,
        "total_operational_reports": total_ops_reports,
        "average_maintenance_costs": round(float(avg_maintenance), 2),
        "high_energy_usage_reports": high_energy,
        "operational_trends": operational_trends,
        "sustainability_ratings": sustainability_ratings,
        "top_tenants": top_tenants_data
    }

    # --- 5️⃣ Gemini prompt for detailed technical explanation ---
    gemini_prompt = f"""
You are a professional real estate analytics AI assistant for property managers.
The user has technical knowledge and wants insights from dashboard data.
Do not simplify the explanation; use technical terms relevant to property management,
leasing, sustainability, and operational metrics.

Explain the following metrics in context, highlight risks or anomalies,
and suggest actionable next steps:

Dashboard Metrics:
{dashboard_metrics}

Manager Query:
{user_query}
"""

    summary = summarize_response(gemini_prompt, dashboard_metrics)

    return {
        "query": user_query,
        "filters": filters,
        "dashboard_metrics": dashboard_metrics,
        "summary": summary
    }
