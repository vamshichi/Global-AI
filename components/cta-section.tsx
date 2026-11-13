
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import FormModal, { type FormType } from "@/components/FormModal";

export function CtaSection() {
  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const actions: {
    label: string;
    type: Exclude<FormType, null>;
    description: string;
    primary: boolean;
  }[] = [
    {
      label: "Become a Sponsor",
      type: "sponsor",
      description: "Position your brand at the centre of AI leadership.",
      primary: true,
    },
    {
      label: "Apply for Delegate Invitation",
      type: "delegate",
      description: "Join the conversations shaping responsible AI.",
      primary: false,
    },
    {
      label: "Become a Speaker",
      type: "speaker",
      description: "Share your expertise with industry leaders.",
      primary: false,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-t border-[#DCE7F5] bg-[#102A56] py-20 text-white sm:py-28 lg:py-36">

        {/* Background Detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/[0.07]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/[0.07]"
        />

        <div className="container-edge relative z-10">

          {/* Heading */}
          <motion.div
            {...reveal()}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C5A46D]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9BD8C]">
                Be Part of the Conversation
              </p>

              <span className="h-px w-8 bg-[#C5A46D]" />
            </div>

            <h2 className="text-[clamp(2.8rem,6.5vw,6rem)] font-medium leading-[1.02] tracking-[-0.055em]">
              The future of AI
              <br />
              <span className="text-[#9DBCE2]">
                needs your voice.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Connect with the leaders defining the next era of AI governance,
              risk, compliance and security.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/65 sm:text-xs">
              <span>21 January 2027</span>
              <span className="h-1 w-1 rounded-full bg-[#C5A46D]" />
              <span>Mumbai, India</span>
              <span className="h-1 w-1 rounded-full bg-[#C5A46D]" />
              <span>AI GRCS Summit India</span>
            </div>
          </motion.div>

          {/* Three Action Buttons */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3 lg:mt-16">
            {actions.map((action, index) => (
              <motion.button
                key={action.label}
                type="button"
                onClick={() => setActiveForm(action.type)}
                {...reveal(index * 0.1)}
                whileHover={
                  reducedMotion ? undefined : { y: -6 }
                }
                whileTap={
                  reducedMotion ? undefined : { scale: 0.97 }
                }
                className={`group flex min-h-[170px] w-full flex-col justify-between border p-6 text-left transition-all duration-300 sm:p-7 ${
                  action.primary
                    ? "border-[#D9BD8C] bg-[#D9BD8C] text-[#102A56] hover:bg-[#E8D3AB]"
                    : "border-white/20 bg-white/[0.04] text-white hover:border-white/50 hover:bg-white/[0.09]"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="text-base font-semibold tracking-tight sm:text-lg">
                    {action.label}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      action.primary
                        ? "border-[#102A56]/20"
                        : "border-white/25"
                    }`}
                  >
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <p
                  className={`mt-7 max-w-[240px] text-xs leading-6 ${
                    action.primary
                      ? "text-[#102A56]/75"
                      : "text-white/60"
                  }`}
                >
                  {action.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            {...reveal(0.3)}
            className="mt-12 border-t border-white/15 pt-7 text-center"
          >
            <p className="text-xs tracking-wide text-white/50">
              Governance. Risk. Compliance. Security.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Popup Forms */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}
