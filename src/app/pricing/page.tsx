"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCheck, Copy, Send } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import Background from "./Background";
import CalEmbed from "./CalEmbed";

interface PackageTier {
  name: string;
  badge: string;
  desc: string;
  price: string;
  cycle?: string;
  isPrimary?: boolean;
  features: string[];
}

const standalonePackages: PackageTier[] = [
  {
    name: "Spark",
    badge: "Micro",
    desc: "Logo identity motion",
    price: "$450",
    features: [
      "5–10s logo motion",
      "4K & 2K resolution",
      "MOV & MP4 export",
      "3 day turnaround",
    ],
  },
  {
    name: "Flow",
    badge: "Social",
    desc: "High-energy campaign asset",
    price: "$800",
    features: [
      "10–15s social video",
      "Concept and storyboard",
      "4 day turnaround",
    ],
  },
  {
    name: "Pulse",
    badge: "Flagship",
    desc: "Narrative product video",
    price: "$1,700",
    isPrimary: true,
    features: [
      "Up to 30s narrative",
      "Concept and storyboard",
      "5 day turnaround",
    ],
  },
];

const retainerPackages: PackageTier[] = [
  {
    name: "Design Retainer",
    badge: "Static",
    desc: "Daily marketing & visual collateral",
    price: "$1,600",
    cycle: "/ mo",
    features: [
      "Graphic design",
      "1 active request",
      "24h turnaround",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Motion Retainer",
    badge: "Popular",
    desc: "Ongoing product motion queue",
    price: "$2,750",
    cycle: "/ mo",
    isPrimary: true,
    features: [
      "Motion graphics",
      "1 active request",
      "3-5 day turnaround",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Full Spectrum",
    badge: "Full Suite",
    desc: "Complete motion & graphic pipeline",
    price: "$3,650",
    cycle: "/ mo",
    features: [
      "Motion & graphic design",
      "1 active request",
      "24h / 3-5 day turnaround",
      "Pause or cancel anytime",
    ],
  },
];

function PackageCard({
  pkg,
  isCopied,
  onCopy,
}: {
  pkg: PackageTier;
  isCopied: boolean;
  onCopy: (pkg: PackageTier) => void;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-md transition-all duration-300 ease-out will-change-transform hover:-translate-y-1.5 ${pkg.isPrimary
          ? "border-white/40 bg-zinc-900/70 shadow-[0_0_24px_rgba(255,255,255,0.06)] hover:border-white/60 hover:shadow-[0_16px_36px_-6px_rgba(255,255,255,0.15),0_0_35px_rgba(255,255,255,0.1)] hover:bg-zinc-900/90"
          : "border-white/[0.09] bg-zinc-950/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-white/30 hover:shadow-[0_14px_32px_-6px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.05)] hover:bg-zinc-900/60"
        }`}
    >
      <div className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-300 group-hover:via-white/40" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded border font-space-grotesk ${pkg.isPrimary
                ? "bg-white text-black border-white"
                : "bg-zinc-900/90 text-gray-300 border-white/[0.08]"
              }`}
          >
            {pkg.badge}
          </span>

          <button
            type="button"
            onClick={() => onCopy(pkg)}
            aria-label={`Copy inquiry for ${pkg.name}`}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-400 border border-transparent hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {isCopied ? (
              <>
                <CheckCheck className="h-3.5 w-3.5 text-white" />
                <span className="text-white font-space-grotesk">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="font-space-grotesk">Inquire</span>
              </>
            )}
          </button>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white font-space-grotesk">
          {pkg.name}
        </h3>
        <p className="text-sm text-gray-400 font-inter mt-1 mb-4">{pkg.desc}</p>

        <div className="pb-4 mb-4 border-b border-white/[0.08]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-space-grotesk tabular-nums">
              {pkg.price}
            </span>
            {pkg.cycle && (
              <span className="text-sm text-gray-400 font-inter">{pkg.cycle}</span>
            )}
          </div>
        </div>

        <ul className="space-y-2.5 text-sm text-gray-300 font-inter">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [copiedTier, setCopiedTier] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleCopyInquiry = (pkg: PackageTier) => {
    const text = `Hi Younes, I'm interested in the ${pkg.name}`;
    navigator.clipboard.writeText(text);
    setCopiedTier(pkg.name);
    setShowToast(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
      setCopiedTier(null);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen text-zinc-100 selection:bg-white/20 selection:text-white">
      <Background />

      <Header hideNav={true} />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 pb-6 sm:pb-10">
        <section className="mb-14 sm:mb-16 pt-2 sm:pt-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.25] max-w-4xl text-white font-space-grotesk mb-3 mx-auto">
            Motion Design{" "}
            <span className="font-normal text-gray-300">rooted in the</span>{" "}
            Solana{" "}
            <span className="font-normal text-gray-300">ecosystem</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-base sm:text-lg font-inter leading-relaxed mx-auto">
            Built for brands with something to say. Bringing pixels to life with
            clean, minimal, and modern motion.
          </p>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold font-space-grotesk text-white">
              Standalone Projects
            </h2>
            <div className="flex-1 h-px bg-[#3A3A3A]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {standalonePackages.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                isCopied={copiedTier === pkg.name}
                onCopy={handleCopyInquiry}
              />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold font-space-grotesk text-white">
              Monthly Retainers
            </h2>
            <div className="flex-1 h-px bg-[#3A3A3A]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {retainerPackages.map((pkg) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                isCopied={copiedTier === pkg.name}
                onCopy={handleCopyInquiry}
              />
            ))}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-12">
          <a
            href="https://t.me/gh_yns"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center p-[1.5px] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
          >
            <div className="absolute inset-[-200%] animate-glow-border opacity-20 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(255,255,255,0.4)_315deg,#ffffff_360deg)]" />

            <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5),inset_0_0_12px_rgba(255,255,255,0.2)]" />

            <div className="relative flex items-center justify-center gap-2.5 w-full rounded-[10px] bg-zinc-950/90 group-hover:bg-zinc-900/95 px-9 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-all duration-300 backdrop-blur-md font-space-grotesk">
              <Send className="h-4 w-4 text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="tracking-widest font-space-grotesk">
                Chat On Telegram
              </span>
            </div>
          </a>
        </div>

        <div className="rounded-xl border border-white/[0.09] bg-zinc-950/60 p-5 sm:p-6 backdrop-blur-md text-sm text-gray-400 font-inter mb-12">
          <p className="leading-relaxed">
            <strong className="text-white font-semibold font-space-grotesk">
              Retainer Terms:
            </strong>{" "}
            Billed in advance every 30 days. Work runs 1 active project at a
            time. Subscriptions can be paused or canceled prior to the next
            billing cycle.
          </p>
        </div>

        <div id="book" className="scroll-mt-12">
          <CalEmbed />
        </div>
      </div>

      <Footer />

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none ${showToast
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-3 scale-95"
          }`}
      >
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/95 border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.06)] backdrop-blur-md text-sm font-medium text-white font-inter">
          <CheckCheck className="h-4 w-4 text-white shrink-0" />
          <span>
            Copied: &ldquo;Hi Younes, I&apos;m interested in the {copiedTier}
            &rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
