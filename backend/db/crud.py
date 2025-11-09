from sqlalchemy.orm import Session
from . import models

def get_properties(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Property).offset(skip).limit(limit).all()

def get_leases(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Lease).offset(skip).limit(limit).all()
    
def create_property(db: Session, address: str, price: int):
    db_property = models.Property(address=address, price=price)
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    return db_property
