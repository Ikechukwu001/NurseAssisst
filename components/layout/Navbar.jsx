"use client";
import Link from "next/link";
import { FaHome, FaBookOpen, FaClipboardCheck, FaLayerGroup } from "react-icons/fa";

const iconLinks = [
  { href: "/", icon: FaHome, label: "Home" },
  { href: "/questions", icon: FaBookOpen, label: "Questions" },
  { href: "/practicals", icon: FaClipboardCheck, label: "Practicals" },
  { href: "/flashcards", icon: FaLayerGroup, label: "Flashcards" },
];

export default function Navbar() {
  return (
    <div className="flex justify-center bg-navy-50 px-4 py-8">
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-navy-100 bg-white px-2 py-2 shadow-sm sm:gap-2">
        {iconLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-950"
          >
            <Icon className="h-4 w-4" />
          </Link>
        ))}

        <div className="mx-1 h-6 w-px flex-shrink-0 bg-navy-100" />

        <Link
          href="/?auth=signup#auth"
          className="flex-shrink-0 whitespace-nowrap rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}