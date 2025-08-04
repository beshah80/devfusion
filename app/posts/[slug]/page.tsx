// app/posts/[slug]/page.tsx
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Next.js 404 page
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 text-sky-700">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-lg leading-relaxed">{post.summary}</p>
      {/* You can add more post content here */}
    </article>
  );
}
