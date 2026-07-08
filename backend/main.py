import logging
import os
import re
import smtplib
from email.message import EmailMessage
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

logging.basicConfig(level=logging.INFO)

EMAIL_PATTERN = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


class ContactSubmission(BaseModel):
    name: str
    email: str
    projectType: Optional[str] = ""
    budget: Optional[str] = ""
    message: str
    company: Optional[str] = ""
    source: Optional[str] = "portfolio"


app = FastAPI(
    title="Portfolio Contact API",
    version="1.0.0",
    description="FastAPI backend for handling portfolio contact form submissions.",
)

allowed_origins = [
    origin.strip()
    for origin in os.getenv("CONTACT_ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/contact")
def submit_contact(payload: ContactSubmission) -> dict[str, bool]:
    if payload.company:
        return {"ok": True}

    name = payload.name.strip()
    email = payload.email.strip()
    message = payload.message.strip()

    if len(name) < 2:
        raise HTTPException(status_code=400, detail="Name is too short.")

    if not EMAIL_PATTERN.match(email):
        raise HTTPException(status_code=400, detail="Email is invalid.")

    if len(message) < 10:
        raise HTTPException(status_code=400, detail="Message is too short.")

    submission = {
        "name": name,
        "email": email,
        "project_type": payload.projectType,
        "timeline": payload.budget,
        "message": message,
        "source": payload.source,
    }

    if os.getenv("SMTP_HOST") and os.getenv("CONTACT_TO_EMAIL"):
        send_email(submission)
    else:
        logging.info("Portfolio contact submission: %s", submission)

    return {"ok": True}


def send_email(submission: dict[str, str]) -> None:
    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    contact_to = os.environ["CONTACT_TO_EMAIL"]
    contact_from = os.getenv("CONTACT_FROM_EMAIL", smtp_user or contact_to)
    use_tls = os.getenv("SMTP_USE_TLS", "true").lower() == "true"

    message = EmailMessage()
    message["Subject"] = f"Portfolio contact from {submission['name']}"
    message["From"] = contact_from
    message["To"] = contact_to
    message["Reply-To"] = submission["email"]
    message.set_content(
        "\n".join(
            [
                f"Name: {submission['name']}",
                f"Email: {submission['email']}",
                f"Opportunity: {submission.get('project_type') or 'Not specified'}",
                f"Timeline: {submission.get('timeline') or 'Not specified'}",
                f"Source: {submission.get('source') or 'portfolio'}",
                "",
                submission["message"],
            ]
        )
    )

    try:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=12) as server:
            if use_tls:
                server.starttls()
            if smtp_user and smtp_password:
                server.login(smtp_user, smtp_password)
            server.send_message(message)
    except OSError as exc:
        logging.exception("SMTP delivery failed")
        raise HTTPException(status_code=502, detail="Email delivery failed.") from exc
