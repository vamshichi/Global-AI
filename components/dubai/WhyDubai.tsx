
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Landmark,
  Network,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "A Strategic AI Vision",
    description:
      "The UAE’s AI ambitions and government transformation agenda make trusted AI a strategic conversation.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "A Bridge Between Markets",
    description:
      "Dubai connects UAE and GCC enterprises with participants and business interests across India, Europe and Asia.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "AI Across Critical Industries",
    description:
      "Financial services, government, healthcare, energy, telecom and digital infrastructure all face material AI governance and security questions.",
    icon: Building2,
  },
  {
    number: "04",
    title: "A Meeting Point for Innovation",
    description:
      "The region offers a relevant meeting point for enterprise AI, cloud, cybersecurity, GRC, RegTech and advisory providers.",
    icon: Network,
  },
];

export default function WhyDubai() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-dubai"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Ambient background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.06] blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.7fr]
            lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                The Global Advantage
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-medium
              leading-[1.02] tracking-[-0.05em]
              sm:text-6xl lg:text-7xl"
            >
              Why
              <span className="ml-3 bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                Dubai?
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60
            sm:text-lg sm:leading-9"
          >
            A meeting point for regional priorities and global
            perspectives on AI governance, risk, compliance
            and enterprise security.
          </p>
        </motion.div>

        {/* Dubai cinematic image */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.9 }}
          className="group relative mb-6 min-h-[320px] overflow-hidden
            border border-white/10 sm:min-h-[420px] lg:min-h-[500px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center
              transition-transform duration-[1200ms]
              ease-out group-hover:scale-[1.035]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85')",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r
              from-[#050A12]/90 via-[#07111F]/50 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t
              from-[#080E18]/80 via-transparent to-[#080E18]/10"
          />

          {/* Image caption */}
          <div className="absolute inset-x-0 bottom-0 flex
            flex-col gap-6 p-6 sm:p-10 lg:flex-row
            lg:items-end lg:justify-between lg:p-14"
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-[10px] font-semibold uppercase
                tracking-[0.25em] text-[#E8CE96]"
              >
                United Arab Emirates
              </p>

              <h3 className="text-3xl font-medium leading-tight
                tracking-tight sm:text-4xl lg:text-5xl"
              >
                Where regional ambition
                <br className="hidden sm:block" />
                meets global perspective.
              </h3>
            </div>

            <div className="flex items-center gap-3 self-start
              border border-white/20 bg-black/20 px-4 py-3
              backdrop-blur-md lg:self-auto"
            >
              <Globe2
                size={18}
                strokeWidth={1.4}
                className="text-[#D6B779]"
              />
              <span className="text-[10px] font-medium uppercase
                tracking-[0.16em] text-white/80"
              >
                Dubai Edition · 2027
              </span>
            </div>
          </div>
        </motion.div>

        {/* Four reasons */}
        <div className="grid grid-cols-1 border-l border-t
          border-white/10 sm:grid-cols-2 xl:grid-cols-4"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative flex min-h-[285px] flex-col
                  border-b border-r border-white/10
                  bg-white/[0.015] p-6 transition-colors
                  duration-500 hover:bg-white/[0.045]
                  sm:p-8 lg:p-7 xl:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px
                  origin-left scale-x-0 bg-[#D6B779]/70
                  transition-transform duration-500
                  group-hover:scale-x-100"
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.22em]
                    text-white/35"
                  >
                    {reason.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#D6B779] transition-transform
                      duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-10 max-w-xs text-xl font-medium
                  leading-snug tracking-tight text-white"
                >
                  {reason.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-white/55">
                  {reason.description}
                </p>

                <div className="mt-7 flex justify-end">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="text-white/30 transition-all
                      duration-300 group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-[#D6B779]"
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
          className="mt-10 flex flex-col gap-3 border-t
            border-white/10 pt-7 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <p className="text-xs leading-6 text-white/45 sm:text-sm">
            One region. Multiple perspectives. A shared focus on trusted AI.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em]
            text-[#D6B779]"
          >
            Govern AI. Master Risk. Secure the Future.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
