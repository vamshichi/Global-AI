
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { delegateTitles } from "@/data/industry";
import { Counter } from "@/components/ui/counter";

export function DelegateProfile() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

      {/* Delegate Profile */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2866B5]">
          Delegate Profile
        </p>

        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#102A56] sm:text-4xl">
          200–250
          <span className="block text-[#2866B5]">
            Senior Decision-Makers
          </span>
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-6 text-[#526B89]">
          A curated audience of leaders responsible for shaping,
          approving and managing enterprise AI strategies.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {delegateTitles.map((title) => (
            <span
              key={title}
              className="border border-[#DCE7F5] bg-[#F7F9FC] px-3 py-2 text-xs font-medium text-[#34577F]"
            >
              {title}
            </span>
          ))}
        </div>
      </div>

      {/* Leadership Statistic */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-[#DCE7F5] bg-[#F7F9FC] p-6 sm:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526B89]">
          Senior Leadership Representation
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-5xl font-semibold tracking-tight text-[#174B89] sm:text-6xl">
            <Counter value={65} />%
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-[#102A56]">
          VP-level and above
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#526B89]">
          Connect with senior leaders who influence enterprise
          AI strategy, investment, governance and decision-making.
        </p>
      </motion.div>
    </div>
  );
}
