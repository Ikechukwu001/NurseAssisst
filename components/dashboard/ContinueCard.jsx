"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaClipboardCheck,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";
import { getLastActivity } from "@/lib/continueTracking";

const typeConfig = {
  questions: { icon: FaBookOpen, label: "Questions" },
  practicals: { icon: FaClipboardCheck, label: "Practical" },
  flashcards: { icon: FaLayerGroup, label: "Flashcards" },
};

function timeAgo(timestamp) {
  const minutes = Math.floor((Date.now() - timestamp) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function ContinueCard() {
  const [activity, setActivity] = useState(undefined); // undefined = not checked yet

  useEffect(() => {
    setActivity(getLastActivity());
  }, []);

  // Still checking localStorage — render nothing to avoid a flash
  if (activity === undefined) {
    return (
      <div className="h-[72px] animate-pulse rounded-full border border-navy-100 bg-white" />
    );
  }

  // No activity yet — friendly nudge instead of a card
  if (!activity) {
    return (
      <Link
        href="/questions"
        className="group flex items-center justify-between rounded-full border border-navy-100 bg-white px-5 py-3.5 shadow-sm transition-colors hover:bg-navy-50"
      >
        <span className="text-sm text-navy-600">
          Jump into your first practice paper
        </span>
        <FaArrowRight className="h-3 w-3 text-navy-400 transition-transform group-hover:translate-x-0.5" />
      </Link>
    );
  }

  const { icon: Icon, label } = typeConfig[activity.type] ?? {};

  return (
    <Link
      href={activity.href}
      className="group flex items-center justify-between rounded-full border border-navy-100 bg-white px-4 py-2.5 shadow-sm transition-colors hover:bg-navy-50"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-900">
          {Icon && <Icon className="h-3.5 w-3.5 text-white" />}
        </span>
        <div className="text-left">
          <p className="readout text-[10px] text-navy-400">
            CONTINUE · {label?.toUpperCase()} · {timeAgo(activity.timestamp)}
          </p>
          <p className="text-sm font-medium text-navy-950">{activity.title}</p>
        </div>
      </div>
      <FaArrowRight className="h-3 w-3 flex-shrink-0 text-navy-400 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}