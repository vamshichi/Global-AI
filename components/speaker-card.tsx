"use client";

import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export function SpeakerCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="group relative overflow-hidden border border-line bg-charcoal"
    >
      <div className="flex aspect-[4/5] items-center justify-center bg-panel transition-transform duration-700 group-hover:scale-[1.03]">
        <UserRound className="h-14 w-14 text-ink-faint" strokeWidth={1} />
      </div>
      <div className="border-t border-line px-5 py-4">
        <p className="text-sm font-medium text-ink-faint">Speaker to be announced</p>
        <p className="mt-1 text-xs text-ink-faint/70">Designation &middot; Organization</p>
      </div>
    </motion.div>
  );
}
