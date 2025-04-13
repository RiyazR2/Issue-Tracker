import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
<<<<<<< HEAD
  session: { strategy: "jwt" },
=======
  session: {
    strategy: "jwt",
  },

>>>>>>> 9177e3503bacc44f116f14389fed180f3a97b481
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
