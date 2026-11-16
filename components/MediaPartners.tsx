
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const associationPartners = [
  {
    name: "Association Partner 1",
    logo: "/images/association-partners/partner-1.png",
  },
  {
    name: "Association Partner 2",
    logo: "/images/association-partners/partner-2.png",
  },
  
];

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

type Partner = {
  name: string;
  logo: string;
};

function PartnerMarquee({
  partners,
  reduceMotion,
}: {
  partners: Partner[];
  reduceMotion: boolean;
}) {
  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-28" />

      <motion.div
        className="flex w-max items-center"
        animate={
          reduceMotion
            ? undefined
            : { x: ["0%", "-50%"] }
        }
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        style={reduceMotion ? { x: 0 } : undefined}
      >
        {scrollingPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-24 w-[180px] shrink-0 items-center justify-center px-7 sm:w-[220px] md:w-[250px]"
          >
            <div className="relative h-16 w-full transition-transform duration-300 hover:scale-105">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="250px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function MediaPartners() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  return (
    <section
      id="partners"
      className="overflow-hidden border-y border-[#E8EDF5] bg-white py-14 md:py-20"
    >
      

{/* ASSOCIATION PARTNERS */}
<div className="container-edge">
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-7 text-center"
  >
    <div className="mb-3 flex items-center justify-center gap-3">
      <span className="h-px w-7 bg-[#155EEF]" />
      <span className="text-[30px] font-semibold uppercase tracking-[0.25em] text-[#155EEF]">
        Our Association Partners
      </span>
      <span className="h-px w-7 bg-[#155EEF]" />
    </div>

    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#102A56] sm:text-3xl">
      Strengthening industry collaboration.
    </h2>
  </motion.div>

  {/* Centre the two logos together */}
  <div className="mx-auto flex max-w-[620px] flex-wrap items-center justify-center gap-x-12 gap-y-5">
    {associationPartners.map((partner, index) => (
      <motion.div
        key={partner.name}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="relative h-20 w-[190px] shrink-0 sm:w-[210px]"
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="210px"
          className="object-contain"
        />
      </motion.div>
    ))}
  </div>
</div>



      {/* <PartnerMarquee
        partners={associationPartners}
        reduceMotion={reduceMotion}
      /> */}

      {/* SEPARATOR */}
      <div className="container-edge">
        <div className="mx-auto my-10 max-w-6xl border-t border-[#E8EDF5]" />
      </div>

      {/* MEDIA PARTNERS */}
      <div className="container-edge">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#155EEF]" />
            <span className="text-[30px] font-semibold uppercase tracking-[0.25em] text-[#155EEF]">
              Our Media Partners
            </span>
            <span className="h-px w-7 bg-[#155EEF]" />
          </div>

          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#102A56] sm:text-3xl">
            Amplifying the conversation.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#71839C]">
            Working with leading media voices to bring conversations
            around AI governance, risk, compliance and security to a
            wider audience.
          </p>
        </motion.div>
      </div>

      <PartnerMarquee
        partners={mediaPartners}
        reduceMotion={reduceMotion}
      />

      {/* BOTTOM LABEL */}
      <div className="container-edge">
        <p className="mt-9 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-[#A0AEC0]">
          Industry associations · Media partnerships · Global reach
        </p>
      </div>
    </section>
  );
}
