"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#E6F7FF] text-[#333333] px-6 py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-8 text-[#333333]">
            About DevFusion
          </h1>
          <p className="text-xl leading-relaxed mb-6">
            <strong className="text-blue-700">DevFusion</strong> is a
            collaborative developer hub designed to showcase real-world web
            development skills using <strong>Next.js 14</strong>. This project
            replicates a professional workflow, with features developed in
            separate GitHub branches, thoroughly tested, and merged via pull
            requests to ensure code quality and collaboration.
          </p>
          <p className="text-xl leading-relaxed mb-6">
            Our mission is to create a scalable, modern web application that
            demonstrates proficiency in <strong>dynamic routing</strong>,{" "}
            <strong>server-side rendering</strong>,{" "}
            <strong>form handling with validation</strong>, and{" "}
            <strong>API integration</strong>. Deployed on{" "}
            <strong>Vercel</strong>, DevFusion serves as a portfolio piece to
            highlight expertise in frontend architecture.
          </p>
          <p className="text-xl leading-relaxed">
            Whether you&apos;re a developer looking to collaborate or simply
            curious about our process, explore our blog, check out our stats, or
            reach out via the contact page to join the journey!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/logo.png"
            alt="DevFusion logo"
            width={600}
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </main>
  );
}
