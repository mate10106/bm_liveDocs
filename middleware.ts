import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next|auth/sign-in|auth/sign-up).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
