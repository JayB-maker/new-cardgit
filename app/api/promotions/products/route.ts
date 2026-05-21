import { NextResponse } from "next/server";
import { getCardGitApiUrl } from "@/lib/cardgit-api";

export async function GET() {
  const response = await fetch(getCardGitApiUrl("/api/v1/promotions/open/products"), {
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);

  return NextResponse.json(
    data ?? { isSuccess: false, message: "Unable to fetch product promotions" },
    { status: response.status },
  );
}
