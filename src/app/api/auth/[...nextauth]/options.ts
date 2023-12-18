import connect from "@/db/mongo.config";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Next Auth",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        connect();
        const user = await User.findOne({ email: credentials?.email });
        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }
    )

  ],
  // it runs before the user is created in the database for LOGin with Google
  callbacks: {
    async signIn(profile) {
      connect();
      const email =profile.user.email
      const user = await User.findOne({ email});
      if (user) {
        return true
      }
      return false
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};