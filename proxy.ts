import { NextResponse, type NextRequest } from "next/server";
import { decryptSession, SESSION_COOKIE_NAME } from "@/app/lib/session";

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAdmin = path.startsWith("/admin");
  if (!isAdmin) return NextResponse.next();

  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = await decryptSession(token);

  if (!session) {
    const url = new URL("/login", req.nextUrl);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
