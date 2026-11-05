
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  X,
  Ticket,
  Handshake,
  Mic2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import DelegateRegistration from "@/components/DelegateRegistration";
import PartnershipEnquiry from "@/components/PartnershipEnquiry";
import SpeakerNomination from "@/components/SpeakerNomination";

type PopupType = "delegate" | "partnership" | "speaker" | null;

const paths = [
  {
    number: "01",
    title: "Attend the Summit",
    description:
      "Join senior leaders exploring the future of AI governance, risk, compliance, and security.",
    cta: "Register as a Delegate",
    popup: "delegate" as const,
    icon: Ticket,
    tag: "Delegate",
  },
  {
    number: "02",
    title: "Become a Partner",
    description:
      "Connect your organisation with decision-makers and contribute to the summit conversation.",
    cta: "Explore Partnership",
    popup: "partnership" as const,
    icon: Handshake,
    tag: "Partnership",
  },
  {
    number: "03",
    title: "Share Your Expertise",
    description:
      "Bring your perspective and experience to the stage. Nominate yourself or another leader.",
    cta: "Submit a Nomination",
    popup: "speaker" as const,
    icon: Mic2,
    tag: "Speaker",
  },
];

export function RegistrationSection() {
  const [popup, setPopup] = useState<PopupType>(null);

  // Lock background scroll while popup is open
  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);

  // Close popup with Escape
  useEffect(() => {
    if (!popup) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopup(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [popup]);

  const closePopup = () => setPopup(null);

  return (
    <>
      <section
        id="registration"
        className="relative isolate overflow-hidden border-t border-white/10 bg-[#080D17] py-24 lg:py-32"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 field-grid opacity-[0.15]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.08] blur-[140px]" />

        <div className="container-edge relative">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                  Join the Conversation
                </p>
              </div>

              <h2 className="mt-6 text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                Your place in the
                <br />
                <span className="text-white/40">AI conversation.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/55 lg:pb-2">
              Whether you’re attending, partnering, or sharing your expertise,
              there’s a place for you at AI GRCS Summit India.
            </p>
          </motion.div>

          {/* Registration pathways */}
          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:mt-20">
            {paths.map((path, index) => {
              const Icon = path.icon;

              return (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-blue-300/30 hover:bg-white/[0.045] sm:p-9"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-blue-400/[0.12]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl italic text-blue-200/70">
                        {path.number}
                      </span>

                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-300/30 group-hover:bg-blue-300/10">
                        <Icon className="h-5 w-5 text-blue-200" />
                      </span>
                    </div>

                    <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      {path.tag}
                    </p>

                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-white">
                      {path.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      {path.description}
                    </p>
                  </div>

                  <div className="relative mt-9">
                    <button
                      type="button"
                      onClick={() => setPopup(path.popup)}
                      className="flex w-full items-center justify-between border border-white/15 px-5 py-4 text-left text-sm font-medium text-white transition-all duration-300 hover:border-blue-200/50 hover:bg-blue-200/[0.06]"
                    >
                      <span>{path.cta}</span>
                      <ArrowUpRight className="h-4 w-4 text-blue-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
          >
            <a
              href="mailto:info@globalbusinesssummits.com"
              className="group flex items-start gap-4 text-white/55 transition hover:text-white"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Email
                </p>
                <p className="mt-2 break-words text-sm">
                  info@globalbusinesssummits.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919971645739"
              className="group flex items-start gap-4 text-white/55 transition hover:text-white"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Phone
                </p>
                <p className="mt-2 text-sm">+91 99716 45739</p>
              </div>
            </a>

            <div className="flex items-start gap-4 text-white/55 sm:col-span-2 lg:col-span-1">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Organiser’s Office
                </p>
                <p className="mt-2 text-sm leading-6">
                  Balaji Arcade, 3rd Floor, 20th L Cross, 4th Block,
                  Koramangala, Bengaluru - 560095
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closePopup();
              }
            }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-[120] flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 sm:right-6 sm:top-6"
            >
              <X size={21} />
            </button>

            {/* Popup panel */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 overflow-y-auto overscroll-contain bg-[#080D17] lg:inset-x-[5vw] lg:bottom-[3vh] lg:top-[3vh] lg:border lg:border-white/10 lg:shadow-2xl"
            >
              {/* Popup header */}
              <div className="sticky top-0 z-20 border-b border-white/10 bg-[#080D17]/90 px-5 py-5 backdrop-blur-xl sm:px-8 lg:px-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-blue-200" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                        AI GRCS Summit India 2027
                      </p>
                    </div>

                    <p className="mt-2 text-sm text-white/55">
                      {popup === "delegate" && "Delegate registration"}
                      {popup === "partnership" && "Partnership enquiry"}
                      {popup === "speaker" && "Speaker nomination"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="hidden items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/45 transition hover:text-white sm:flex"
                  >
                    Close
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Form content */}
              {popup === "delegate" && <DelegateRegistration />}

              {popup === "partnership" && <PartnershipEnquiry />}

              {popup === "speaker" && <SpeakerNomination />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
