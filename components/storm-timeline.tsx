"use client";

import { motion } from "framer-motion";
import { stormTimeline } from "@/data/storm";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export function StormTimeline() {
  return (
    <section className="relative border-t border-line bg-navy py-28 lg:py-36">
      <div className="container-edge">
        <SectionHeader
          eyebrow="The 90-Day Storm"
          headline="You are standing inside India's most consequential AI-regulation window."
        />

        <div className="mt-20 grid gap-0 border-t border-line md:grid-cols-5">
          {stormTimeline.map((entry, i) => (
            <motion.div
              key={entry.date}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border-b border-line px-1 py-8 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
            >
              <span className="absolute left-0 top-8 h-px w-6 bg-signal transition-all duration-300 group-hover:w-10 md:hidden" />
              <p className="text-sm font-semibold tracking-wide text-signal">{entry.tag}</p>
              <p className="mt-3 text-2xl font-medium text-ink">{entry.date}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">{entry.headline}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-2xl font-serif text-2xl italic leading-snug text-ink md:text-3xl"
        >
          No event has turned this moment into a room.
          <br />
          Until now.
        </motion.p>

        {/* <div className="mt-10">
          <Button href="#why-attend" variant="secondary">
            See Why This Matters
          </Button>
        </div> */}
      </div>
    </section>
  );
}
