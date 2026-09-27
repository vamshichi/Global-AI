"use client";

import { motion } from "framer-motion";
import { marketStats } from "@/data/stats";
import { Counter } from "@/components/ui/counter";
import { Button } from "@/components/ui/button";

export function Stats() {
  return (
    <section className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label-tag">By the Numbers</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-medium leading-tight text-ink">
              The market moved faster than the guardrails.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ink-faint">
            India AI Governance &amp; Security Intelligence Report, 2026 edition.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-none border border-line bg-line md:grid-cols-4">
          {marketStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-void px-6 py-10"
            >
              <p className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none text-ink">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-5 max-w-[22ch] text-sm leading-relaxed text-ink-dim">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <Button href="#insights" variant="secondary">
            Explore the Full Market Study
          </Button>
        </div>
      </div>
    </section>
  );
}
