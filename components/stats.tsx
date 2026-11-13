
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

  return (
    <section
      id="market-intelligence"
      className="relative overflow-hidden bg-[#102A56] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#2866B5]/20 blur-[150px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C5A46D]/[0.06] blur-[130px]" />
      </div>

      <div className="container-edge relative z-10">

        {/* Section heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C5A46D]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D8BD8B]">
                AI Governance Landscape · 2027
              </p>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.7rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-white">
              AI is advancing.
              <br />
              <span className="text-[#A9C9F3]">
                Is governance keeping pace?
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-blue-100/75 lg:pb-2">
            The future of AI depends on responsible governance,
            enterprise risk management and security.
          </p>
        </motion.div>

        {/* Featured event video */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden border border-white/10 bg-[#0B1E3B]"
        >
          <div className="relative h-[280px] sm:h-[380px] lg:h-[460px]">

            {/* Background video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/ai-grcs-poster.jpg"
            >
              <source
                src="/videos/hero-background-2.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>

            {/* Video overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071B39]/85 via-[#071B39]/35 to-transparent" />

            <div className="absolute bottom-0 left-0 z-10 max-w-2xl p-7 sm:p-10 lg:p-14">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E7CB98]">
                AI GRCS Summit India · 2027
              </p>

              <h3 className="text-3xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                Building trust in the age of artificial intelligence.
              </h3>
            </div>

            {/* Event date */}
            <div className="absolute right-6 top-6 z-10 hidden border border-white/30 bg-[#102A56]/60 px-4 py-3 backdrop-blur-sm sm:block">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                Mumbai, India
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                21 January 2027
              </p>
            </div>
          </div>
        </motion.div>

        {/* Four governance pillars */}
        <div className="grid grid-cols-2 border-l border-t border-white/15 sm:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.label}
                initial={reducedMotion ? false : { opacity: 0, y: 15 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-3 border-b border-r border-white/15 px-4 py-6 transition-colors hover:bg-white/[0.05] sm:justify-center sm:py-7"
              >
                <Icon
                  size={19}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#D8BD8B]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white sm:text-sm">
                  {pillar.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Market statistics */}
        <div className="mt-20 lg:mt-24">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D8BD8B]">
                Market Intelligence
              </p>

              <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                The numbers behind AI.
              </h3>
            </div>

            <p className="text-xs text-blue-100/60">
              AI Governance · Risk · Compliance · Security
            </p>
          </motion.div>

          <div className="grid grid-cols-2 border-l border-t border-white/15 lg:grid-cols-4">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                className="group relative flex min-h-[190px] flex-col justify-between border-b border-r border-white/15 bg-white/[0.035] p-6 transition-colors duration-300 hover:bg-white/[0.08] sm:min-h-[220px] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-100/45">
                    0{index + 1}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-blue-100/50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D8BD8B]"
                  />
                </div>

                <div>
                  <div className="font-serif text-[clamp(2.5rem,4vw,4.2rem)] leading-none tracking-[-0.05em] text-white">
                    <span className="text-[#D8BD8B]">{stat.prefix}</span>
                    <Counter value={stat.value} />
                    <span className="text-[#D8BD8B]">{stat.suffix}</span>
                  </div>

                  <p className="mt-4 max-w-[24ch] text-sm leading-6 text-blue-100/75">
                    {stat.label}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D8BD8B] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
