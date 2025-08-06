import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DevFusion - Modern Next.js Portfolio & Blog",
  description:
    "Showcasing Next.js, Tailwind CSS, dynamic routing, and SSR with DevFusion.",
  openGraph: {
    title: "DevFusion",
    description:
      "Modern portfolio and blog built with Next.js and Tailwind CSS.",
    url: "https://yourdomain.com",
    siteName: "DevFusion",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <section className="min-h-screen bg-[#E6F7FF] py-24 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl p-12 sm:p-20 border border-blue-200 text-center animate-fade-in">
        <h1 className="text-6xl font-bold mb-12 text-[#333333]">
          Welcome to <span className="text-blue-600">DevFusion</span>
        </h1>
        <p className="text-xl text-[#333333] leading-relaxed max-w-5xl mx-auto mb-16">
          DevFusion is a modern full-stack portfolio and blog platform built
          with Next.js 14, Tailwind CSS 3.4, server-side rendering, and dynamic
          routing. Explore our blog for insights on web development, learn about
          our mission, or get in touch to collaborate on exciting projects.
        </p>
        <div className="flex justify-center gap-8">
          <Link
            href="/posts"
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Blog
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:text-blue-700 transition transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
