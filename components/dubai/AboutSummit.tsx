
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ShieldCheck,
  Eye,
  Scale,
  LockKeyhole,
} from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Accountability",
    description:
      "Establish clear ownership and responsible AI decision-making.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Risk Management",
    description:
      "Identify emerging AI risks and build defensible controls.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Compliance",
    description:
      "Connect regulatory expectations with practical governance.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Security & Trust",
    description:
      "Protect data, systems and the integrity of AI operations.",
    icon: LockKeyhole,
  },
];

export default function AboutSummit() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Ambient lighting */}
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
        {/* Section label */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-[#D6B779]" />

          <span className="text-[10px] font-semibold uppercase
            tracking-[0.28em] text-[#D6B779] sm:text-xs"
          >
            About the Summit
          </span>

          <span className="text-[10px] uppercase tracking-[0.18em]
            text-white/35"
          >
            / Dubai 2027
          </span>
        </motion.div>

        {/* Editorial introduction */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-20 xl:gap-28">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="max-w-3xl text-4xl font-medium
              leading-[1.08] tracking-[-0.045em]
              sm:text-5xl md:text-6xl xl:text-7xl"
            >
              AI Is the Opportunity.
              <br />
              <span className="mt-2 inline-block bg-gradient-to-r
                from-[#F3E5C1] via-[#D6B779] to-[#B9904A]
                bg-clip-text text-transparent"
              >
                Trust Is the Foundation.
              </span>
            </h2>

            <div className="mt-9 flex items-start gap-4">
              <span className="mt-1 h-12 w-[2px] shrink-0
                bg-gradient-to-b from-[#D6B779] to-transparent"
              />

              <p className="max-w-2xl text-base leading-8
                text-white/70 sm:text-lg sm:leading-9"
              >
                Global AI GRCS Summit 2027 — Dubai Edition is a
                premium, business-focused gathering for leaders
                responsible for making artificial intelligence safe,
                secure, compliant, trustworthy and commercially
                successful.
              </p>
            </div>
          </motion.div>

          {/* Supporting statement */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.12 }}
            className="flex flex-col justify-center lg:pt-10"
          >
            <span className="mb-6 text-[10px] font-semibold
              uppercase tracking-[0.24em] text-[#D6B779]"
            >
              The Need for Trusted AI
            </span>

            <p className="text-lg font-light leading-8
              text-white/85 sm:text-xl sm:leading-9"
            >
              As organisations deploy generative AI, AI agents
              and automated decisions, they need clear
              accountability, protected data, defensible controls
              and confidence that AI systems operate as intended.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base">
              The summit connects business, technology, risk, legal,
              compliance and security leaders to address these needs
              together.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center
                rounded-full border border-[#D6B779]/35 text-[#D6B779]"
              >
                <ArrowDownRight size={19} strokeWidth={1.4} />
              </div>

              <span className="text-[10px] font-medium uppercase
                tracking-[0.18em] text-white/55"
              >
                Four disciplines. One trusted AI future.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Four pillar cards */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-20 grid grid-cols-1 border-l border-t
            border-white/10 sm:grid-cols-2 xl:grid-cols-4"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative min-h-[240px] overflow-hidden
                  border-b border-r border-white/10 bg-white/[0.015]
                  p-6 transition-colors duration-500
                  hover:bg-white/[0.045] sm:p-8 lg:p-9"
              >
                <div className="absolute inset-x-0 top-0 h-px
                  origin-left scale-x-0 bg-[#D6B779]/70
                  transition-transform duration-500
                  group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between">
                  <span className="text-[11px] tracking-[0.2em]
                    text-white/35"
                  >
                    {pillar.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    className="text-[#D6B779] transition-transform
                      duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-12 text-xl font-medium
                  tracking-tight text-white"
                >
                  {pillar.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t
            border-white/10 pt-7 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <p className="text-xs uppercase tracking-[0.14em]
            text-white/45 sm:text-sm"
          >
            From AI experimentation to trusted enterprise adoption.
          </p>

          <span className="text-[10px] uppercase tracking-[0.22em]
            text-[#D6B779]"
          >
            Global AI GRCS Summit · Dubai
          </span>
        </motion.div>
      </div>
    </section>
  );
}
