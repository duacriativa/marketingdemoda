declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export const pushEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  // dataLayer → GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventData });

  // gtag → GA4 direto (não depende de tag configurada no GTM)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventData);
  }
};
