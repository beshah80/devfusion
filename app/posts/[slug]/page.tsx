import { posts } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Post Not Found | DevFusion",
      description: "The requested blog post could not be found.",
    };
  }
  return {
    title: `${post.title} | DevFusion`,
    description: post.summary,
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-[#E6F7FF] py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-12 border border-blue-200 animate-fade-in">
        <h1 className="text-5xl font-bold text-[#333333] mb-8 text-center">
          {post.title}
        </h1>
        <p className="text-xl text-[#333333] leading-relaxed text-center mb-8">
          {post.summary} This article provides in-depth insights, practical
          examples, and actionable steps to master the topic.
        </p>
        <p className="text-base text-gray-500 text-center">
          Published on{" "}
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
