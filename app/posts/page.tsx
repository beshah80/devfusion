// app/posts/page.tsx
import { posts } from "@/lib/posts";
import Link from "next/link";

export default function PostsPage() {
  // Static Generation: data is fetched once at build
  // Because `posts` is static here, Next.js will pre-render this page at build time
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-sky-600">
        Blog Posts
      </h1>
      <div className="space-y-6">
        {posts.map(({ slug, title, summary, date }) => (
          <article
            key={slug}
            className="p-6 border rounded shadow hover:shadow-lg transition bg-white"
          >
            <Link href={`/posts/${slug}`}>
              <h2 className="text-2xl font-semibold text-sky-700 hover:underline">
                {title}
              </h2>
            </Link>
            <p className="text-slate-600 mt-2">{summary}</p>
            <p className="text-sm text-slate-400 mt-2">
              {new Date(date).toLocaleDateString()}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
