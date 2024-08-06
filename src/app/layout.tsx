import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import AppBar from "@/components/header/AppBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TOKOPAEDI",
  description: "Simple E-Commerce APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ReactQueryProvider>
          <AppBar />
          <main className="flex min-h-screen flex-col">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
