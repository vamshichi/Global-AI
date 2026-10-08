"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  const line1 = "From AI Adoption";
  const line2 = "to AI Accountability.";

  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2, setTypedLine2] = useState("");
  const [phase, setPhase] = useState<"line1" | "line2" | "done">("line1");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "line1") {
      if (typedLine1.length < line1.length) {
        timeout = setTimeout(() => {
          setTypedLine1(line1.slice(0, typedLine1.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => {
          setPhase("line2");
        }, 350);
      }
    }

    if (phase === "line2") {
      if (typedLine2.length < line2.length) {
        timeout = setTimeout(() => {
          setTypedLine2(line2.slice(0, typedLine2.length + 1));
        }, 55);
      } else {
        timeout = setTimeout(() => {
          setPhase("done");
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedLine1, typedLine2, phase]);

  return (
    <section
      id="home"
      className="
        relative
        h-screen
        min-h-[700px]
        max-h-screen
        overflow-hidden
        bg-void
        pt-24
        pb-10
      "
    >
      {/* BACKDROP */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 field-grid opacity-40" />

        <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/60 to-void" />

        <svg
          className="absolute right-0 top-0 h-full w-full opacity-70 md:w-2/3"
          viewBox="0 0 900 900"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="trail" x1="0" y1="0" x2="1" y2="1">
              <stop
                offset="0%"
                stopColor="#3E6BFF"
                stopOpacity="0"
              />
              <stop
                offset="50%"
                stopColor="#3E6BFF"
                stopOpacity="0.9"
              />
              <stop
                offset="100%"
                stopColor="#3E6BFF"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {Array.from({ length: 7 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M ${80 + i * 40} 900 C ${
                260 + i * 30
              } ${640 - i * 20}, ${420 + i * 10} ${
                420 - i * 10
              }, ${760 - i * 20} ${60 + i * 30}`}
              stroke="url(#trail)"
              strokeWidth="1"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 2.4,
                delay: 0.3 + i * 0.12,
                ease: "easeOut",
              }}
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

      {/* CONTENT */}
      <div
        className="
          container-edge
          relative
          z-10
          pt-10
          flex
          h-full
          items-center
        "
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {/* LABEL */}
          <motion.p
            variants={item}
            className="label-tag"
          >
            Global AI GRCS Summit India 2026
          </motion.p>

          {/* TYPEWRITER HEADING */}
          <motion.h1
            variants={item}
            className="
              mt-4
              max-w-5xl
              text-display
              font-sm
              leading-[0.95]
              text-ink
            "
            aria-label="From AI Adoption to AI Accountability."
          >
            <span>{typedLine1}</span>
            <br />

            <span>{typedLine2}</span>

            {/* CURSOR */}
            {phase !== "done" && (
              <motion.span
                aria-hidden="true"
                className="
                  ml-2
                  inline-block
                  h-[0.8em]
                  w-[3px]
                  translate-y-[0.05em]
                  bg-signal
                "
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.h1>

          {/* QUOTE */}
          <motion.p
            variants={item}
            className="
              mt-6
              max-w-xl
              font-serif
              text-xl
              italic
              leading-relaxed
              text-ink/90
              md:text-2xl
            "
          >
            &ldquo;The AI you deployed yesterday is being judged today.&rdquo;
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="
              mt-3
              max-w-xl
              text-base
              leading-relaxed
              text-ink-dim
              md:text-lg
            "
          >
            One day. One room. Every regulator, risk officer and board that
            matters.
          </motion.p>

          {/* EVENT DETAILS */}
          <motion.div
            variants={item}
            className="
              mt-8
              grid
              max-w-4xl
              grid-cols-2
              gap-x-8
              gap-y-5
              border-t
              border-line
              pt-6
              sm:grid-cols-3
            "
          >
            <div>
              <p className="label-tag">Thursday</p>

              <p className="mt-1 text-base text-ink md:text-lg">
                10 December 2026
              </p>
            </div>

            <div>
              <p className="label-tag">Venue</p>

              <p className="mt-1 text-base leading-snug text-ink md:text-lg">
                Courtyard by Marriott
                <br />
                Mumbai International Airport
              </p>
            </div>

            <div>
              <p className="label-tag">200&ndash;250 Seats</p>

              <p className="mt-1 text-base text-ink md:text-lg">
                Curated. Not crowded.
              </p>
            </div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button
              href="#registration"
              variant="primary"
            >
              Reserve Your Seat
            </Button>

            <Button
              href="#partners"
              variant="secondary"
            >
              Become a Founding Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}