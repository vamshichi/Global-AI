
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { marketStats } from "@/data/stats";
import { Counter } from "@/components/ui/counter";
import {
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Scale,
  LockKeyhole,
} from "lucide-react";

const pillars = [
  { label: "Governance", icon: ShieldCheck },
  { label: "Risk", icon: Activity },
  { label: "Compliance", icon: Scale },
  { label: "Security", icon: LockKeyhole },
];

export function Stats() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      delay: reducedMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="market-intelligence"
      className="relative isolate w-full overflow-hidden bg-[#102A56] py-10 text-white sm:py-14 md:py-16 lg:py-20"
    >
      {/* BACKGROUND DETAILS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-20 h-64 w-64 rounded-full bg-[#2866B5]/20 blur-[100px] sm:h-96 sm:w-96 sm:blur-[130px] lg:h-[500px] lg:w-[500px]" />

        <div className="absolute -bottom-20 -left-40 h-64 w-64 rounded-full bg-[#C5A46D]/[0.06] blur-[100px] sm:h-80 sm:w-80 sm:blur-[120px] lg:h-[400px] lg:w-[400px]" />
      </div>

      <div className="container-edge relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14">

        {/* SECTION HEADING */}
        <motion.div
          {...reveal()}
          className="mb-8 grid min-w-0 gap-5 sm:mb-12 sm:gap-7 lg:mb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div className="min-w-0">
            <h2 className="max-w-3xl text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.08] tracking-[-0.055em] text-white">
              AI is advancing.

              <br className="hidden sm:block" />

              <span className="text-[#A9C9F3]">
                {" "}Is governance keeping pace?
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-6 text-blue-100/75 sm:text-sm sm:leading-7 lg:pb-2">
            The future of AI depends on responsible governance,
            enterprise risk management and security.
          </p>
        </motion.div>

        {/* FEATURED EVENT VIDEO */}
        <motion.div
          {...reveal(0.1)}
          className="group relative w-full overflow-hidden border border-white/10 bg-[#0B1E3B]"
        >
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6]">

            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/ai-grcs-poster.jpg"
              aria-label="AI GRCS Summit background video"
            >
              <source
                src="/videos/hero-background-4.mp4"
                type="video/mp4"
              />

              Your browser does not support HTML video.
            </video>

            {/* VIDEO OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/95 via-[#071B39]/35 to-[#071B39]/10 sm:bg-gradient-to-r sm:from-[#071B39]/85 sm:via-[#071B39]/40 sm:to-transparent" />

            {/* VIDEO CONTENT */}
            <div className="absolute bottom-0 left-0 z-10 w-full max-w-2xl p-4 sm:p-7 md:p-10 lg:p-14">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E7CB98] sm:mb-4 sm:text-[10px] sm:tracking-[0.22em]">
                AI GRCS Summit India · 2027
              </p>

              <h3 className="max-w-xl text-xl font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Building trust in the age of artificial intelligence.
              </h3>
            </div>

            {/* EVENT DATE - DESKTOP */}
            <div className="absolute right-4 top-4 z-10 hidden border border-white/30 bg-[#102A56]/65 px-4 py-3 backdrop-blur-sm sm:block md:right-6 md:top-6">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/70">
                Mumbai, India
              </p>

              <p className="mt-1 text-xs font-semibold text-white md:text-sm">
                21 January 2027
              </p>
            </div>
          </div>

          {/* EVENT DATE - MOBILE */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#0B1E3B] px-4 py-3 sm:hidden">
            <span className="text-[10px] uppercase tracking-[0.12em] text-white/60">
              Mumbai, India
            </span>

            <span className="text-[11px] font-semibold text-white">
              21 January 2027
            </span>
          </div>
        </motion.div>

        {/* GOVERNANCE PILLARS */}
        <div className="mt-6 grid grid-cols-1 border-l border-t border-white/15 min-[480px]:grid-cols-2 lg:mt-8 lg:grid-cols-4">

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.label}
                {...reveal(index * 0.06)}
                className={`
                  flex min-h-[68px] min-w-0 items-center gap-3
                  border-b border-r border-white/15
                  px-4 py-4
                  transition-colors duration-300 hover:bg-white/[0.05]
                  sm:min-h-[82px] sm:justify-start sm:px-5 sm:py-5
                  lg:justify-center lg:gap-3 lg:px-3 lg:py-6
                `}
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="h-5 w-5 shrink-0 text-[#D8BD8B] sm:h-6 sm:w-6 lg:h-7 lg:w-7"
                />

                <span className="min-w-0 break-words text-sm font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-base lg:text-sm xl:text-base">
                  {pillar.label}
                </span>
              </motion.div>
            );
          })}

        </div>

        {/* MARKET STATISTICS */}
        <div className="mt-12 sm:mt-16 lg:mt-20">

          {/* STATISTICS HEADING */}
          <motion.div
            {...reveal()}
            className="mb-7 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D8BD8B] sm:text-[10px] sm:tracking-[0.22em]">
                Market Intelligence
              </p>

              <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white sm:mt-3 sm:text-3xl md:text-4xl">
                The numbers behind AI.
              </h3>
            </div>

            <p className="text-[10px] leading-5 text-blue-100/60 sm:text-xs">
              AI Governance · Risk · Compliance · Security
            </p>
          </motion.div>

          {/* RESPONSIVE STATISTICS GRID */}
          <div className="grid grid-cols-1 border-l border-t border-white/15 min-[420px]:grid-cols-2 lg:grid-cols-4">

            {marketStats.map((stat, index) => {
              const hasPrefixAndSuffix =
                Boolean(stat.prefix) && Boolean(stat.suffix);

              return (
                <motion.div
                  key={stat.label}
                  {...reveal(index * 0.07)}
                  className="group relative flex min-h-[165px] min-w-0 flex-col justify-between overflow-hidden border-b border-r border-white/15 bg-white/[0.035] p-4 transition-colors duration-300 hover:bg-white/[0.08] min-[420px]:min-h-[185px] sm:p-6 lg:min-h-[210px] lg:p-7 xl:p-8"
                >
                  {/* CARD NUMBER */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-blue-100/45 sm:text-[10px]">
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-blue-100/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D8BD8B]"
                    />
                  </div>

                  {/* STATISTIC VALUE AND LABEL */}
                  <div className="mt-7 min-w-0 sm:mt-8">

                    <div
                      className={`flex w-full min-w-0 items-baseline gap-0.5 whitespace-nowrap font-serif leading-none tracking-[-0.055em] text-white ${
                        hasPrefixAndSuffix
                          ? "text-[clamp(1.5rem,5vw,3.8rem)] sm:text-[clamp(1.6rem,3.5vw,4rem)]"
                          : "text-[clamp(2rem,6vw,4.2rem)]"
                      }`}
                    >
                      {stat.prefix && (
                        <span className="shrink-0 text-[#D8BD8B]">
                          {stat.prefix}
                        </span>
                      )}

                      <span className="min-w-0">
                        <Counter value={stat.value} />
                      </span>

                      {stat.suffix && (
                        <span className="shrink-0 text-[#D8BD8B]">
                          {stat.suffix}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 max-w-[26ch] break-words text-xs leading-5 text-blue-100/75 sm:mt-4 sm:text-sm sm:leading-6">
                      {stat.label}
                    </p>
                  </div>

                  {/* HOVER ACCENT */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D8BD8B] transition-all duration-500 group-hover:w-full" />

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
