// api/auth/estudio/[id]/route.ts

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  try {
    const id = pathname.split("/").pop();
    return NextResponse.json(id);
  } catch (error) {
    return NextResponse.error();
  }
}
