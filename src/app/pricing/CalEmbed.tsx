"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "30min", { origin: "https://app.cal.com" });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;

      if (Cal.ns && Cal.ns["30min"]) {
        Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          calLink: "ynsgh/30min",
        });

        Cal.ns["30min"]("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    }
  }, []);

  return (
    <div className="w-full my-8 min-h-[650px] rounded-2xl overflow-hidden border border-white/[0.09] bg-zinc-950/60 p-2 sm:p-4 backdrop-blur-md">
      <div
        id="my-cal-inline-30min"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "650px",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
