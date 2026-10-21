
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target,
  Layers3,
  Globe2,
  ClipboardCheck,
  Handshake,
  ArrowUpRight,
} from "lucide-react";

const differentiators = [
  {
    number: "01",
    label: "THE MINDSET",
    title: "Accountability Over Hype",
    description:
      "Focus on ownership, controls, evidence and business outcomes—not just AI tools.",
    icon: Target,
    featured: true,
  },
  {
    number: "02",
    label: "THE FRAMEWORK",
    title: "Four Disciplines, One Programme",
    description:
      "Governance, risk, compliance and security are integrated throughout the agenda.",
    icon: Layers3,
  },
  {
    number: "03",
    label: "THE PERSPECTIVE",
    title: "UAE/GCC Context, Global Relevance",
    description:
      "Discuss regional realities alongside international standards without treating one jurisdiction’s rules as universal.",
    icon: Globe2,
  },
  {
    number: "04",
    label: "THE OUTCOME",
    title: "Practical Takeaways",
    description:
      "Checklists, sample risk registers, implementation roadmaps and assessment templates.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    label: "THE CONNECTIONS",
    title: "Qualified Business Connections",
    description:
      "Curated networking and relevant sponsor–buyer meetings, subject to delivery arrangements.",
    icon: Handshake,
  },
];

export default function WhatMakesUsDifferent() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="what-makes-us-different"
      className="relative isolate overflow-hidden bg-[#0B111C]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Atmospheric lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.05] blur-[130px]"
      />

      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr]
            lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                The Difference
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-medium
              leading-[1.06] tracking-[-0.045em]
              sm:text-5xl md:text-6xl xl:text-7xl"
            >
              What Makes This
              <br />
              Summit{" "}
              <span className="bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                Different?
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60
            sm:text-lg sm:leading-9"
          >
            Beyond AI hype, a business-focused conversation built
            around accountability, integrated disciplines, practical
            implementation and meaningful connections.
          </p>
        </motion.div>

        {/* Differentiator cards */}
        <div className="grid grid-cols-1 border-l border-t
          border-white/10 md:grid-cols-2 xl:grid-cols-6"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className={`group relative flex min-h-[300px]
                  flex-col overflow-hidden border-b border-r
                  border-white/10 p-6 transition-colors
                  duration-500 sm:p-8 xl:col-span-2
                  ${index === 3 ? "md:col-span-1 xl:col-span-3" : ""}
                  ${index === 4 ? "md:col-span-1 xl:col-span-3" : ""}
                  ${
                    isFeatured
                      ? "bg-[#D6B779]/[0.045]"
                      : "bg-white/[0.015] hover:bg-white/[0.04]"
                  }`}
              >
                {/* Gold hover line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px
                    origin-left scale-x-0 bg-[#D6B779]
                    transition-transform duration-500
                    group-hover:scale-x-100"
                />

                {/* Card top */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.24em]
                    text-white/40"
                  >
                    {item.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#D6B779] transition-transform
                      duration-300 group-hover:-translate-y-1"
                  />
                </div>

                {/* Card content */}
                <div className="mt-auto pt-14">
                  <p className="mb-4 text-[9px] font-semibold
                    uppercase tracking-[0.22em] text-[#D6B779]"
                  >
                    {item.label}
                  </p>

                  <h3 className="max-w-sm text-2xl font-medium
                    leading-tight tracking-[-0.025em]
                    text-white sm:text-[27px]"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7
                    text-white/55"
                  >
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner arrow */}
                <div className="absolute right-5 top-[48%]
                  opacity-0 transition-all duration-300
                  group-hover:translate-x-1 group-hover:-translate-y-1
                  group-hover:opacity-100"
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="text-[#D6B779]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mt-10 flex flex-col gap-4 border-t
            border-white/10 pt-7 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <p className="text-xs leading-6 text-white/45 sm:text-sm">
            From principles to controls. From innovation to accountability.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em]
            text-[#D6B779]"
          >
            Global AI GRCS Summit · Dubai 2027
          </span>
        </motion.div>
      </div>
    </section>
  );
}
