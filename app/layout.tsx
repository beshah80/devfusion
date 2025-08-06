import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DevFusion - Next.js Portfolio & Blog",
  description:
    "A modern Next.js portfolio and blog app with dynamic routing, SSR, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#E6F7FF] text-[#333333] font-serif min-h-screen flex flex-col">
        <Navbar />
        <main className="container flex-grow py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
