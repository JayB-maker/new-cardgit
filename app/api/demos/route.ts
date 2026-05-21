import { NextResponse } from "next/server";
import { getCardGitApiUrl } from "@/lib/cardgit-api";

type DemoRequest = {
  email: string;
  name: string;
  enterprise_name: string;
  location: string;
  role: string;
  phone: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as DemoRequest;

  const response = await fetch(getCardGitApiUrl("/api/v1/utility/demos"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  return NextResponse.json(
    data ?? { message: response.ok ? "Demo request submitted" : "Unable to submit demo request" },
    { status: response.status },
  );
}
