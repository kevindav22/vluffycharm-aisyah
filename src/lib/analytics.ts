export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export type TrackedEvent =
  | { event: "wa_click"; placement: string; product_name?: string; value?: number }
  | { event: "product_view"; placement: string; product_name: string; value: number }
  | { event: "custom_start"; mode: "charm" | "watch" }
  | { event: "custom_export"; mode: "charm" | "watch"; charm_count: number }
  | { event: "custom_order"; mode: "charm" | "watch"; charm_count: number; value: number }
  | { event: "bundling_order"; product_name: string; value: number };

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const track = (payload: TrackedEvent) => {
  if (typeof window === "undefined") return;
  if (!GTM_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};
