export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
}

export const posts: Post[] = [
  {
    slug: "nextjs-intro",
    title: "Introduction to Next.js",
    summary: "Learn the basics of Next.js framework for React apps.",
    date: "2025-07-11",
  },
  {
    slug: "tailwind-css-setup",
    title: "Getting Started with Tailwind CSS",
    summary: "Setup Tailwind CSS and build responsive UIs easily.",
    date: "2025-07-12",
  },
  {
    slug: "dynamic-routing",
    title: "Dynamic Routing in Next.js",
    summary: "How to create dynamic routes using file system routing.",
    date: "2025-07-13",
  },
];