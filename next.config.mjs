/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_HOSTNAME: "http://localhost:3001/api/",
        MONGODB_URI: "mongodb+srv://evhorizon:ThuReal.Dulc3.V3nen0@hotspot1.1xwi126.mongodb.net/login-api",
        NEXTAUTH_SECRET: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
        NEXTAUTH_URL: "http://localhost:3001",
        SECRET: "RAMDOM_STRING",
    },
};

export default nextConfig;
