// import NextAuth from "next-auth";

// import authOptions from "@/app/auth/authOptions";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// import authOptions from "@/app/auth/authOptions";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import authOptions from "@/app/auth/authOptions";

// NextAuth handler
const handler = async (req: any, res: any) => {
  try {
    return await NextAuth(req, res, authOptions);
  } catch (error) {
    console.error("NextAuth error:", error);
    res.status(500).json({ error: "Authentication failed" });
  }
};

// Export GET and POST handlers
export { handler as GET, handler as POST };
