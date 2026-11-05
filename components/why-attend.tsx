
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  whyAttendCards,
  walkAwayItems,
  builtFor,
  notBuiltFor,
} from "@/data/why-attend";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function WhyAttend() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay },
  });

  return (
    <section
      id="why-attend"
      className="relative overflow-hidden bg-[#080D17] py-24 text-white sm:py-32 lg:py-40"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[150px]"
      />

      <div className="container-edge relative z-10">
        {/* Intro */}
        <motion.div {...reveal()} className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
              Why Attend
            </p>
          </div>

          <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
            Your AI is already
            <br />
            <span className="text-white/40">in production.</span>
            <br />
            Is your governance?
          </h2>

          <div className="mt-8 grid gap-6 border-l border-blue-400/40 pl-6 sm:pl-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              India has stopped asking whether to deploy AI. It’s asking
              whether you can prove you deployed it safely—to a regulator,
              an auditor, and your own board.
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/35">
              <ShieldCheck className="h-5 w-5 text-blue-300" />
              Governance. Risk. Compliance. Security.
            </div>
          </div>
        </motion.div>

        {/* Reasons to attend */}
        <div className="mt-16 grid border-l border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4 lg:mt-24">
          {whyAttendCards.map((card, i) => (
            <motion.div
              key={card.title}
              {...reveal(i * 0.08)}
              className="group relative min-h-[230px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.035] sm:p-8 lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] text-white/30">
                  0{i + 1}
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300"
                />
              </div>

              <h3 className="mt-10 text-xl font-medium tracking-tight text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50 transition-colors group-hover:text-white/70">
                {card.description}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Takeaways: image + content */}
        <div className="mt-24 grid gap-12 lg:mt-32 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image panel */}
          <motion.div
            {...reveal()}
            className="group relative overflow-hidden bg-[#111827]"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/leadership-panel.png"
                alt="Technology leaders participating in a panel discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/90 via-[#050812]/10 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  The leadership conversation
                </span>
              </div>

              <div className="absolute bottom-0 left-0 p-6 sm:p-9 lg:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-blue-200/80">
                  Leadership · Innovation · Strategy
                </p>

                <h3 className="mt-4 max-w-lg text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                  Conversations that shape the future.
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Takeaways */}
          <motion.div {...reveal(0.12)}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                What You’ll Walk Away With
              </p>
            </div>

            <h3 className="max-w-xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Insight you can take back to the boardroom.
            </h3>

            <ul className="mt-8 space-y-5">
              {walkAwayItems.map((item, i) => (
                <motion.li
                  key={item}
                  {...reveal(i * 0.05)}
                  className="flex gap-4 border-b border-white/10 pb-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                  <span className="text-sm leading-7 text-white/65">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Delegate qualification */}
        <div className="mt-24 border-t border-white/10 pt-10 lg:mt-32 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Is This Room for You?
                </p>
              </div>

              <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
                A room built for decision-makers.
              </h3>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/35">
                Designed for
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {builtFor.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-blue-300/50 hover:bg-blue-300/[0.05]"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex max-w-2xl items-start gap-3 border-l border-white/10 pl-4">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />

                <p className="text-sm leading-6 text-white/40">
                  Not built for:{" "}
                  <span className="text-white/55">{notBuiltFor}</span>
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="#delegates" variant="secondary">
                Check Delegate Eligibility
              </Button>

              <Button href="#registration" variant="primary">
                Reserve Your Seat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
