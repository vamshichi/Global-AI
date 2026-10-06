"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-void pt-32 pb-16"
    >
      {/* backdrop: architectural grid + light trails */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 field-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/60 to-void" />
        <svg
          className="absolute right-0 top-0 h-full w-full opacity-70 md:w-2/3"
          viewBox="0 0 900 900"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trail" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3E6BFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#3E6BFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3E6BFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M ${80 + i * 40} 900 C ${260 + i * 30} ${640 - i * 20}, ${420 + i * 10} ${420 - i * 10}, ${760 - i * 20} ${60 + i * 30}`}
              stroke="url(#trail)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={`n-${i}`}
              cx={100 + ((i * 53) % 800)}
              cy={100 + ((i * 97) % 800)}
              r={i % 5 === 0 ? 2 : 1}
              fill="#F3F1EA"
              opacity={0.15}
            />
          ))}
        </svg>
      </div>

      <div className="container-edge relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="label-tag">
            Global AI GRCS Summit India 2026
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-5xl text-display font-medium text-ink"
          >
            From AI Adoption
            <br />
            to AI Accountability.
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl font-serif text-2xl italic text-ink/90 md:text-3xl">
            &ldquo;The AI you deployed yesterday is being judged today.&rdquo;
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-lg text-ink-dim">
            One day. One room. Every regulator, risk officer and board that matters.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3"
          >
            <div>
              <p className="label-tag">Thursday</p>
              <p className="mt-1 text-lg text-ink">10 December 2026</p>
            </div>
            <div>
              <p className="label-tag">Venue</p>
              <p className="mt-1 text-lg text-ink">
                Courtyard by Marriott
                <br />
                Mumbai International Airport
              </p>
            </div>
            <div>
              <p className="label-tag">200&ndash;250 Seats</p>
              <p className="mt-1 text-lg text-ink">Curated. Not crowded.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Button href="#registration" variant="primary">
              Reserve Your Seat
            </Button>
            <Button href="#partners" variant="secondary">
              Become a Founding Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
