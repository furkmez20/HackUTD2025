from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import or_
from ..db import database, models
from ..nlp1.user_nlp import parse_user_query
from ..ai.gemini_client import summarize_response

router = APIRouter(prefix="/chat/user", tags=["User Chatbot"])

@router.post("/")
def user_chat(query: dict, db: Session = Depends(database.get_db)):
    """
    Handles user queries by parsing natural language,
    searching across properties, leases, and operational metrics,
    and summarizing results with Gemini + NLP model.
    """
    user_query = query.get("message", "").strip()
    if not user_query:
        return {"error": "Please enter a valid query."}

    # --- 1️⃣ Parse query using NLP ---
    parsed = parse_user_query(user_query)
    filters = parsed.get("filters", {})

    # --- 2️⃣ Start building query ---
    property_q = db.query(models.Property)
    lease_q = db.query(models.Lease)
    ops_q = db.query(models.OperationalMonthly)

    # --- 3️⃣ Apply filters dynamically ---
    if city := filters.get("city"):
        property_q = property_q.filter(models.Property.city.ilike(f"%{city}%"))

    if min_sqft := filters.get("min_sqft"):
        property_q = property_q.filter(models.Property.size_sqft >= min_sqft)
    if max_sqft := filters.get("max_sqft"):
        property_q = property_q.filter(models.Property.size_sqft <= max_sqft)

    if property_type := filters.get("property_type"):
        property_q = property_q.filter(models.Property.type.ilike(f"%{property_type}%"))

    if year := filters.get("year_built"):
        property_q = property_q.filter(models.Property.year_built >= year)

    if occupancy := filters.get("occupancy_rate"):
        property_q = property_q.filter(models.Property.occupancy_rate <= occupancy)

    if rent_min := filters.get("min_rent"):
        lease_q = lease_q.filter(models.Lease.annual_rent >= rent_min)
    if rent_max := filters.get("max_rent"):
        lease_q = lease_q.filter(models.Lease.annual_rent <= rent_max)

    if lease_type := filters.get("lease_type"):
        lease_q = lease_q.filter(models.Lease.lease_type.ilike(f"%{lease_type}%"))

    if payment_status := filters.get("payment_status"):
        lease_q = lease_q.filter(models.Lease.payment_status.ilike(f"%{payment_status}%"))

    if rating := filters.get("sustainability_rating"):
        lease_q = lease_q.filter(models.Lease.sustainability_rating >= rating)

    if maintenance_costs := filters.get("max_maintenance_costs"):
        ops_q = ops_q.filter(models.OperationalMonthly.maintenance_costs <= maintenance_costs)

    if energy := filters.get("energy_threshold"):
        ops_q = ops_q.filter(models.OperationalMonthly.energy_consumption_kwh >= energy)

    # --- 4️⃣ Execute queries ---
    properties = property_q.limit(5).all()
    leases = lease_q.limit(5).all()
    ops = ops_q.limit(5).all()

    # --- 5️⃣ Use Gemini + NLP to summarize ---
    summary = summarize_response(user_query, {
        "properties": properties,
        "leases": leases,
        "operations": ops
    })

    return {
        "query": user_query,
        "filters": filters,
        "results": {
            "properties_found": len(properties),
            "leases_found": len(leases),
            "operational_reports_found": len(ops),
        },
        "summary": summary
    }
