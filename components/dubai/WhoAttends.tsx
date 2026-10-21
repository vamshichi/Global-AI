
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Fingerprint,
  Landmark,
  Scale,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const audience = [
  {
    icon: Building2,
    title: "Technology Leadership",
    roles: "CIOs, CTOs, Chief AI Officers and Chief Data Officers",
  },
  {
    icon: Fingerprint,
    title: "Cybersecurity Leaders",
    roles: "CISOs, SOC Directors, Security Architects and IAM leaders",
  },
  {
    icon: Target,
    title: "Risk & Model Governance",
    roles: "Chief Risk Officers, Model Risk and Enterprise Risk leaders",
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    roles: "Chief Compliance Officers, Legal Counsel and Data Protection Officers",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance & Assurance",
    roles: "AI Governance, Responsible AI and Internal Audit leaders",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    roles: "Digital Transformation and AI Platform Directors",
  },
  {
    icon: Users,
    title: "AI Solution Specialists",
    roles: "AI security vendors, consultants, auditors and assurance specialists",
  },
];

const benefits = [
  {
    title: "Turn Principles Into Practice",
    description:
      "Translate AI principles into governance and operational controls.",
  },
  {
    title: "Understand Emerging Threats",
    description:
      "Understand emerging threats across generative and agentic AI.",
  },
  {
    title: "Navigate Global Compliance",
    description:
      "Explore UAE/GCC and cross-border compliance questions.",
  },
  {
    title: "Evaluate AI Dependencies",
    description:
      "Learn how to assess AI vendors and third-party dependencies.",
  },
  {
    title: "Measure Trust and Value",
    description:
      "Discover approaches to AI assurance, auditability and ROI.",
  },
  {
    title: "Build Meaningful Connections",
    description:
      "Build relevant relationships with peers and solution providers.",
  },
];

export default function WhoAttends() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="who-attends"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.65fr]
            lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                The People & The Purpose
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-medium
              leading-[1.06] tracking-[-0.045em]
              sm:text-5xl md:text-6xl xl:text-7xl"
            >
              The People Who Shape AI.
              <br />
              <span className="bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                The Decisions That Matter.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/60
            sm:text-lg sm:leading-9"
          >
            Meet the executives and practitioners shaping AI
            strategy, cybersecurity, compliance, enterprise risk
            and digital transformation.
          </p>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]
          lg:gap-10">

          {/* Who you will meet */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="border border-white/10 bg-white/[0.015]"
          >
            <div className="flex items-center justify-between
              border-b border-white/10 p-6 sm:p-8"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase
                  tracking-[0.24em] text-[#D6B779]"
                >
                  The Delegate Profile
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight
                  sm:text-3xl"
                >
                  Who You Will Meet
                </h3>
              </div>

              <Users
                size={25}
                strokeWidth={1.3}
                className="text-[#D6B779]"
              />
            </div>

            <div className="p-3 sm:p-5">
              {audience.map((person, index) => {
                const Icon = person.icon;

                return (
                  <motion.div
                    key={person.title}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -12,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.05,
                    }}
                    className="group flex gap-4 border-b border-white/[0.07]
                      p-4 last:border-b-0 transition-colors
                      duration-300 hover:bg-white/[0.025]
                      sm:gap-5 sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center
                      justify-center border border-white/10
                      bg-white/[0.025] transition-colors
                      group-hover:border-[#D6B779]/40"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.4}
                        className="text-[#D6B779]"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-semibold text-white
                        sm:text-base"
                      >
                        {person.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-white/55
                        sm:text-sm sm:leading-7"
                      >
                        {person.roles}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-white/25
                        transition-colors group-hover:text-[#D6B779]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Why attend */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden border border-[#D6B779]/20
              bg-gradient-to-b from-[#151B25] to-[#0B111C]"
          >
            {/* Decorative graphic */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12
                opacity-[0.055]"
            >
              <BrainCircuit
                size={220}
                strokeWidth={0.7}
                className="text-[#D6B779]"
              />
            </div>

            <div className="relative border-b border-white/10 p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase
                tracking-[0.24em] text-[#D6B779]"
              >
                Your Value
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-tight
                sm:text-3xl"
              >
                Why Attend?
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                Gain practical perspectives and make more informed
                decisions about trusted enterprise AI.
              </p>
            </div>

            <div className="relative space-y-0 p-5 sm:p-7">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  className="flex gap-3 border-b border-white/[0.07]
                    py-4 last:border-b-0"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-[#D6B779]"
                  />

                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {benefit.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-6 text-white/50
                      sm:text-sm"
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="relative border-t border-white/10 p-6 sm:p-8">
              <a
                href="#register"
                className="group flex min-h-14 w-full items-center
                  justify-center gap-3 bg-[#D6B779] px-6 py-4
                  text-center text-xs font-bold uppercase
                  tracking-[0.12em] text-[#10141B]
                  transition-all duration-300 hover:bg-[#EDCE91]
                  hover:shadow-[0_0_30px_rgba(214,183,121,0.12)]
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                Secure Your Delegate Pass

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300
                    group-hover:translate-x-1"
                />
              </a>

              <p className="mt-4 text-center text-[10px] leading-5
                text-white/40"
              >
                Join the conversation on trusted AI in Dubai.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col gap-3 border-t
          border-white/10 pt-6 sm:flex-row sm:items-center
          sm:justify-between"
        >
          <p className="text-xs leading-6 text-white/40">
            Governance · Risk · Compliance · Security
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em]
            text-[#D6B779]"
          >
            Global AI GRCS Summit · Dubai 2027
          </span>
        </div>
      </div>
    </section>
  );
}
