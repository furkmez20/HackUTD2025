from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .auth.auth import verify_jwt
from .auth.routes import router as auth_router
from backend.db import models, crud, database  # <- import your DB modules
import os
from dotenv import load_dotenv
from .routers.user_chatbot import router as user_chatbot_router
from .routers.manager_chatbot import router as manager_chatbot_router
from .routers.manager_dashboard import router as manager_dashboard_router
# Load .env
load_dotenv()

app = FastAPI()

# ---------------- CORS for React frontend ----------------
FRONTEND_URL = os.getenv("FRONTEND_URL")  # e.g., http://localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Auth routes ----------------
app.include_router(auth_router)
app.include_router(user_chatbot_router)
app.include_router(manager_chatbot_router)
app.include_router(manager_dashboard_router)
# ---------------- DB setup ----------------
# Create tables if they don't exist
models.Base.metadata.create_all(bind=database.engine)

# Dependency for DB
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ---------------- Protected API routes ----------------
@app.get("/properties")
def get_properties(user=Depends(verify_jwt), db: Session = Depends(get_db)):
    properties = crud.get_properties(db)  # query from DB
    return {
        "message": f"Hello {user['sub']}, here are your properties!",
        "data": properties
    }

@app.get("/leases")
def get_leases(user=Depends(verify_jwt), db: Session = Depends(get_db)):
    leases = crud.get_leases(db)  # query from DB
    return {
        "message": f"Hello {user['sub']}, here are your leases!",
        "data": leases
    }

@app.get("/dashboard")
def get_dashboard(user=Depends(verify_jwt), db: Session = Depends(get_db)):
    # Example: return counts or aggregated data
    total_properties = db.query(models.Property).count()
    total_leases = db.query(models.Lease).count()
    return {
        "message": f"Dashboard data for {user['sub']}",
        "total_properties": total_properties,
        "total_leases": total_leases
    }
# ---------- TEST ROUTE ----------
@app.get("/test-db")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        leases_sample = crud.get_leases(db, skip=0, limit=5)
        return {"status": "success", "data_sample": leases_sample}
    except Exception as e:
        return {"status": "error", "details": str(e)}

@app.get("/test-manager")
def test_manager():
    return {"status": "Manager chatbot connected!"}
