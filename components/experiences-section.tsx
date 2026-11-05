
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function ExperiencesSection() {
  const [, second, third, fourth, fifth] = experiences;
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-[#F7F7F4] py-24 text-[#101522] sm:py-32 lg:py-40"
    >
      <div className="container-edge">
        {/* Editorial intro */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-end">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                Beyond the Conference
              </p>
            </div>

            <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              Built to be talked about.
              <br />
              <span className="text-[#101522]/40">
                Not just attended.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm leading-7 text-[#101522]/55 lg:pb-2"
          >
            Every moment is designed to bring the right people together,
            spark meaningful conversations, and create connections that
            continue long after the summit.
          </motion.p>
        </div>

        {/* Experience gallery */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 lg:grid-cols-3 lg:gap-6">
          {/* Featured networking experience */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden bg-[#101522] lg:col-span-2"
          >
            <div className="relative h-[420px] sm:h-[500px] lg:h-[580px]">
              <Image
                src="/images/executive-networking.png"
                alt="Executives networking at a premium corporate conference"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />

              {/* Cinematic image treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/95 via-[#050812]/25 to-[#050812]/5" />
              <div className="absolute inset-0 bg-blue-950/10 transition-colors duration-700 group-hover:bg-blue-950/0" />

              {/* Top label */}
              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                  Featured Experience
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-200/80">
                      Connections that matter
                    </p>

                    <h3 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                      Executive Networking
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                      Meaningful conversations. Valuable connections.
                      Opportunities that extend beyond the conference.
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#101522] sm:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting experiences */}
          <div className="lg:row-span-1">
            <ExperienceCard experience={second} delay={0.08} />
          </div>

          <ExperienceCard experience={third} delay={0.14} />

          <div className="lg:col-span-2">
            <ExperienceCard experience={fourth} size="lg" delay={0.2} />
          </div>

          <ExperienceCard experience={fifth} delay={0.26} />
        </div>

        {/* CTA */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#101522]/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <p className="max-w-md text-sm leading-6 text-[#101522]/50">
            One summit. Exceptional people. Conversations that shape what comes next.
          </p>

          <Button href="#registration" variant="primary">
            See These Live — Reserve Your Seat
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
