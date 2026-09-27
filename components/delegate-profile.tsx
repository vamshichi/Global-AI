"use client";

import { motion } from "framer-motion";
import { delegateTitles } from "@/data/industry";
import { Counter } from "@/components/ui/counter";

export function DelegateProfile() {
  return (
    <div id="delegates" className="grid gap-16 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="label-tag">Delegates</p>
        <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
          200&ndash;250 seats.
          <br />
          Curated, not collected.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {delegateTitles.map((title) => (
            <span
              key={title}
              className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-ink-dim"
            >
              {title}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border border-line bg-charcoal p-12"
      >
        <p className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none text-signal">
          <Counter value={65} />%
        </p>
        <p className="mt-4 text-lg text-ink">VP-and-above.</p>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-dim">
          This is the room that approves, funds, audits or kills your AI roadmap.
        </p>
      </motion.div>
    </div>
  );
}
