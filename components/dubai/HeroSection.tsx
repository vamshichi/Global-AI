
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
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
      className="relative isolate flex min-h-[100svh] w-full
        items-center overflow-hidden bg-[#07111f] text-white"
    >
      {/* Dubai skyline background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-[center_55%]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Cinematic overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r
          from-[#050b14]/95 via-[#07111f]/75 to-[#07111f]/20"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t
          from-[#07111f] via-transparent to-[#07111f]/45"
      />

      {/* Subtle architectural lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4
          -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/3
          -z-10 h-64 w-64 rounded-full bg-amber-300/[0.07] blur-[100px]"
      />

      {/* Fine grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:90px_90px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      {/* Main content */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-24 pt-32
        sm:px-10 sm:pb-28 lg:px-16 xl:px-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">

          <div className="max-w-4xl">

            {/* Event location */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="flex items-center gap-2 text-[10px]
                font-semibold uppercase tracking-[0.22em] text-amber-200
                sm:text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300
                  shadow-[0_0_12px_rgba(252,211,77,0.8)]" />
                Dubai, United Arab Emirates
              </span>

              <span className="hidden h-4 w-px bg-white/30 sm:block" />

              <span className="text-[10px] uppercase tracking-[0.18em]
                text-white/65 sm:text-xs"
              >
                6 August 2027
              </span>
            </motion.div>

            {/* Event name */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.08 }}
              className="mb-4 text-xs font-medium uppercase
                tracking-[0.24em] text-white/75 sm:text-sm"
            >
              Global AI GRCS Summit
              <span className="ml-2 text-amber-200">2027</span>
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.16 }}
              className="text-5xl font-semibold leading-[0.98]
                tracking-[-0.055em] sm:text-6xl md:text-7xl
                lg:text-[5.5rem] xl:text-[6.5rem]"
            >
              Govern AI.
              <br />
              <span className="text-white/90">Master Risk.</span>
              <br />
              <span className="bg-gradient-to-r from-amber-100
                via-[#D6B779] to-amber-400 bg-clip-text
                text-transparent"
              >
                Secure the Future.
              </span>
            </motion.h1>

            {/* Supporting message */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.24 }}
              className="mt-7 max-w-2xl"
            >
              <p className="text-base font-medium leading-7 text-white/90
                sm:text-lg"
              >
                Where AI Innovation Meets Trust, Regulation
                &amp; Enterprise Security.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/65
                sm:text-base"
              >
                AI adoption is accelerating. Accountability cannot
                fall behind. Join enterprise leaders in Dubai to
                explore responsible AI, emerging risks, regulatory
                expectations, and the future of the intelligent
                enterprise.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.32 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#register"
                className="group inline-flex min-h-14 items-center
                  justify-center gap-3 rounded-sm bg-[#D6B779]
                  px-7 py-4 text-xs font-bold uppercase
                  tracking-[0.12em] text-[#10141b]
                  transition-all duration-300
                  hover:bg-[#edce91] hover:shadow-[0_0_35px_rgba(214,183,121,0.2)]
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-amber-200"
              >
                Register Your Interest
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300
                    group-hover:translate-x-1"
                />
              </a>

              <a
                href="#sponsors"
                className="group inline-flex min-h-14 items-center
                  justify-center gap-3 rounded-sm border
                  border-white/25 bg-white/[0.04] px-7 py-4
                  text-xs font-semibold uppercase tracking-[0.12em]
                  text-white backdrop-blur-sm transition-all
                  duration-300 hover:border-amber-200/70
                  hover:bg-white/[0.09]
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Sponsorship
                <ArrowRight
                  size={16}
                  className="text-amber-200 transition-transform
                    duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Proof points */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-12 grid max-w-2xl grid-cols-1 gap-5
                border-t border-white/15 pt-6 sm:grid-cols-3 sm:gap-6"
            >
              <div className="flex items-start gap-3">
                <Globe2
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-amber-200"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    250–300
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Targeted industry delegates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-amber-200"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    AI + GRCS
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Governance, risk, compliance &amp; security
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-amber-200"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    UAE &amp; GCC
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Regional focus, global relevance
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right-side visual detail: desktop only */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              delay: 0.4,
            }}
            className="relative hidden min-h-[440px] items-center
              justify-center lg:flex"
          >
            <div className="absolute right-0 top-1/2
              w-full max-w-[360px] -translate-y-1/2">

              <div className="relative border-l border-white/20 pl-6 py-3">
                <p className="text-[10px] uppercase tracking-[0.28em]
                  text-amber-200"
                >
                  The Trusted AI Enterprise
                </p>

                <p className="mt-5 text-3xl font-light leading-snug
                  tracking-tight text-white/90"
                >
                  Innovation needs
                  <br />
                  <span className="font-medium text-amber-200">
                    accountability.
                  </span>
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
                  A focused conversation on building AI systems
                  that enterprises can trust, govern, and secure.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-10 bg-amber-200/70" />
                  <span className="text-[10px] uppercase
                    tracking-[0.2em] text-white/55"
                  >
                    Dubai Edition · 2027
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative orbit */}
            <div
              aria-hidden="true"
              className="absolute right-[-15%] top-[12%] h-72 w-72
                rounded-full border border-white/[0.07]"
            />
            <div
              aria-hidden="true"
              className="absolute right-[-8%] top-[19%] h-56 w-56
                rounded-full border border-amber-200/[0.12]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to discover the summit"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2
          flex-col items-center gap-2 text-white/50 transition-colors
          hover:text-amber-200 sm:bottom-8"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">
          Discover the summit
        </span>

        <motion.span
          animate={reduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={17} strokeWidth={1.4} />
        </motion.span>
      </a>
    </section>
  );
}

export default HeroSection;
