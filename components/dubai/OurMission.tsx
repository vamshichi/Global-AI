
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Fingerprint,
  BriefcaseBusiness,
  Landmark,
  HeartPulse,
  Factory,
  RadioTower,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Technology, Cloud & Enterprise AI",
    description: "Digital platforms and intelligent enterprise solutions.",
    icon: Cloud,
  },
  {
    number: "02",
    title: "Cybersecurity & Digital Identity",
    description: "Security, identity and digital trust.",
    icon: Fingerprint,
  },
  {
    number: "03",
    title: "Consulting, Legal & Professional Services",
    description: "Consulting, legal, audit and advisory expertise.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Government & Public Sector",
    description: "Public institutions and government transformation.",
    icon: Landmark,
  },
  {
    number: "05",
    title: "Healthcare & Life Sciences",
    description: "Healthcare organisations and life sciences.",
    icon: HeartPulse,
  },
  {
    number: "06",
    title: "Energy & Critical Infrastructure",
    description: "Energy, utilities, industrials and critical infrastructure.",
    icon: Factory,
  },
  {
    number: "07",
    title: "Telecom & Digital Infrastructure",
    description: "Connectivity and the infrastructure powering digital business.",
    icon: RadioTower,
  },
];

export default function OurMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="our-mission"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px]">

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.75 }}
          className="relative overflow-hidden border border-white/10
            bg-white/[0.02] p-7 sm:p-12 lg:p-16"
        >
          {/* Decorative background graphic */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16
              opacity-[0.07] sm:right-0 sm:top-0"
          >
            <BrainCircuit
              size={280}
              strokeWidth={0.65}
              className="text-[#D6B779]"
            />
          </div>

          <div className="relative max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1.08]
              tracking-[-0.045em] sm:text-5xl md:text-6xl
              xl:text-7xl"
            >
              Moving AI From
              <br />
              <span className="bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                Experimentation to Trust.
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8
              text-white/65 sm:text-lg sm:leading-9"
            >
              To help organisations move from AI experimentation
              to trusted enterprise adoption through practical
              knowledge, peer learning and meaningful collaboration.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center
                rounded-full border border-[#D6B779]/35"
              >
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  className="text-[#D6B779]"
                />
              </span>

              <span className="text-[10px] font-medium uppercase
                tracking-[0.18em] text-white/55"
              >
                Global AI GRCS Summit · Dubai 2027
              </span>
            </div>
          </div>
        </motion.div>

        {/* Industries heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mb-12 mt-24 grid gap-6 sm:mt-28
            lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.25em] text-[#D6B779]"
              >
                The Industry Ecosystem
              </span>
            </div>

            <h3 className="max-w-3xl text-3xl font-medium
              leading-tight tracking-[-0.04em]
              sm:text-4xl md:text-5xl"
            >
              Bringing Critical Industries
              <br className="hidden sm:block" />
              <span className="text-white/50">Into One Conversation.</span>
            </h3>
          </div>

          <p className="max-w-lg text-sm leading-7 text-white/55 sm:text-base">
            Connecting perspectives across the sectors navigating
            AI governance, enterprise risk, compliance and security.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 border-l border-t
          border-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : (index % 3) * 0.08,
                }}
                className="group relative min-h-[230px] overflow-hidden
                  border-b border-r border-white/10 bg-white/[0.012]
                  p-6 transition-colors duration-500
                  hover:bg-white/[0.04] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px
                    origin-left scale-x-0 bg-[#D6B779]/80
                    transition-transform duration-500
                    group-hover:scale-x-100"
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.22em]
                    text-white/35"
                  >
                    {industry.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#D6B779] transition-transform
                      duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <h4 className="mt-10 max-w-sm text-xl font-medium
                  leading-snug tracking-tight text-white"
                >
                  {industry.title}
                </h4>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                  {industry.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mt-8 flex flex-col gap-3 border-t
            border-white/10 pt-6 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <p className="text-xs leading-6 text-white/45 sm:text-sm">
            Practical knowledge. Peer learning. Meaningful collaboration.
          </p>

          <span className="text-[10px] uppercase tracking-[0.18em]
            text-[#D6B779]"
          >
            One trusted AI future
          </span>
        </motion.div>
      </div>
    </section>
  );
}
