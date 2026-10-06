"use client";

import { motion } from "framer-motion";
import { industryMix } from "@/data/industry";
import { Button } from "@/components/ui/button";

export function IndustryMix() {
  return (
    <div className="mt-28">
      <p className="label-tag">Industry Mix</p>
      <h3 className="mt-5 max-w-xl text-2xl font-medium text-ink md:text-3xl">
        Eight sectors. One governance conversation.
      </h3>

      <div className="mt-12 space-y-5">
        {industryMix.map((row, i) => (
          <div key={row.label} className="flex items-center gap-6">
            <p className="w-64 flex-shrink-0 text-sm text-ink-dim">{row.label}</p>
            <div className="relative h-9 flex-1 border border-line bg-panel">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.value / 30) * 100}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-signal/80"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-ink">
                {/* {row.value}% */}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-4">
        <Button href="#registration" variant="primary">
          Reserve Your Seat
        </Button>
        <Button href="#why-attend" variant="secondary">
          Check If You Qualify
        </Button>
      </div>
    </div>
  );
}
