"use server";

import { NextRequest } from "next/server";
import { reproBug } from "./lib/actions";

export async function middleware(req: NextRequest) {
  await reproBug();
}

export const config = {
  matcher: "/run-the-middleware",
};
