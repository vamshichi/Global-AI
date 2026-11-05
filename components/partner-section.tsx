
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyPartner, buyerCategories } from "@/data/partners";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Building2,
  Handshake,
  Target,
} from "lucide-react";

export function PartnerSection() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay },
  });

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#080D17] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 h-[550px] w-[550px] rounded-full bg-blue-500/[0.07] blur-[150px]"
      />

      <div className="container-edge relative z-10">
        {/* Header */}
        <motion.div {...reveal()} className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
              Strategic Partnerships
            </p>
          </div>

          <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
            Stop selling logos.
            <br />
            <span className="text-white/40">
              Start owning the category.
            </span>
          </h2>

          <div className="mt-8 grid gap-8 border-l border-blue-400/40 pl-6 sm:pl-8 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <p className="max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Put your brand in front of the people shaping enterprise AI
              governance, risk, compliance, and security decisions. Build
              relationships that go beyond visibility.
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/35">
              <Handshake className="h-5 w-5 text-blue-300" />
              Access · Influence · Opportunity
            </div>
          </div>
        </motion.div>

        {/* Main partner content */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Why partner */}
          <motion.div {...reveal(0.08)}>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                Why Partner
              </p>

              <Target size={17} className="text-white/25" />
            </div>

            <div className="border-t border-white/10">
              {whyPartner.map((point, i) => (
                <motion.div
                  key={point}
                  {...reveal(i * 0.05)}
                  className="group flex gap-5 border-b border-white/10 py-6 sm:py-7"
                >
                  <span className="mt-0.5 font-serif text-lg text-blue-300/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="flex-1 text-sm leading-7 text-white/60 transition-colors duration-300 group-hover:text-white/90 sm:text-base">
                    {point}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                  />
                </motion.div>
              ))}
            </div>

            {/* Partner quote */}
            <blockquote className="relative mt-10 border-l-2 border-blue-400 pl-6 sm:pl-8">
              <p className="max-w-xl font-serif text-xl italic leading-relaxed text-white/80 sm:text-2xl">
                “The people governing AI will decide which AI technology
                enterprises buy. Be in the room where that decision gets made.”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-6 bg-blue-400/50" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  The Partnership Opportunity
                </span>
              </div>
            </blockquote>
          </motion.div>

          {/* Buyer ecosystem panel */}
          <motion.div {...reveal(0.15)}>
            <div className="relative overflow-hidden border border-white/10 bg-white/[0.025]">
              <div className="absolute right-0 top-0 h-40 w-40 bg-blue-500/[0.06] blur-[70px]" />

              <div className="relative border-b border-white/10 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-blue-300/20 bg-blue-300/[0.06]">
                    <Building2 className="h-5 w-5 text-blue-300" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Delegate Ecosystem
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-tight sm:text-3xl">
                  Who’s buying in this room?
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                  Connect with enterprise leaders evaluating the next
                  generation of AI governance and security solutions.
                </p>
              </div>

              <div className="relative grid sm:grid-cols-2">
                {buyerCategories.map((category, i) => (
                  <div
                    key={category}
                    className="group flex min-h-[100px] items-start gap-4 border-b border-r border-white/10 p-5 transition-colors duration-300 hover:bg-white/[0.04] sm:p-6"
                  >
                    <span className="mt-0.5 text-[10px] tracking-[0.15em] text-blue-300/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-white/65 transition-colors group-hover:text-white">
                      {category}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative flex items-center justify-between gap-4 p-6 sm:p-8">
                <p className="text-xs leading-5 text-white/35">
                  Position your brand where decisions take shape.
                </p>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-blue-300"
                />
              </div>
            </div>

            {/* CTA area */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <Button href="#registration" variant="primary" className="w-full">
                  View Partnership Tiers
                </Button>
              </div>

              <div className="flex-1">
                <Button href="#registration" variant="secondary" className="w-full">
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          {...reveal(0.2)}
          className="mt-16 border-t border-white/10 pt-7 lg:mt-24"
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">
            AI GRCS Summit India 2027
          </p>

          <p className="mt-3 max-w-3xl text-xl font-medium leading-relaxed tracking-tight text-white/70 sm:text-2xl">
            Don’t just participate in the conversation.
            <span className="text-blue-300"> Help define it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
