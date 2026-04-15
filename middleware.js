import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const { pathname } = req.nextUrl;
        const { method } = req;

        // 1. Public API Access: Allow anyone to read blogs
        if (pathname.startsWith("/api/blog") && method === "GET") {
          return true;
        }

        // 2. Admin Access: Require a valid token for everything else
        return !!token;
      },
    },
  }
);

export const config = { 
  /* The regex below means:
    - Match all paths starting with /admin
    - BUT ignore the path /admin/login 
    - Match all paths starting with /api/blog
  */
  matcher: [
    "/admin/((?!login).*)", 
    "/api/blog/:path*"
  ] 
};