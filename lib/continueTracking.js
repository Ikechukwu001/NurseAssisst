const STORAGE_KEY = "nurseassist:last-activity";

export function saveLastActivity({ type, title, subtitle, href }) {
  if (typeof window === "undefined") return;
  try {
    const entry = { type, title, subtitle, href, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently
  }
}

export function getLastActivity() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}