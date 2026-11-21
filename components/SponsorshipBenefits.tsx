
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Award,
  Mic2,
  Network,
  Handshake,
  Store,
  Utensils,
  Megaphone,
  ArrowUpRight,
  Check,
} from "lucide-react";

import FormModal, { type FormType } from "@/components/FormModal";

const benefits = [
  {
    number: "01",
    title: "Connect with 200+ Industry Leaders",
    description:
      "Build relationships with senior decision-makers and influential industry professionals.",
    icon: Users,
  },
  {
    number: "02",
    title: "Exclusive Logo Branding & Promotions",
    description:
      "Strengthen your brand presence across key event touchpoints and promotional channels.",
    icon: Award,
  },
  {
    number: "03",
    title: "Keynote & Panel Discussion Speaking Slots",
    description:
      "Position your organisation as a thought leader through exclusive speaking opportunities.",
    icon: Mic2,
  },
  {
    number: "04",
    title: "Exclusive Networking Lounge Access",
    description:
      "Engage with distinguished delegates in a dedicated executive networking environment.",
    icon: Network,
  },
  {
    number: "05",
    title: "One-to-One Networking & Meetings",
    description:
      "Create meaningful business connections through focused individual meetings.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Premium Exhibitor Booth Space",
    description:
      "Showcase your solutions with premium raw-space exhibition opportunities.",
    icon: Store,
  },
  {
    number: "07",
    title: "Premium Luncheons",
    description:
      "Connect with fellow sponsors, speakers and delegates in an exclusive setting.",
    icon: Utensils,
  },
  {
    number: "08",
    title: "Sponsored Branding & Promotion Campaigns",
    description:
      "Extend your visibility through dedicated sponsor-led branding and promotional campaigns.",
    icon: Megaphone,
  },
];

export function SponsorshipBenefits() {
  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  return (
    <>
      <section
        id="sponsorship-benefits"
        className="relative overflow-hidden bg-[#102A56] py-16 text-white sm:py-20 lg:py-24"
      >
        {/* Background detail */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(100,149,210,0.16),transparent_45%)]" />

        <div className="container-edge relative z-10">

          {/* Heading */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
          >
            <p className="mb-4 pb-3 text-xl font-semibold uppercase tracking-[0.2em] text-[#D8BD8B] sm:text-2xl lg:text-3xl">
              Partnership Opportunities
            </p>

            <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
              Put Your Brand at the
              <span className="text-[#A9C9F3]">
                {" "}Centre of the Conversation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Partner with AI GRCS Summit India 2027 and connect your brand
              with the leaders shaping the future of AI governance, risk,
              compliance and security.
            </p>
          </motion.div>

          {/* Featured Booth Image */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 25 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative mb-10 w-full overflow-hidden border border-white/15 bg-[#091D3B] sm:mb-14"
          >
            <div className="relative aspect-[16/9] w-full sm:aspect-[16/7] lg:aspect-[16/6]">
              <Image
                src="/images/sponsorship-booth.png"
                alt="Premium exhibition booth at an industry summit"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/90 via-[#071B39]/20 to-transparent" />

              {/* Image content */}
              <div className="absolute bottom-0 left-0 max-w-2xl p-5 sm:p-8 lg:p-10">
                <span className="mb-3 inline-block border border-[#D8BD8B]/60 bg-[#102A56]/60 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D8BD8B] backdrop-blur-sm sm:text-[10px]">
                  Premium Exhibition Experience
                </span>

                <h3 className="text-xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Showcase Your Brand.
                  <span className="text-[#D8BD8B]">
                    {" "}Create Connections.
                  </span>
                </h3>

                <p className="mt-2 max-w-lg text-xs leading-6 text-white/75 sm:text-sm">
                  Experience premium exhibition opportunities and connect
                  directly with influential industry leaders.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.number}
                  initial={
                    reducedMotion ? false : { opacity: 0, y: 25 }
                  }
                  whileInView={
                    reducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={
                    reducedMotion ? undefined : { y: -5 }
                  }
                  className="group relative flex min-w-0 min-h-[230px] flex-col border border-white/15 bg-white/[0.035] p-5 transition-all duration-300 hover:border-[#D8BD8B]/60 hover:bg-white/[0.075] sm:p-6"
                >
                  {/* Card number and icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-[#D8BD8B]">
                      {benefit.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#A9C9F3] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Highlighted card heading */}
                  <h3 className="mt-7 inline-block w-fit max-w-full border-l-[3px] border-[#D8BD8B] bg-[#D8BD8B]/[0.09] px-3 py-2 text-sm font-semibold leading-6 text-[#F0D8AA] sm:text-base">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-6 text-white/65 sm:text-sm">
                    {benefit.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-auto pt-5">
                    <div className="h-px w-8 bg-[#D8BD8B]/70 transition-all duration-500 group-hover:w-14" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* More Benefits */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 15 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-5 border-t border-white/15 pt-9 text-center"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-white/80">
              <Check size={17} className="shrink-0 text-[#D8BD8B]" />
              <span>
                And many more exclusive partnership benefits.
              </span>
            </div>

            <motion.button
              type="button"
              onClick={() => setActiveForm("sponsor")}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-4 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.1em] text-[#102A56] transition-colors duration-300 hover:bg-[#DCEBFA]"
            >
              Become a Sponsor
              <ArrowUpRight size={17} />
            </motion.button>

            <p className="text-xs text-white/45">
              Explore partnership opportunities and visibility options.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Partnership Enquiry Popup */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}
