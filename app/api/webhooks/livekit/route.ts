import { NextResponse } from "next/server";

// LiveKit webhooks removed. Keep route for compatibility and return 204.
export async function POST(_req: Request) {
  return NextResponse.json({}, { status: 204 });
}