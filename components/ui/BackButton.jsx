"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ href, label = "Back", className = "" }) {
  const router = useRouter();

  const content = (
    <span className="flex items-center gap-2 text-sm font-medium text-navy-600 transition-colors hover:text-navy-950">
      <FaArrowLeft className="h-3 w-3" />
      {label}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`inline-flex ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex ${className}`}
    >
      {content}
    </button>
  );
}