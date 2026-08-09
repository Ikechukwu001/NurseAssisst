"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function LottiePlayer({ src, className = "", loop = true, fallback = null }) {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((json) => active && setData(json))
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, [src]);

  if (failed) return fallback;
  if (!data) return <div className={`animate-pulse bg-navy-100 ${className}`} />;

  return <Lottie animationData={data} loop={loop} className={className} />;
}