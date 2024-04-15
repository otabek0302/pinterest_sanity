import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "@/utils/sanity";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      // console.log(session);
      // console.log(token);
      if (token?.email) session.user.email = token.email;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    SanityCredentials(client),
  ],
  pages: {
    error: "/auth/login",
  },
  adapter: SanityAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
