from fastapi import APIRouter
from fastapi.responses import RedirectResponse
import os

router = APIRouter()
AUTH0_DOMAIN = os.getenv("AUTH0_DOMAIN")
CLIENT_ID = os.getenv("CLIENT_ID")
REDIRECT_URI = "http://localhost:3000/callback"  # React frontend callback

@router.get("/login")
def login():
    return RedirectResponse(
        f"https://{AUTH0_DOMAIN}/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=openid profile email"
    )

@router.get("/logout")
def logout():
    return RedirectResponse(
        f"https://{AUTH0_DOMAIN}/v2/logout?client_id={CLIENT_ID}&returnTo=http://localhost:3000"
    )
