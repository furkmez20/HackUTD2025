# auth/auth.py
from fastapi import HTTPException, Security
from fastapi.security import HTTPBearer
from jose import jwt
import json
from urllib.request import urlopen
import os
from dotenv import load_dotenv

load_dotenv()

AUTH0_DOMAIN = os.getenv("AUTH0_DOMAIN")
API_AUDIENCE = os.getenv("API_AUDIENCE")
ALGORITHMS = os.getenv("ALGORITHMS").split(",")

http_bearer = HTTPBearer()

# Load JWKS from Auth0
jsonurl = urlopen(f"https://{AUTH0_DOMAIN}/.well-known/jwks.json")
jwks = json.loads(jsonurl.read())

def get_rsa_key(token):
    header = jwt.get_unverified_header(token)
    for key in jwks["keys"]:
        if key["kid"] == header["kid"]:
            return key
    raise HTTPException(status_code=401, detail="Unable to find appropriate key")

def verify_jwt(token: str = Security(http_bearer)):
    try:
        rsa_key = get_rsa_key(token.credentials)
        payload = jwt.decode(
            token.credentials,
            rsa_key,
            algorithms=ALGORITHMS,
            audience=API_AUDIENCE,
            issuer=f"https://{AUTH0_DOMAIN}/"
        )
        return payload
    except Exception:
        raise HTTPException(status_code=401, detail="Token validation failed")
