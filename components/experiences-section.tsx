
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience-card";
import FormModal, { type FormType } from "@/components/FormModal";

export function ExperiencesSection() {
  const [, second, third, fourth, fifth] = experiences;

  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 28 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <section
        id="experiences"
        className="overflow-hidden bg-white py-14 text-[#102A56] sm:py-16 lg:py-20"
      >
        <div className="container-edge">

          {/* Heading */}
          <motion.div
            variants={reveal}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2866B5]">
                The Summit Experience
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                More than a conference.
                <span className="text-[#2866B5]">
                  {" "}A meeting of minds.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#526B89]">
              Connect with industry leaders, exchange ideas and explore the
              future of responsible AI.
            </p>
          </motion.div>

          {/* Experience Gallery */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Featured Image */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 25 }}
              whileInView={
                reducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative min-h-[280px] overflow-hidden bg-[#102A56] sm:col-span-2 lg:min-h-[340px]"
            >
              <Image
                src="/images/executive-networking.png"
                alt="Technology leaders networking at an international conference"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/90 via-[#071B39]/10 to-transparent transition-opacity duration-500 group-hover:from-[#071B39]/95" />

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  reducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute bottom-0 left-0 p-6 sm:p-8"
              >
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E7CB98]">
                  Connect · Collaborate · Lead
                </p>

                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Executive Networking
                </h3>

                <p className="mt-2 text-sm text-white/80">
                  Build meaningful connections with industry leaders.
                </p>
              </motion.div>
            </motion.div>

            {/* Supporting Experiences */}
            <motion.div
              custom={0}
              variants={cardReveal}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.15 }}
              className="min-h-[280px]"
            >
              <ExperienceCard experience={second} delay={0} />
            </motion.div>

            <motion.div
              custom={1}
              variants={cardReveal}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.15 }}
              className="min-h-[260px]"
            >
              <ExperienceCard experience={third} delay={0} />
            </motion.div>

            <motion.div
              custom={2}
              variants={cardReveal}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.15 }}
              className="min-h-[260px]"
            >
              <ExperienceCard experience={fourth} delay={0} />
            </motion.div>

            <motion.div
              custom={3}
              variants={cardReveal}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.15 }}
              className="min-h-[260px]"
            >
              <ExperienceCard experience={fifth} delay={0} />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={
              reducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap gap-3 border-t border-[#E2EAF3] pt-6"
          >
            <motion.button
              type="button"
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              onClick={() => setActiveForm("sponsor")}
              className="inline-flex items-center gap-2 bg-[#174B89] px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#102A56]"
            >
              Become a Sponsor
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button
              type="button"
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              onClick={() => setActiveForm("delegate")}
              className="inline-flex items-center gap-2 border border-[#174B89] px-5 py-3 text-xs font-semibold text-[#174B89] transition-all duration-300 hover:bg-[#EFF5FC]"
            >
              Become a Delegate
              <ArrowUpRight size={15} />
            </motion.button>
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
