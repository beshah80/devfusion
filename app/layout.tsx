// app/layout.tsx
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevFusion | Full-Stack Blog & Portfolio",
  description: "A full-featured Next.js project with modern web concepts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-4 md:px-8 lg:px-16 py-6">{children}</main>
      </body>
    </html>
  );
}
