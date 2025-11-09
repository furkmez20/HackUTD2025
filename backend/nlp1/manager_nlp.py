# backend/nlp1/manager_nlp.py
import spacy
import re

nlp = spacy.load("en_core_web_sm")

def parse_manager_query(query: str):
    """
    Parse manager-focused natural language queries.
    Extract filters for:
      - Lease type
      - Payment status
      - Sustainability thresholds
      - Max maintenance costs
      - High energy usage
      - Top tenants
      - Trends (operational, occupancy, rent)
    """
    doc = nlp(query)
    filters = {
        "lease_type": None,
        "payment_status": None,
        "sustainability_min": None,
        "max_maintenance_costs": None,
        "high_energy_threshold": None,
        "top_tenants": False,
        "trend": False,
    }

    query_lower = query.lower()

    # --- Lease type ---
    lease_types = ["full service gross", "net", "modified gross", "gross"]
    for t in lease_types:
        if t in query_lower:
            filters["lease_type"] = t
            break

    # --- Payment status ---
    if "delinquent" in query_lower:
        filters["payment_status"] = "Delinquent"
    elif "paid" in query_lower:
        filters["payment_status"] = "Paid"

    # --- Sustainability thresholds ---
    sustain_match = re.findall(r"sustainability\s*(?:score|rating)?\s*(?:over|above|greater\s*than)?\s*(\d+)", query_lower)
    if sustain_match:
        filters["sustainability_min"] = int(sustain_match[0])

    # --- Max maintenance costs ---
    maintenance_match = re.findall(r"(?:maintenance|costs|expenses)\s*(?:over|above|greater\s*than)?\s*\$?(\d+)", query_lower)
    if maintenance_match:
        filters["max_maintenance_costs"] = float(maintenance_match[0])

    # --- High energy usage threshold ---
    energy_match = re.findall(r"(?:energy|electricity)\s*(?:over|above|greater\s*than)?\s*(\d+)", query_lower)
    if energy_match:
        filters["high_energy_threshold"] = float(energy_match[0])

    # --- Top tenants request ---
    if any(x in query_lower for x in ["top tenants", "highest rent", "largest rent"]):
        filters["top_tenants"] = True

    # --- Trend detection ---
    if any(x in query_lower for x in ["trend", "forecast", "predict", "history"]):
        filters["trend"] = True

    return {"filters": filters}
