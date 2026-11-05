
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[720px] overflow-hidden bg-[#07070A] text-white md:min-h-[calc(100svh-20px)]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero-conference.png"
          alt="Technology and business leaders gathered at a conference"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic image treatment */}
      <div className="absolute inset-0 -z-20 bg-black/45" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/60 via-black/15 to-[#090510]" />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Subtle bottom color atmosphere */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-gradient-to-t from-[#10081E]/95 via-[#10081E]/60 to-transparent" />

      {/* Content */}
      <div className="container-edge relative flex w-full flex-col justify-end pb-8 pt-32 sm:pb-12 md:pb-14">
        <div className="max-w-[1400px]">
          {/* Event eyebrow */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-6 bg-blue-400" />

            <p className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
              AI GRCS Summit India · 2027
            </p>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-[1200px] text-[clamp(3.2rem,9.5vw,6rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            The Future of AI
            <br />

            <span className="text-white/90">
              Demands{" "}
            </span>

            <span className="bg-gradient-to-r from-white via-[#E5DDFD] to-[#B8A0FF] bg-clip-text text-transparent">
              Accountability.
            </span>
          </motion.h1>

          {/* Bottom information row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-8 grid gap-8 border-t border-white/20 pt-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_auto] lg:items-end"
          >
            {/* Date */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                Date
              </p>

              <p className="mt-2 text-sm font-medium text-white/90">
                21 January
              </p>

              <p className="text-sm text-white/65">2027</p>
            </div>

            {/* Location */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                Location
              </p>

              <p className="mt-2 text-sm font-medium text-white/90">
                Mumbai, India
              </p>

              <p className="text-sm text-white/65">
                Venue announcement coming soon
              </p>
            </div>

            {/* Description */}
            <div className="max-w-sm">
              <p className="text-sm leading-6 text-white/70">
                A gathering of leaders shaping the future of AI governance,
                risk, compliance and security.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3 sm:items-start lg:items-end">
              <Button
                href="#registration"
                variant="primary"
                className="group flex h-12 w-full items-center justify-between rounded-sm bg-[#8650F5] px-5 text-sm font-medium text-white transition-all hover:bg-[#996BFF] sm:w-auto sm:min-w-[190px]"
              >
                Register Your Interest

                <ArrowUpRight
                  size={17}
                  className="ml-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Button>

              <a
                href="#agenda"
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                Explore the summit →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom signature */}
        <div className="mt-10 hidden items-center justify-between border-t border-white/10 pt-4 md:flex">
          <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
            Governance · Risk · Compliance · Security
          </p>

          <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
            Mumbai, India
          </p>
        </div>
      </div>
    </section>
  );
}
