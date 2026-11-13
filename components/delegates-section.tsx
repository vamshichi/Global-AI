
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DelegateProfile } from "@/components/delegate-profile";
import { IndustryMix } from "@/components/industry-mix";
import { ArrowUpRight } from "lucide-react";

import FormModal, { type FormType } from "@/components/FormModal";

export function DelegatesSection() {
  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 22 },
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
        id="delegates"
        className="overflow-hidden bg-white py-14 text-[#102A56] sm:py-16 lg:py-20"
      >
        <div className="container-edge">

          {/* Section Heading */}
          <motion.div {...reveal()} className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2866B5]">
              Who Attends
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Meet the leaders
                <span className="text-[#2866B5]">
                  {" "}shaping AI.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#526B89]">
                A gathering of senior decision-makers driving AI governance,
                risk, compliance and security across industries.
              </p>
            </div>
          </motion.div>

          {/* Delegate Audience */}
          <motion.div
            {...reveal(0.08)}
            className="border-y border-[#E2EAF3] py-6 sm:py-8"
          >
            <h3 className="mb-5 text-lg font-semibold">
              Expected Delegate Profile
            </h3>

            <DelegateProfile />
          </motion.div>

          {/* Industry Representation */}
          <motion.div {...reveal(0.12)} className="mt-10">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2866B5]">
                Industry Representation
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                One forum. Multiple industries.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-[#526B89]">
                Explore the sectors contributing to the AI governance
                conversation.
              </p>
            </div>

            <motion.div
              whileHover={
                reducedMotion ? undefined : { y: -3 }
              }
              transition={{ duration: 0.3 }}
              className="border border-[#E2EAF3] bg-[#F8FAFD] p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#102A56]/5 sm:p-7"
            >
              <IndustryMix />
            </motion.div>
          </motion.div>

          {/* Delegate CTA */}
          <motion.div
            {...reveal(0.18)}
            className="mt-8 flex flex-col gap-4 border-t border-[#E2EAF3] pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">
                Join the conversation.
              </h3>

              <p className="mt-1 text-sm text-[#526B89]">
                Connect with leaders shaping the future of responsible AI.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={() => setActiveForm("delegate")}
              whileHover={
                reducedMotion ? undefined : { y: -3 }
              }
              whileTap={
                reducedMotion ? undefined : { scale: 0.97 }
              }
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#174B89] px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#102A56]"
            >
              Become a Delegate
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Delegate Registration Modal */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}
