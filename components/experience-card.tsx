"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  experience,
  size = "md",
  delay = 0,
}: {
  experience: Experience;
  size?: "lg" | "md";
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-charcoal p-8 transition-colors duration-300 hover:border-signal/60",
        size === "lg" ? "min-h-[360px]" : "min-h-[260px]"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(62,107,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative">
        <span className="font-serif text-3xl italic text-signal">{experience.number}</span>
        <h3
          className={cn(
            "mt-6 font-medium leading-tight text-ink",
            size === "lg" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          )}
        >
          {experience.title}
        </h3>
      </div>
      <p className="relative mt-8 max-w-md text-sm leading-relaxed text-ink-dim">
        {experience.description}
      </p>
      <span className="absolute bottom-0 left-0 h-px w-0 bg-signal transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
