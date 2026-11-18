"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  ShieldCheck,
  Cpu,
  Sparkles,
  Clock3,
  ClipboardCheck,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { whyAttendCards } from "@/data/why-attend";
import FormModal, { type FormType } from "@/components/FormModal";

/* -------------------------------------------------------------------------- */
/*  KEYWORD HIGHLIGHTER                                                        */
/*  Wrap any string and the key marketing terms get emphasised automatically.  */
/* -------------------------------------------------------------------------- */

const KEYWORDS = [
  "responsible AI",
  "AI governance",
  "AI security",
  "AI strategy",
  "decision-makers",
  "regulatory",
  "governance",
  "compliance",
  "leadership",
  "leaders",
  "insights",
  "networking",
  "connect",
  "risk",
  "security",
  "trusted",
  "secure",
  "GRC",
  "AI",
  "CXOs",
  "experts",
  "real-world",
  "practical",
  "exclusive",
  "peers",
];

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const keywordRegex = new RegExp(
  `\\b(${[...KEYWORDS]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegex)
    .join("|")})\\b`,
  "gi"
);

function Highlight({
  text,
  tone = "gold",
}: {
  text: string;
  tone?: "gold" | "blue";
}) {
  const parts = text.split(keywordRegex);
  const cls =
    tone === "gold"
      ? "font-semibold text-[#F0D9AB] [text-shadow:0_0_18px_rgba(216,189,139,0.25)]"
      : "font-semibold text-[#CFE3FB]";

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={cls}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  DATA                                                                       */
/* -------------------------------------------------------------------------- */

const cardIcons = [Sparkles, Clock3, ClipboardCheck, Handshake];

const audienceGroups = [
  {
    number: "01",
    title: "C-Suite & Enterprise Leaders",
    description:
      "Set the direction. Make the calls that define your organisation's AI future.",
    icon: Building2,
    roles: ["CEO", "COO", "Country Head", "Regional Head", "Managing Director"],
  },
  {
    number: "02",
    title: "GRC Leaders",
    description:
      "Turn governance, risk and compliance into a competitive advantage.",
    icon: ShieldCheck,
    roles: [
      "GRC Leaders",
      "Chief Risk Officer",
      "Chief Compliance Officer",
      "Chief Of Data Privacy",
      "Chief Legal Officer",
      "Heads Of Risk and Compliance",
      "Head Of Internal Audit",
    ],
  },
  {
    number: "03",
    title: "Technology & Security",
    description:
      "Build and secure AI that the business, and regulators, can trust.",
    icon: Cpu,
    roles: [
      "CIO",
      "CTO",
      "CISO",
      "Chief Digital and Product Officer",
      "Cybersecurity Leaders",
      "Head Of AI Security",
      "AI and Innovation Leaders",
    ],
  },
];

const trustPoints = [
  "Invitation-only delegate community",
  "Peer-level conversations with decision-makers",
  "Practical takeaways you can act on Monday",
];

/* -------------------------------------------------------------------------- */
/*  COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export function WhyAttend() {
  const reducedMotion = useReducedMotion();
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.65,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const Eyebrow = ({ children }: { children: ReactNode }) => (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-10 bg-[#D8BD8B]" />
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D8BD8B] sm:text-sm">
        {children}
      </span>
    </div>
  );

  return (
    <>
      <section
        id="why-attend"
        className="relative overflow-hidden bg-[#0C2149] py-16 text-white sm:py-20 lg:py-24"
      >
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(64,119,190,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(216,189,139,0.08),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="container-edge relative z-10">
          {/* ------------------------------ HEADING ------------------------------ */}
          <motion.div {...reveal()} className="mb-12 lg:mb-14">
            <Eyebrow>Why Attend</Eyebrow>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Be part of the conversation shaping{" "}
                <span className="relative inline-block text-[#F0D9AB]">
                  responsible AI.
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-[#D8BD8B] to-transparent" />
                </span>
              </h2>

              <p className="max-w-md text-base leading-8 text-white/75">
                <Highlight
                  tone="blue"
                  text="Gain exclusive insights and connect with leaders working at the intersection of AI governance, risk, compliance and security."
                />
              </p>
            </div>

            {/* Trust strip */}
            <ul className="mt-8 flex flex-col gap-3 border-y border-white/10 py-5 sm:flex-row sm:flex-wrap sm:gap-x-10">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-white/80"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#D8BD8B]"
                  />
                  <Highlight tone="blue" text={point} />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ------------------------- REASONS TO ATTEND ------------------------- */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {whyAttendCards.slice(0, 4).map((card, index) => {
              const Icon = cardIcons[index];
              const featured = index === 2;

              return (
                <motion.div
                  key={card.title}
                  {...reveal(index * 0.1)}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : { y: -8, transition: { duration: 0.3 } }
                  }
                  className={`group relative isolate flex min-h-[280px] flex-col overflow-hidden border p-6 transition-all duration-500 sm:p-7 ${
                    featured
                      ? "border-[#D8BD8B]/60 bg-gradient-to-br from-[#2B4F82] via-[#1C3B67] to-[#102A56] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                      : "border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.015] hover:border-[#D8BD8B]/60 hover:bg-white/[0.09]"
                  }`}
                >
                  {/* Top accent */}
                  <div
                    className={`absolute left-0 top-0 h-[3px] transition-all duration-500 group-hover:w-full ${
                      featured ? "w-full bg-[#D8BD8B]" : "w-12 bg-[#D8BD8B]/70"
                    }`}
                  />

                  {/* Ghost number */}
                  <span className="pointer-events-none absolute -right-2 -top-8 text-[125px] font-bold leading-none tracking-tighter text-white/[0.035] transition-all duration-500 group-hover:scale-110 group-hover:text-[#A9C9F3]/[0.09]">
                    0{index + 1}
                  </span>

                  {featured && (
                    <span className="absolute right-4 top-4 z-10 bg-[#D8BD8B] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#102A56]">
                      Most Valued
                    </span>
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#D8BD8B]/40 bg-[#D8BD8B]/[0.08] text-[#D8BD8B] transition-all duration-500 group-hover:border-[#D8BD8B] group-hover:bg-[#D8BD8B] group-hover:text-[#102A56]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7">
                    <h3 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#F0D9AB]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/70 transition-colors duration-300 group-hover:text-white/90">
                      <Highlight text={card.description} />
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="relative z-10 mt-auto flex items-center justify-between pt-7">
                    <div className="h-[2px] w-10 bg-[#D8BD8B]/70 transition-all duration-500 group-hover:w-20" />
                    <ArrowUpRight
                      size={17}
                      className="text-[#D8BD8B]/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D8BD8B]"
                    />
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#A9C9F3]/[0.09] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              );
            })}
          </div>

          {/* -------------------------- WHO SHOULD ATTEND ------------------------- */}
          <motion.div
            {...reveal(0.2)}
            className="relative mt-16 overflow-hidden border border-[#A9C9F3]/40 bg-gradient-to-br from-[#173967] via-[#102A56] to-[#0B2042] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:mt-20 sm:p-8 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#A9C9F3]/10" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#A9C9F3]/10" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#D8BD8B] via-[#A9C9F3] to-transparent" />

            {/* Header */}
            <div className="relative z-10 mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>Who Should Attend</Eyebrow>

                <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Designed for the leaders{" "}
                  <span className="text-[#F0D9AB]">shaping tomorrow.</span>
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
                  <Highlight
                    tone="blue"
                    text="Bringing together the decision-makers, governance professionals and technology experts responsible for building a secure and trusted AI future."
                  />
                </p>
              </div>

              <div className="hidden shrink-0 border border-[#D8BD8B]/40 bg-[#D8BD8B]/[0.06] px-6 py-4 text-center sm:block">
                <p className="text-4xl font-semibold text-[#F0D9AB]">03</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  Leadership Groups
                </p>
              </div>
            </div>

            {/* Audience cards */}
            <div className="relative z-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
              {audienceGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.div
                    key={group.number}
                    {...reveal(index * 0.12)}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : { y: -5, transition: { duration: 0.25 } }
                    }
                    className="group relative flex min-w-0 flex-col border border-white/15 bg-[#081C38]/70 p-5 transition-all duration-300 hover:border-[#D8BD8B]/60 hover:bg-[#0B2447]/90 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#A9C9F3]/30 bg-[#A9C9F3]/10 text-[#A9C9F3] transition-all duration-300 group-hover:border-[#D8BD8B]/60 group-hover:text-[#D8BD8B]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>
                      <span className="text-sm font-semibold tracking-widest text-[#D8BD8B]">
                        {group.number}
                      </span>
                    </div>

                    <h4 className="mt-6 text-xl font-semibold leading-snug text-white">
                      {group.title}
                    </h4>

                    <p className="mt-2 min-h-[56px] text-sm leading-6 text-white/65">
                      <Highlight tone="blue" text={group.description} />
                    </p>

                    <div className="my-5 h-px w-full bg-white/15" />

                    <div className="flex flex-wrap content-start gap-2">
                      {group.roles.map((role) => (
                        <span
                          key={role}
                          className="border border-[#A9C9F3]/25 bg-[#A9C9F3]/[0.08] px-2.5 py-2 text-[11px] font-medium leading-tight text-[#E6F0FB] transition-all duration-300 hover:border-[#D8BD8B]/60 hover:bg-[#D8BD8B]/10 hover:text-white"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <div className="h-[2px] w-10 bg-[#D8BD8B]/70 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  Are you shaping the{" "}
                  <span className="text-[#F0D9AB]">future of AI?</span>
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65 sm:text-base">
                  Join{" "}
                  <span className="font-semibold text-[#F0D9AB]">
                    India&apos;s leading
                  </span>{" "}
                  AI governance and security community. Delegate seats are
                  curated, so apply early.
                </p>
              </div>

              <motion.button
                type="button"
                whileHover={reducedMotion ? undefined : { y: -3 }}
                whileTap={reducedMotion ? undefined : { scale: 0.97 }}
                onClick={() => setActiveForm("delegate")}
                className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-4 bg-[#D8BD8B] px-8 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#102A56] shadow-[0_10px_30px_rgba(216,189,139,0.25)] transition-all duration-300 hover:bg-white sm:w-auto"
              >
                Apply for Delegate Invitation
                <ArrowUpRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delegate registration popup */}
      <FormModal type={activeForm} onClose={() => setActiveForm(null)} />
    </>
  );
}