
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Handshake,
  ShieldCheck,
  Target,
  Building2,
  Network,
} from "lucide-react";

const partnershipBenefits = [
  {
    icon: Target,
    title: "Reach Decision-Makers",
    description:
      "Position your organisation in front of leaders responsible for enterprise AI, risk, compliance and security.",
  },
  {
    icon: ShieldCheck,
    title: "Showcase Your Expertise",
    description:
      "Demonstrate your solutions against real-world trusted AI and enterprise challenges.",
  },
  {
    icon: Network,
    title: "Build Meaningful Connections",
    description:
      "Create opportunities for relevant business conversations with enterprises and solution providers.",
  },
];

const editions = [
  {
    id: "malaysia",
    eyebrow: "Malaysia Edition",
    title: "ASEAN's Trusted AI Conversation Starts Here.",
    description:
      "Discover a Malaysia-focused, ASEAN-relevant forum connecting enterprise leaders and solution providers around practical AI governance, risk, compliance and security.",
    href: "/malaysia-2027/",
    location: "Malaysia",
    number: "01",
    icon: Globe2,
    visual:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "dubai",
    eyebrow: "Dubai Edition",
    title: "Trusted AI. Global Ambition.",
    description:
      "Explore the UAE and GCC perspective on accountable AI adoption, agentic AI risks, cross-border compliance and enterprise security.",
    href: "/dubai-2027/",
    location: "Dubai, UAE",
    number: "02",
    icon: Building2,
    visual:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function SponsorsPartners() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="sponsors"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.05] blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px]">

        {/* Sponsorship introduction */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]
            lg:items-end lg:gap-20"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                Sponsors & Partners
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-medium
              leading-[1.06] tracking-[-0.045em]
              sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Own the Conversation.
              <br />
              <span className="bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                Connect with Trusted
                <br className="hidden sm:block" />
                AI Decision-Makers.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-white/65 sm:text-lg">
              Position your company at the centre of the enterprise
              AI governance conversation.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base">
              Connect with senior leaders responsible for AI adoption,
              cybersecurity, compliance and enterprise risk, demonstrate
              solutions against real business challenges, and build
              relationships with organisations evaluating responsible
              AI deployment.
            </p>

            <a
              href="#sponsorship-enquiry"
              className="group mt-8 inline-flex min-h-14 items-center
                justify-center gap-3 bg-[#D6B779] px-7 py-4
                text-xs font-bold uppercase tracking-[0.12em]
                text-[#10141B] transition-all duration-300
                hover:bg-[#EDCE91]
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              Explore Partnership Opportunities
              <ArrowRight
                size={16}
                className="transition-transform duration-300
                  group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Partnership benefits */}
        <div className="mt-16 grid grid-cols-1 border-l border-t
          border-white/10 sm:grid-cols-3"
        >
          {partnershipBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group relative min-h-[225px] border-b
                  border-r border-white/10 bg-white/[0.015]
                  p-6 transition-colors duration-300
                  hover:bg-white/[0.04] sm:p-8 lg:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-px
                  origin-left scale-x-0 bg-[#D6B779]/70
                  transition-transform duration-500
                  group-hover:scale-x-100"
                />

                <div className="flex items-center justify-between">
                  <Icon
                    size={24}
                    strokeWidth={1.4}
                    className="text-[#D6B779]"
                  />

                  <span className="text-[10px] tracking-[0.2em]
                    text-white/30"
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-medium tracking-tight">
                  {benefit.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
                  {benefit.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Global editions */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 mt-24 sm:mt-32"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D6B779]" />
            <span className="text-[10px] font-semibold uppercase
              tracking-[0.26em] text-[#D6B779]"
            >
              The Global Network
            </span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row
            md:items-end md:justify-between"
          >
            <h3 className="max-w-3xl text-3xl font-medium
              leading-tight tracking-[-0.04em]
              sm:text-4xl md:text-5xl"
            >
              One Mission.
              <span className="text-white/45"> Multiple Markets.</span>
              <br />
              One More Trusted AI Future.
            </h3>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Explore regional perspectives on accountable,
              compliant and secure enterprise AI.
            </p>
          </div>
        </motion.div>

        {/* Edition cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {editions.map((edition, index) => {
            const Icon = edition.icon;

            return (
              <motion.article
                key={edition.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                className="group relative isolate min-h-[440px]
                  overflow-hidden border border-white/10
                  bg-[#0D1521] sm:min-h-[490px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-20 bg-cover bg-center
                    transition-transform duration-1000
                    ease-out group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `url('${edition.visual}')`,
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-t
                    from-[#060B13] via-[#07111F]/75 to-[#07111F]/15"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-gradient-to-r
                    from-[#07111F]/50 to-transparent"
                />

                <div className="flex h-full min-h-[440px] flex-col
                  justify-between p-6 sm:min-h-[490px] sm:p-9 lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center
                        justify-center border border-white/20
                        bg-black/20 backdrop-blur-md"
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.4}
                          className="text-[#E8CE96]"
                        />
                      </span>

                      <span className="text-[10px] font-semibold
                        uppercase tracking-[0.2em] text-white/85"
                      >
                        {edition.eyebrow}
                      </span>
                    </div>

                    <span className="text-xs tracking-[0.2em]
                      text-white/60"
                    >
                      {edition.number}
                    </span>
                  </div>

                  <div className="max-w-xl">
                    <p className="mb-4 text-[10px] uppercase
                      tracking-[0.22em] text-[#E8CE96]"
                    >
                      {edition.location}
                    </p>

                    <h4 className="text-3xl font-medium leading-tight
                      tracking-[-0.035em] sm:text-4xl"
                    >
                      {edition.title}
                    </h4>

                    <p className="mt-5 max-w-lg text-sm leading-7
                      text-white/70"
                    >
                      {edition.description}
                    </p>

                    <a
                      href={edition.href}
                      className="group/link mt-8 inline-flex min-h-12
                        items-center gap-3 border-b border-[#D6B779]/60
                        pb-2 text-[10px] font-bold uppercase
                        tracking-[0.15em] text-[#F0D9A6]
                        transition-colors hover:text-white"
                    >
                      Explore the {edition.id === "dubai" ? "Dubai" : "Malaysia"} Edition
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300
                          group-hover/link:translate-x-1
                          group-hover/link:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Sponsorship enquiry anchor */}
        <div
          id="sponsorship-enquiry"
          className="mt-20 scroll-mt-24 border border-[#D6B779]/20
            bg-gradient-to-r from-[#151B25] to-[#0B111C]
            p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div>
            <div className="flex items-center gap-3">
              <Handshake size={21} className="text-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.23em] text-[#D6B779]"
              >
                Partnership Enquiries
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-medium tracking-tight
              sm:text-3xl"
            >
              Put Your Expertise at the Centre.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
              Discuss sponsorship opportunities, thought leadership,
              product demonstrations and relevant business engagement.
            </p>
          </div>

          <a
            href="/contact/?type=sponsorship"
            className="group mt-7 inline-flex min-h-14 shrink-0
              items-center justify-center gap-3 border border-[#D6B779]/50
              px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em]
              text-[#E8CE96] transition-all hover:bg-[#D6B779]
              hover:text-[#10141B] lg:mt-0"
          >
            Become a Sponsor
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <p className="mt-6 text-[10px] leading-5 text-white/35">
          Global edition links are proposed routes. Confirm that the
          destination pages exist before publishing.
        </p>
      </div>
    </section>
  );
}
