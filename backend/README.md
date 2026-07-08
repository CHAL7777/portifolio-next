# Portfolio Contact API

FastAPI service for portfolio contact form submissions.

## Run locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Point the Next.js frontend at the API:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=http://localhost:8000/api/contact
```

If SMTP variables are not configured, valid submissions are logged to stdout. Configure the variables in
`.env.example` for email delivery in production.
