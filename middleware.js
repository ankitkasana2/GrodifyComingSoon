import { NextResponse } from "next/server"

export function middleware(request) {
  // Allow static assets and Next.js internals
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.match(/\.(favicon|png|jpg|jpeg|svg|gif|webp)$/)
  ) {
    return NextResponse.next()
  }

  // Rewrite all other routes to home page
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.rewrite(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
}
