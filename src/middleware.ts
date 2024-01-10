import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: (req) => !req.url.includes("/admin"),
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
