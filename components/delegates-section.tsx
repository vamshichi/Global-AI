
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { DelegateProfile } from "@/components/delegate-profile";
import { IndustryMix } from "@/components/industry-mix";
import { Users, ArrowDown } from "lucide-react";

export function DelegatesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="delegates"
      className="relative isolate overflow-hidden bg-[#080D17] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Background image */}
      <Image
        src="/images/delegate-profile.png"
        alt="Conference delegates networking"
        fill
        priority={false}
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      {/* Image treatment */}
      <div className="absolute inset-0 -z-10 bg-[#080D17]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#080D17]/70 via-transparent to-[#080D17]" />

      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[150px]"
      />

      <div className="container-edge relative z-10">
        {/* Intro */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-5xl lg:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
              The People Who Matter
            </p>
          </div>

          <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
            The right room.
            <br />
            <span className="text-white/45">
              The right conversations.
            </span>
          </h2>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Meet the technology leaders, decision-makers, and innovators
              navigating the future of AI governance, risk, compliance,
              and security.
            </p>

            <div className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/40">
              <Users className="h-5 w-5 text-blue-300" />
              Executive Delegate Community
            </div>
          </div>
        </motion.div>

        {/* Existing delegate components */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="border border-white/10 bg-[#080D17]/55 p-5 backdrop-blur-md sm:p-8 lg:p-10">
            <DelegateProfile />
          </div>
        </motion.div>

        {/* Industry mix */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 border border-white/10 bg-[#080D17]/55 p-5 backdrop-blur-md sm:p-8 lg:p-10"
        >
          <IndustryMix />
        </motion.div>

        {/* Closing note */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-white/40">
            A carefully curated environment for meaningful enterprise
            conversations and lasting professional relationships.
          </p>

          <a
            href="#registration"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-blue-300"
          >
            Join the delegate community
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
