import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# -------------------------------------------
# GEMINI Summarization + Reasoning Layer
# -------------------------------------------

def summarize_response(user_query: str, db_results: dict):
    """
    Uses Gemini to summarize database results and reason about them
    as a real estate insight assistant.
    """

    # Defensive check
    if not db_results or all(len(v) == 0 for v in db_results.values()):
        return "I couldn’t find any matching properties or leases in the database."

    # Turn database result objects into readable text
    def format_entry(entry):
        # Handles both SQLAlchemy models and dicts
        attrs = {k: str(v) for k, v in entry.__dict__.items() if not k.startswith("_")}
        return ", ".join([f"{k.replace('_', ' ').title()}: {v}" for k, v in attrs.items()])

    text_parts = []
    for section, rows in db_results.items():
        if rows:
            text_parts.append(f"\n### {section.title()} Results ({len(rows)} found)\n")
            for r in rows:
                text_parts.append(f"- {format_entry(r)}")

    formatted_data = "\n".join(text_parts)

    # -------------------------------------------
    # 💡 Gemini prompt – reason, compare, suggest
    # -------------------------------------------
    prompt = f"""
You are **PropIntel**, an AI-powered real estate assistant built for CBRE professionals.

User query:
"{user_query}"

Below is structured data from the PostgreSQL database:
{formatted_data}

Your tasks:
1. Provide a short, natural-language summary of key findings (city, property type, size, rent, sustainability, etc.)
2. Identify 1–2 insights or risks (e.g., high maintenance, lease expiry soon, low occupancy).
3. Suggest next-step actions or related recommendations ("Consider reviewing similar properties in Houston with lower energy costs").
4. Make it sound analytical yet conversational — as if briefing a portfolio manager.
5. Use emojis sparingly and professionally (📊, 🏢, ⚡, 💡).

Write 3–5 sentences maximum.
"""

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text.strip()

