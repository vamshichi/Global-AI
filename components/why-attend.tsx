
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { whyAttendCards, builtFor } from "@/data/why-attend";
import { ArrowUpRight } from "lucide-react";
import FormModal, { type FormType } from "@/components/FormModal";

export function WhyAttend() {
  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <>
      <section
        id="why-attend"
        className="relative overflow-hidden bg-[#102A56] py-14 text-white sm:py-16 lg:py-20"
      >
        {/* Subtle background accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(64,119,190,0.16),transparent_45%)]" />

        <div className="container-edge relative z-10">

          {/* Section Heading */}
          <motion.div
            {...reveal()}
            className="mb-10"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#A9C9F3]">
              Why Attend
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Be part of the conversation shaping
                <span className="text-[#A9C9F3]">
                  {" "}responsible AI.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-white/70">
                Gain insights and connect with leaders working at the
                intersection of AI governance, risk, compliance and security.
              </p>
            </div>
          </motion.div>

          {/* Reasons to Attend */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyAttendCards.slice(0, 4).map((card, index) => (
              <motion.div
                key={card.title}
                {...reveal(index * 0.1)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -6, transition: { duration: 0.25 } }
                }
                className="group border border-white/15 bg-white/[0.035] p-5 transition-all duration-300 hover:border-[#A9C9F3]/50 hover:bg-white/[0.08]"
              >
                <span className="text-xs font-semibold tracking-wider text-[#D8BD8B]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#C5DDFB]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {card.description}
                </p>

                <div className="mt-6 h-px w-10 bg-[#D8BD8B]/70 transition-all duration-500 group-hover:w-16" />
              </motion.div>
            ))}
          </div>

          {/* Audience and CTA */}
          <motion.div
            {...reveal(0.2)}
            className="mt-12 flex flex-col gap-7 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">
                Who Should Attend
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {builtFor.map((role) => (
                  <span
                    key={role}
                    className="border border-white/20 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/80 transition-colors duration-300 hover:border-[#A9C9F3]/60 hover:bg-white/[0.09] hover:text-white"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              type="button"
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              onClick={() => setActiveForm("delegate")}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-4 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#102A56] transition-all duration-300 hover:bg-[#DCEBFA]"
            >
              Become a Delegate
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Delegate Registration Popup */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}
