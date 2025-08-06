import { posts } from "@/lib/posts";
import Link from "next/link";

export default function PostsPage() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6 bg-[#E6F7FF] rounded-3xl">
      <h1 className="text-6xl font-bold mb-16 text-center text-[#333333] animate-fade-in">
        Blog Posts
      </h1>
      <div className="space-y-12">
        {posts.map(({ slug, title, summary, date }) => (
          <article
            key={slug}
            className="p-10 bg-white rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-fade-in"
          >
            <Link href={`/posts/${slug}`}>
              <h2 className="text-4xl font-n text-[#333333] hover:text-blue-600 hover:underline cursor-pointer transition">
                {title}
              </h2>
            </Link>
            <p className="text-xl text-[#333333] mt-6 leading-relaxed">
              {summary.length > 150
                ? summary
                : `${summary} This post dives deep into practicalinsights, offering real-world examples and hands-on guidance to elevate your web development skills.`}
            </p>
            <p className="text-base text-gray-500 mt-6 tracking-wide font-mono">
              {new Date(date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
