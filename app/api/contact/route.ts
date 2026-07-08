import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  company?: string;
  source?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (name.length < 2 || !isValidEmail(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        receivedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Webhook delivery failed." }, { status: 502 });
    }
  } else {
    console.info("Portfolio contact submission", {
      name,
      email,
      projectType: payload.projectType,
      budget: payload.budget,
      message,
      source: payload.source,
      receivedAt: new Date().toISOString(),
    });
  }

  return NextResponse.json({ ok: true });
}
