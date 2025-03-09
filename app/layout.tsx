import "@radix-ui/themes/styles.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import "./theme-config.css";
import NavBar from "./NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}

      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <NavBar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
