# backend/routers/manager_dashboard.py
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, extract
from datetime import date
from db import models, database

router = APIRouter(prefix="/dashboard", tags=["Manager Dashboard"])

# ----------------- 1️⃣ Portfolio Summary -----------------
@router.get("/portfolio-summary")
def portfolio_summary(db: Session = Depends(database.get_db)):
    total_properties = db.query(models.Property).count()
    total_leases = db.query(models.Lease).count()
    avg_occupancy = db.query(func.avg(models.Property.occupancy_rate)).scalar()
    return {
        "total_properties": total_properties,
        "total_leases": total_leases,
        "avg_occupancy_rate": float(avg_occupancy or 0)
    }

# ----------------- 2️⃣ Lease Risk / Payment Status -----------------
@router.get("/lease-risk")
def lease_risk(db: Session = Depends(database.get_db)):
    today = date.today()
    leases = db.query(
        models.Lease.tenant_name,
        models.Lease.property_id,
        models.Lease.lease_end_date,
        models.Lease.payment_status
    ).all()

    risk_data = []
    for lease in leases:
        days_remaining = (lease.lease_end_date - today).days
        risk_level = "High" if days_remaining < 90 or lease.payment_status.lower() != "paid" else "Low"
        risk_data.append({
            "tenant": lease.tenant_name,
            "property_id": lease.property_id,
            "days_remaining": days_remaining,
            "risk_level": risk_level
        })
    return risk_data

# ----------------- 3️⃣ Operational Trends -----------------
@router.get("/operational-trends")
def operational_trends(db: Session = Depends(database.get_db)):
    trends = db.query(
        extract('month', models.OperationalMonthly.month_reported).label('month'),
        func.sum(models.OperationalMonthly.maintenance_costs).label('total_maintenance'),
        func.avg(models.OperationalMonthly.energy_consumption_kwh).label('avg_energy'),
        func.avg(models.OperationalMonthly.water_consumption_gal).label('avg_water')
    ).group_by('month').order_by('month').all()
    
    return [
        {
            "month": int(r.month),
            "total_maintenance": float(r.total_maintenance or 0),
            "avg_energy": float(r.avg_energy or 0),
            "avg_water": float(r.avg_water or 0)
        } for r in trends
    ]

# ----------------- 4️⃣ Sustainability Ratings -----------------
@router.get("/sustainability")
def sustainability(db: Session = Depends(database.get_db)):
    ratings = db.query(
        models.Property.property_id,
        models.Property.name,
        models.Lease.sustainability_rating
    ).join(models.Lease, models.Property.property_id == models.Lease.property_id, isouter=True).all()
    
    result = []
    for r in ratings:
        result.append({
            "property_id": r.property_id,
            "name": r.name,
            "sustainability_rating": int(r.sustainability_rating or 0)
        })
    return result

# ----------------- 5️⃣ Top Tenants by Annual Rent -----------------
@router.get("/top-tenants")
def top_tenants(db: Session = Depends(database.get_db)):
    top = db.query(
        models.Lease.tenant_name,
        models.Lease.property_id,
        models.Lease.annual_rent
    ).order_by(models.Lease.annual_rent.desc()).limit(10).all()
    
    return [
        {"tenant": r.tenant_name, "property_id": r.property_id, "annual_rent": float(r.annual_rent)}
        for r in top
    ]
