
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const speakers = [
  {
    id: 1,
    name: "N. Ramesh",
    designation: "Deputy Director General (Technology)",
    organisation:
      "Department of Telecommunications (DoT), Government of India",
    image: "/images/speakers/n-ramesh.jpeg",
  },
  {
    id: 2,
    name: "Saurabh Gugnani",
    designation:
      "Sr Dir, Global Head – Information Security Engineering, Architecture & Projects",
    organisation: "TMF Group",
    image: "/images/speakers/saurabh-gugnani.PNG",
  },
  {
    id: 3,
    name: "Neelaksshi Shaalla",
    designation: "Chief Risk Officer",
    organisation: "Bharti AXA Life Insurance",
    image: "/images/speakers/neelaksshi-shaalla.jpg",
  },
  {
    id: 4,
    name: "Mayur Kapur",
    designation: "Chief Strategy Officer - Asia ",
    organisation: "TransUnion",
    image: "/images/speakers/mayur-kapur.jpg",
  },
  {
    id: 5,
    name: "Dr. Saurabh Pramanick, PhD",
    designation: "Data and AI Governance Officer",
    organisation: "Bank Muscat",
    image: "/images/speakers/saurabh-pramanick.jpg",
  }
];

export function SpeakersSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-[#102A56] py-14 text-white sm:py-18 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#2866B5]/15 blur-[120px]" />

      <div className="container-edge relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C5A46D]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D8BD8B] sm:text-[10px]">
                Meet the Experts
              </p>
            </div>

            <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Featured <span className="text-[#A9C9F3]">Speakers.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-6 text-blue-100/70 sm:text-sm">
            Leaders shaping the future of AI governance, risk,
            compliance and enterprise security.
          </p>
        </motion.div>

        {/* Compact speaker cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.id}
              initial={
                reducedMotion ? false : { opacity: 0, y: 20 }
              }
              whileInView={
                reducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
              className="group min-w-0"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1B3C6B] sm:aspect-[5/4]">
                <Image
                  src={speaker.image}
                  alt={`Portrait of ${speaker.name}`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/75 via-transparent to-transparent" />

                {/* <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E7CB98]">
                    AI GRCS 2027
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-white/40 bg-[#102A56]/50 text-white backdrop-blur-sm transition-colors group-hover:bg-[#C5A46D] group-hover:text-[#102A56]">
                    <ArrowUpRight size={15} />
                  </span>
                </div> */}
              </div>

              {/* Speaker information */}
              <div className="border-b border-white/20 px-1 py-4 sm:py-5">
                <div className="mb-3 h-px w-8 bg-[#C5A46D] transition-all duration-300 group-hover:w-14" />

                <h3 className="text-lg font-medium tracking-[-0.025em] text-white sm:text-xl">
                  {speaker.name}
                </h3>

                <p className="mt-2 text-xs font-medium leading-5 text-blue-100/90">
                  {speaker.designation}
                </p>

                <p className="mt-2 text-[11px] leading-5 text-blue-100/55">
                  {speaker.organisation}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        {/* <div className="mt-9 flex flex-col gap-2 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-5 text-blue-100/55">
            More distinguished speakers to be announced.
          </p>

          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D8BD8B]">
            21 January 2027 · Mumbai, India
          </p>
        </div> */}
      </div>
    </section>
  );
}
