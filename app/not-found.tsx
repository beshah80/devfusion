import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E6F7FF] text-center animate-fade-in">
      <h1 className="text-6xl font-bold text-red-600 mb-6">
        404 - Page Not Found
      </h1>
      <p className="text-xl text-[#333333]">
        The page you&apos;re looking for doesn&apos;t exist. Try exploring our{" "}
        <Link
          href="/posts"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          blog
        </Link>{" "}
        or{" "}
        <Link
          href="/contact"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          contact us
        </Link>{" "}
        for assistance.
      </p>
    </div>
  );
}
