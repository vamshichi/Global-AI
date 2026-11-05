
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { marketStats } from "@/data/stats";
import { Counter } from "@/components/ui/counter";
import { ArrowUpRight } from "lucide-react";

export function Stats() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="market-intelligence"
      className="relative overflow-hidden bg-[#080D17] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.06] blur-[130px]"
      />

      <div className="container-edge relative z-10">
        {/* Section intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-300">
                Market Intelligence · 2026
              </p>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              The market moved
              <br />
              <span className="text-white/40">faster than the guardrails.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-sm text-sm leading-7 text-white/50">
              A snapshot of the rapidly evolving AI governance, risk,
              compliance and security landscape.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              India AI Governance &amp; Security Intelligence Report
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: reducedMotion ? 0 : i * 0.1,
              }}
              className="group relative min-h-[230px] border-b border-r border-white/10 px-6 py-8 transition-colors duration-500 hover:bg-white/[0.035] sm:px-8 sm:py-10 lg:min-h-[280px] lg:px-7 lg:py-12"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  0{i + 1}
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                />
              </div>

              <div className="mt-12 font-serif text-[clamp(2.8rem,5vw,4.8rem)] leading-none tracking-[-0.04em] text-white lg:mt-16">
                <span className="text-blue-300">{stat.prefix}</span>
                <Counter value={stat.value} />
                <span className="text-blue-300">{stat.suffix}</span>
              </div>

              <p className="mt-6 max-w-[24ch] text-sm leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/75">
                {stat.label}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-2xl text-xs leading-6 text-white/35">
            The numbers tell a story. The summit brings together the people
            responsible for what happens next.
          </p>

          <a
            href="#agenda"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-blue-300"
          >
            Explore the summit
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
