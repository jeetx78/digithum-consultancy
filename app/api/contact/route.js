import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const required = ["name", "phone", "email"];

  for (const key of required) {
    if (!body[key]?.trim()) {
      return NextResponse.json({ error: `${key} is required` }, { status: 400 });
    }
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    return NextResponse.json(
      { error: "HubSpot is not configured yet." },
      { status: 503 }
    );
  }

  const fields = [
    { objectTypeId: "0-1", name: "firstname", value: body.name },
    { objectTypeId: "0-1", name: "phone", value: body.phone },
    { objectTypeId: "0-1", name: "email", value: body.email },
    { objectTypeId: "0-1", name: "message", value: body.message || "" }
  ];

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields })
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.error("HubSpot submission failed:", text);
    return NextResponse.json({ error: "HubSpot submission failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
