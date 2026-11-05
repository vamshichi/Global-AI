
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, ShieldCheck, Bell } from "lucide-react";
import { insightItems } from "@/data/insights";
import { InsightCard } from "@/components/insight-card";
import { Button } from "@/components/ui/button";

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-black/10 bg-[#F5F5F1] py-24 lg:py-32"
    >
      <div className="container-edge relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Knowledge & Insights
              </p>
            </div>

            <h2 className="mt-6 text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#101827]">
              The intelligence
              <br />
              <span className="text-[#101827]/45">
                behind the summit.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#101827]/60 lg:pb-2">
            Explore the ideas, frameworks, and regulatory developments shaping
            the next chapter of responsible AI.
          </p>
        </motion.div>

        {/* Featured readiness assessment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-sm bg-[#0B1423] p-7 text-white sm:p-10 lg:mt-20 lg:p-14"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-[320px] w-[320px] rounded-full border border-white/[0.07]" />
          <div className="pointer-events-none absolute right-10 top-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-blue-300/25 bg-blue-300/[0.08] px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-blue-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Featured Research
                </span>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/45">
                Summit Intelligence Series
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                India AI Governance &amp; Security Readiness Index 2026
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                Explore your AI governance and security readiness through a
                focused self-assessment.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="hidden h-20 w-20 items-center justify-center rounded-full border border-white/15 sm:flex">
                <BookOpen className="h-8 w-8 text-blue-200" />
              </div>

              <Button href="#registration" variant="primary">
                Take the Assessment
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative mt-10 border-t border-white/10 pt-5">
            <p className="text-xs tracking-wide text-white/40">
              AI Governance · Risk · Compliance · Security
            </p>
          </div>
        </motion.div>

        {/* Insight resources */}
        <div className="mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Explore the Library
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#101827] sm:text-3xl">
              Perspectives that move you forward.
            </h3>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#101827]/50">
            Practical insights for leaders navigating a changing AI landscape.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insightItems.map((item, i) => (
            <InsightCard
              key={item.title}
              item={item}
              delay={i * 0.06}
            />
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10">
              <Bell className="h-4 w-4 text-[#101827]" />
            </div>

            <div>
              <h4 className="font-medium text-[#101827]">
                Stay ahead of regulatory change.
              </h4>
              <p className="mt-1 text-sm text-[#101827]/55">
                Get weekly regulatory alerts and AI governance updates.
              </p>
            </div>
          </div>

          <Button href="#registration" variant="secondary">
            Subscribe for Updates
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
