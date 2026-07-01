import { NextResponse } from "next/server";

const backendOrigin = (
  process.env.ECOFY_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8021"
).replace(/\/api\/?$/, "").replace(/\/$/, "");

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const response = await fetch(`${backendOrigin}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const body = await response.json().catch(() => ({}));
    return NextResponse.json(body, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Feedback service is unavailable." },
      { status: 503 },
    );
  }
}

