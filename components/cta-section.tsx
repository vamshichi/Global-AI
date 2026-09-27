"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-void py-36 lg:py-48">
      <div className="pointer-events-none absolute inset-0 field-grid opacity-30" />
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 bg-signal/10 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-edge relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-[clamp(2.5rem,6.5vw,6rem)] font-medium leading-[1.02] text-ink"
        >
          Can we trust the AI we&rsquo;re about to scale?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm tracking-wide text-ink-dim"
        >
          <span>THU, 26 NOV 2026</span>
          <span className="text-signal">MUMBAI</span>
          <span>200&ndash;250 SEATS ONLY</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#registration" variant="primary">
            Reserve My Seat
          </Button>
          <Button href="#insights" variant="secondary">
            Download the Brief
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
