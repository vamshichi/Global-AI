"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { InsightItem } from "@/data/insights";

export function InsightCard({ item, delay = 0 }: { item: InsightItem; delay?: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="focus-ring group flex flex-col justify-between border border-line bg-charcoal p-7 transition-colors hover:border-signal/60"
    >
      <div>
        <p className="label-tag">{item.label}</p>
        <p className="mt-4 text-lg font-medium leading-snug text-ink">{item.title}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm text-ink-dim transition-colors group-hover:text-signal">
        {item.cta}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
}
