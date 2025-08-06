"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/posts", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/stats", label: "Stats" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition"
        >
          DevFusion
        </Link>
        <ul className="flex space-x-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-lg font-semibold hover:text-blue-600 transition transform hover:scale-105 ${
                  pathname === href ? "text-blue-600" : "text-[#333333]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
