
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080D17] py-32 lg:py-44"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 field-grid opacity-[0.18]" />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -left-[15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/[0.12] blur-[150px]"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />
      <div className="pointer-events-none absolute right-[-5%] top-[-10%] h-[350px] w-[350px] rounded-full border border-white/[0.04]" />

      <div className="container-edge relative">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-blue-300/70" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              The Conversation Starts Here
            </span>
            <span className="h-px w-8 bg-blue-300/70" />
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl text-[clamp(2.8rem,7vw,6.8rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white"
          >
            Can we trust the AI
            <br />
            <span className="text-white/40">
              we’re about to scale?
            </span>
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg"
          >
            Join the leaders shaping the future of AI governance, risk,
            compliance, and security.
          </motion.p>

          {/* Event metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/55 sm:text-sm"
          >
            <span>21 January 2027</span>
            <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
            <span className="text-blue-200">Mumbai, India</span>
            <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
            <span>AI GRCS Summit India</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#registration" variant="primary">
              Reserve Your Seat
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>

            <Button href="#insights" variant="secondary">
              Explore the Summit Brief
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-2 text-xs text-white/35"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Built for leaders shaping responsible AI.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
