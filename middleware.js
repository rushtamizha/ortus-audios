// middleware.js
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // ALLOW anyone to GET the blog list (public-facing)
        if (req.nextUrl.pathname.startsWith("/api/blog") && req.method === "GET") {
          return true;
        }
        // REQUIRE login for everything else in /admin or POST/DELETE
        return !!token;
      },
    },
  }
);

export const config = { 
  matcher: ["/admin/:path*", "/api/blog/:path*"] 
};