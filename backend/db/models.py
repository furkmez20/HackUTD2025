from sqlalchemy import Column, String, Integer, Numeric, Date
from .database import Base

# ----------------- Properties Table -----------------
class Property(Base):
    __tablename__ = "properties"

    property_id = Column(String, primary_key=True, index=True)
    name = Column(String)
    address = Column(String)
    city = Column(String)
    state = Column(String(2))
    zip = Column(String(10))
    type = Column(String)
    size_sqft = Column(Numeric)
    year_built = Column(Integer)
    occupancy_rate = Column(Numeric)
    latitude = Column(Numeric)
    longitude = Column(Numeric)


# ----------------- Leases Table -----------------
class Lease(Base):
    __tablename__ = "leases"

    lease_id = Column(String, primary_key=True, index=True)
    property_id = Column(String)
    tenant_name = Column(String)
    lease_start_date = Column(Date)
    lease_end_date = Column(Date)
    annual_rent = Column(Numeric)
    lease_type = Column(String)
    payment_status = Column(String)
    sustainability_rating = Column(Integer)


# ----------------- Operational Monthly Table -----------------
class OperationalMonthly(Base):
    __tablename__ = "operational_monthly"

    report_id = Column(String, primary_key=True, index=True)
    property_id = Column(String)
    month_reported = Column(Date)
    maintenance_costs = Column(Numeric)
    energy_consumption_kwh = Column(Numeric)
    water_consumption_gal = Column(Numeric)
    security_incidents = Column(Integer)
    equipment_status = Column(String)
