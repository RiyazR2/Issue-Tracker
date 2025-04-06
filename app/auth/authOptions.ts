// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// import { NextAuthOptions } from "next-auth";

// // const prisma = new PrismaClient();
// const prisma = new PrismaClient({
//   log: ["query", "info", "warn", "error"],
// });
// console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
// console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

// // const authOptions: NextAuthOptions = {
// //   adapter: PrismaAdapter(prisma),
// //   providers: [
// //     GoogleProvider({
// //       clientId: process.env.GOOGLE_CLIENT_ID!,
// //       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// //     }),
// //   ],
// //   session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
// //   secret: process.env.NEXTAUTH_SECRET,
// //   debug: process.env.NODE_ENV === "development",
// // };

// // export default authOptions;

// const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
//   secret: process.env.NEXTAUTH_SECRET,
//   debug: process.env.NODE_ENV === "development",
// };
// export default authOptions;

import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";

// PrismaClient Singleton (Vercel optimization)
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    error: "/auth/error", // Path to custom error page
  },
};


export default authOptions