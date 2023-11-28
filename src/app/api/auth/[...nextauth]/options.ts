import connect from "@/db/mongo.config";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";



export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
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
    })
  ],
};