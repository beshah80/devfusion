// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 px-6 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-sky-400">
          DevFusion
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-sky-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-sky-300">
            About
          </Link>
          <Link href="/posts" className="hover:text-sky-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-sky-300">
            Contact
          </Link>
          <Link href="/stats" className="hover:text-sky-300">
            Stats
          </Link>
        </div>
      </div>
    </nav>
  );
}
