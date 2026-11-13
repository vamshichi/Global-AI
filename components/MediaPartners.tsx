
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const mediaPartners = [
  {
    name: "Media Partner 1",
    logo: "/images/media-partners/partner-1.png",
  },
  {
    name: "Media Partner 2",
    logo: "/images/media-partners/partner-2.jpg",
  },
  {
    name: "Media Partner 3",
    logo: "/images/media-partners/partner-3.png",
  },
  {
    name: "Media Partner 4",
    logo: "/images/media-partners/partner-4.png",
  },
  {
    name: "Media Partner 5",
    logo: "/images/media-partners/partner-5.png",
  },
  {
    name: "Media Partner 6",
    logo: "/images/media-partners/partner-6.png",
  },
];

export function MediaPartners() {
  const reduceMotion = useReducedMotion();

  // Duplicate logos for a seamless loop
  const scrollingPartners = [
    ...mediaPartners,
    ...mediaPartners,
  ];

  return (
    <section
      id="partners"
      className="overflow-hidden border-y border-[#E8EDF5] bg-white py-16 md:py-20"
    >
      <div className="container-edge">

        {/* SECTION HEADING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#155EEF]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#155EEF]">
              Our Media Partners
            </span>

            <span className="h-px w-8 bg-[#155EEF]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#102A56] sm:text-4xl">
            Amplifying the conversation.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#71839C]">
            Working with leading media voices to bring conversations
            around AI governance, risk, compliance and security to a
            wider audience.
          </p>
        </motion.div>

      </div>

      {/* LOGO MARQUEE */}
      <div className="relative">

        {/* Side fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <motion.div
          className="flex w-max items-center"
          animate={
            reduceMotion
              ? undefined
              : { x: ["-50%", "0%"] }
          }
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          style={
            reduceMotion
              ? { x: 0 }
              : undefined
          }
        >
          {scrollingPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-28 w-[190px] shrink-0 items-center justify-center px-8 sm:w-[230px] md:w-[260px]"
            >
              <div className="relative flex h-20 w-full items-center justify-center transition duration-300 hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="260px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* BOTTOM LABEL */}
      <div className="container-edge">
        <p className="mt-10 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-[#A0AEC0]">
          Media partnerships · Industry insights · Global reach
        </p>
      </div>

    </section>
  );
}
