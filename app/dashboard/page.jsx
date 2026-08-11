import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaLayerGroup,
  FaTags,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import LogoutButton from "@/components/auth/LogoutButton";
import ContinueCard from "@/components/dashboard/ContinueCard";

const studyLinks = [
  { href: "/questions", icon: FaBookOpen, label: "Practice Questions" },
  { href: "/practicals", icon: FaClipboardCheck, label: "Practical Exams" },
  { href: "/flashcards", icon: FaLayerGroup, label: "Flashcards" },
];

const accountLinks = [
  { href: "/pricing", icon: FaTags, label: "Pricing & Plans" },
  { href: "/contact", icon: FaEnvelope, label: "Contact Support" },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  const firstName = user.user_metadata?.full_name?.split(" ")[0] || "there";

  return (
    <div className="min-h-screen bg-navy-50 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <header>
          <p className="readout text-xs text-navy-500">DASHBOARD</p>
          <h1 className="mt-1 font-[var(--font-display)] text-2xl font-semibold text-navy-950">
            Welcome back, {firstName}
          </h1>
        </header>

        <div className="mt-6">
          <ContinueCard />
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm">
          {studyLinks.map(({ href, icon: Icon, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`group flex items-center justify-between px-5 py-4 transition-colors hover:bg-navy-50 ${
                i !== 0 ? "border-t border-navy-100" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Icon className="h-4 w-4 text-navy-900" />
                <span className="text-sm font-medium text-navy-950">
                  {label}
                </span>
              </div>
              <FaChevronRight className="h-3 w-3 text-navy-300 transition-transform group-hover:translate-x-0.5 group-hover:text-navy-600" />
            </Link>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm">
          {accountLinks.map(({ href, icon: Icon, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`group flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-navy-50 ${
                i !== 0 ? "border-t border-navy-100" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Icon className="h-3.5 w-3.5 text-navy-500" />
                <span className="text-sm text-navy-700">{label}</span>
              </div>
              <FaChevronRight className="h-3 w-3 text-navy-300 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
          <LogoutButton className="border-t border-navy-100" />
        </div>
      </div>
    </div>
  );
}