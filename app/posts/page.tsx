// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Welcome to <span className="text-sky-500">DevFusion</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-xl">
        A modern full-stack portfolio and blog platform built with Next.js 14,
        Tailwind CSS 3.4, SSR, and dynamic routing.
      </p>
      <div className="flex gap-4">
        <Link
          href="/posts"
          className="px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
        >
          View Blog
        </Link>
        <Link
          href="/about"
          className="px-6 py-2 border border-sky-500 text-sky-500 rounded-full hover:bg-sky-50 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
