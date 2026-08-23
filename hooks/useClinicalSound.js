"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const MUTE_KEY = "nurseassist_practicals_muted";

export function useClinicalSound() {
  const ctxRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(MUTE_KEY) : null;
    if (stored === "true") setMuted(true);
  }, []);

  const getCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctxRef.current = new AudioCtx();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  // Call this on the first user click of the flow (e.g. "Begin scenario") to
  // satisfy browser autoplay policies before any sound needs to fire mid-case.
  const primeAudio = useCallback(() => {
    getCtx();
  }, [getCtx]);

  const playTone = useCallback(
    (freq, duration, { type = "sine", volume = 0.15, delay = 0 } = {}) => {
      if (muted) return;
      const ctx = getCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration + 0.05);
    },
    [muted, getCtx]
  );

  const playCorrect = useCallback(() => {
    playTone(660, 0.12, { type: "sine", volume: 0.18 });
    playTone(880, 0.18, { type: "sine", volume: 0.18, delay: 0.1 });
  }, [playTone]);

  const playIncorrect = useCallback(() => {
    playTone(220, 0.22, { type: "square", volume: 0.14 });
    playTone(160, 0.28, { type: "square", volume: 0.12, delay: 0.12 });
  }, [playTone]);

  const playTick = useCallback(() => {
    playTone(1000, 0.05, { type: "sine", volume: 0.08 });
  }, [playTone]);

  const playExpire = useCallback(() => {
    playTone(300, 0.4, { type: "sawtooth", volume: 0.16 });
    playTone(250, 0.4, { type: "sawtooth", volume: 0.16, delay: 0.2 });
  }, [playTone]);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      if (typeof window !== "undefined") {
        localStorage.setItem(MUTE_KEY, String(next));
      }
      return next;
    });
  }, []);

  return { playCorrect, playIncorrect, playTick, playExpire, primeAudio, muted, toggleMute };
}