// middleware.js
export { default } from "next-auth/middleware"
export const config = {
  matcher: ["/home/:path*","/register:path*","/download:path*"]
}