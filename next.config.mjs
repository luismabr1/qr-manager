/** @type {import('next').NextConfig} */
import 'dotenv/config'

const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME || 'http://localhost:3000/api/',
        MONGODB_URI: process.env.MONGODB_URI,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'http://localhost:3000',
        SECRET: process.env.SECRET,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET
    },
};

export default nextConfig;

