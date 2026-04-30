declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "consent" | "set",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  action: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}

export {};
