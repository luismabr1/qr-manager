//@ts-nocheck
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const baseURL = process.env.NEXT_PUBLIC_HOSTNAME + "login";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge:  5 * 60, // 6 min
    updateAge:  15, // 6 min
/*     generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    } */
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const requestBody = {
          email: credentials.email,
          password: credentials.password,
        };
        const res = await fetch(baseURL, {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: { "Content-Type": "application/json" },
        });
        const resdata = await res.json();
        console.log("Login...", resdata);
        if (
          resdata.status === 400 ||
          resdata.status === 401 ||
          resdata.status === 403 ||
          resdata.status === 500
        ) {
          return null;
        }
        if (resdata.status === 200 || resdata.status === 201) {
          return resdata;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    // signIn: "/",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    authorized({ req , token }) {
      if(token) return true // If there is a token, the user is authenticated
    },
    async session({ session, user, token }) {
      // user param present in the session(function) does not recive all the data from DB call -> fetchUserInfo(credentials.opt)
      return { ...token, ...user, ...session };
    },
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)
      return { ...token, ...user };
    },
  },
  secret: process.env.JWT_SECRET,
};
