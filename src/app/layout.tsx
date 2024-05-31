// RootLayout.js
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import AuthProvider from "./context/authprovider";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  session, // Añade la sesión aquí
}: Readonly<{
  children: React.ReactNode;
  session: any; // Añade la sesión aquí
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Layout session={session}> {/* Pasa la sesión al componente Layout */}
              {children}
          </Layout>
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}

