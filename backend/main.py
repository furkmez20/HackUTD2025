from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from auth.auth import verify_jwt
from auth.routes import router as auth_router
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS for React frontend
FRONTEND_URL = os.getenv("FRONTEND_URL")  # http://localhost:3000
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include auth routes
app.include_router(auth_router)

# Protected API routes
@app.get("/properties")
def get_properties(user=Depends(verify_jwt)):
    return {"message": f"Hello {user['sub']}, here are your properties!"}

@app.get("/dashboard")
def get_dashboard(user=Depends(verify_jwt)):
    return {"message": f"Dashboard data for {user['sub']}"}
