# app/nlp/user_nlp.py
import spacy
import re

nlp = spacy.load("en_core_web_sm")

def parse_user_query(query: str):
    """
    Extract filters for advanced search queries.
    Detects city, state, property type, rent, year built, occupancy, sustainability, etc.
    """
    doc = nlp(query)
    filters = {
        "city": None,
        "state": None,
        "property_type": None,
        "max_rent": None,
        "min_rent": None,
        "year_built_min": None,
        "sustainability_min": None,
        "occupancy_min": None,
        "equipment_status": None,
    }

    # --- Named Entities ---
    for ent in doc.ents:
        if ent.label_ in ["GPE"]:
            filters["city"] = ent.text
        elif ent.label_ == "DATE":
            try:
                year = int(re.findall(r"\b(19|20)\d{2}\b", ent.text)[0])
                filters["year_built_min"] = year
            except Exception:
                pass

    # --- State codes ---
    states = {"TX", "CA", "NY", "FL", "IL", "GA", "WA", "MA"}
    for token in doc:
        if token.text.upper() in states:
            filters["state"] = token.text.upper()

    # --- Property type ---
    property_types = ["office", "retail", "warehouse", "residential", "apartment", "industrial"]
    for token in doc:
        if token.text.lower() in property_types:
            filters["property_type"] = token.text.lower()

    # --- Rent detection ---
    rent_match = re.findall(r"\bunder\s*\$?(\d+)|less\s*than\s*\$?(\d+)|below\s*\$?(\d+)", query.lower())
    if rent_match:
        filters["max_rent"] = float(next(filter(None, rent_match[0])))

    rent_above = re.findall(r"\bover\s*\$?(\d+)|more\s*than\s*\$?(\d+)|above\s*\$?(\d+)", query.lower())
    if rent_above:
        filters["min_rent"] = float(next(filter(None, rent_above[0])))

    # --- Sustainability Rating ---
    sustain_match = re.findall(r"sustainability\s*(?:score|rating)?\s*(?:over|above|greater\s*than)?\s*(\d+)", query.lower())
    if sustain_match:
        filters["sustainability_min"] = int(sustain_match[0])

    # --- Occupancy Rate ---
    occ_match = re.findall(r"occupancy\s*(?:over|above|greater\s*than)?\s*(\d+)", query.lower())
    if occ_match:
        filters["occupancy_min"] = float(occ_match[0])

    # --- Equipment Status ---
    if "faulty" in query.lower() or "broken" in query.lower():
        filters["equipment_status"] = "Faulty"
    elif "operational" in query.lower() or "working" in query.lower():
        filters["equipment_status"] = "Operational"

    # --- Intent detection ---
    intent = "search"
    if any(x in query.lower() for x in ["compare", "difference", "vs"]):
        intent = "compare"
    elif any(x in query.lower() for x in ["trend", "forecast", "predict"]):
        intent = "trend"

    return {"intent": intent, "filters": filters}
