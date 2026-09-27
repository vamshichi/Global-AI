"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index?: string;
  eyebrow: string;
  headline: React.ReactNode;
  supporting?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  index,
  eyebrow,
  headline,
  supporting,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex items-center gap-3 label-tag",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="text-signal">{index}</span>}
        <span>{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="mt-5 text-[clamp(2rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-tight text-ink"
      >
        {headline}
      </motion.h2>
      {supporting && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg leading-relaxed text-ink-dim"
        >
          {supporting}
        </motion.p>
      )}
    </div>
  );
}
