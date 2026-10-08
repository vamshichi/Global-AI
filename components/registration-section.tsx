"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import DelegateRegistration from "@/components/DelegateRegistration";
import PartnershipEnquiry from "@/components/PartnershipEnquiry";
import SpeakerNomination from "@/components/SpeakerNomination";

type PopupType =
  | "delegate"
  | "partnership"
  | "speaker"
  | null;

const paths = [
  {
    number: "01",
    emoji: "🎟️",
    title: "I Want to Attend",
    description: "Reserve one of 200–250 seats.",
    cta: "Register as a Delegate",
    popup: "delegate" as const,
  },
  {
    number: "02",
    emoji: "🤝",
    title: "I Want to Partner",
    description:
      "Own the category before someone else does.",
    cta: "Talk to Our Partnerships Team",
    popup: "partnership" as const,
  },
  {
    number: "03",
    emoji: "🎤",
    title: "I Want to Speak / Nominate a Speaker",
    description:
      "Bring regulatory or practitioner insight to the stage.",
    cta: "Submit a Speaker Nomination",
    popup: "speaker" as const,
  },
];

export function RegistrationSection() {
  const [popup, setPopup] =
    useState<PopupType>(null);

  /* Lock body scroll */
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);

  /* ESC to close */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopup(null);
      }
    };

    if (popup) {
      window.addEventListener(
        "keydown",
        handleEscape
      );
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [popup]);

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <>
      {/* ================================================= */}
      {/* REGISTRATION SECTION */}
      {/* ================================================= */}

      <section
        id="registration"
        className="
          border-t
          border-line
          bg-navy
          py-28
          lg:py-36
        "
      >
        <div className="container-edge">

          {/* HEADER */}
          <div className="max-w-3xl">
            <p className="label-tag">
              Registration
            </p>

            <h2
              className="
                mt-5
                text-[clamp(2.25rem,4.6vw,4rem)]
                font-medium
                leading-[1.05]
                text-ink
              "
            >
              Ready to be in the room?
            </h2>
          </div>

          {/* PATH CARDS */}
          <div
            className="
              mt-16
              grid
              gap-px
              border
              border-line
              bg-line
              md:grid-cols-3
            "
          >
            {paths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                }}
                className="
                  flex
                  flex-col
                  justify-between
                  bg-navy
                  p-8
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-serif
                        text-2xl
                        italic
                        text-signal
                      "
                    >
                      {path.number}
                    </span>

                    <span
                      className="text-2xl"
                      aria-hidden="true"
                    >
                      {path.emoji}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-medium
                      text-ink
                    "
                  >
                    {path.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-relaxed
                      text-ink-dim
                    "
                  >
                    {path.description}
                  </p>
                </div>

                {/* POPUP BUTTON */}
                <div className="mt-10">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() =>
                      setPopup(path.popup)
                    }
                    className="w-full"
                  >
                    {path.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CONTACT STRIP */}
          <div
            className="
              mt-20
              grid
              gap-6
              border-t
              border-line
              pt-10
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            <div className="flex items-center gap-3 text-ink-dim">
              <Mail className="h-5 w-5 text-signal" />

              <span className="text-sm">
                Email on request
              </span>
            </div>

            <div className="flex items-center gap-3 text-ink-dim">
              <Phone className="h-5 w-5 text-signal" />

              <span className="text-sm">
                Phone on request
              </span>
            </div>

            <div className="flex items-center gap-3 text-ink-dim">
              <MapPin className="h-5 w-5 text-signal" />

              <span className="text-sm">
                Mumbai, India
              </span>
            </div>

            <div className="flex items-center gap-3 text-ink-dim">
              <Linkedin className="h-5 w-5 text-signal" />

              <span className="text-sm">
                LinkedIn
              </span>
            </div>

            <div className="flex items-center gap-3 text-ink-dim">
              <MessageCircle className="h-5 w-5 text-signal" />

              <span className="text-sm">
                WhatsApp Broadcast Sign-up
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* POPUP */}
      {/* ================================================= */}

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-md
            "
            onMouseDown={(event) => {
              if (
                event.target === event.currentTarget
              ) {
                closePopup();
              }
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="
                absolute
                right-5
                top-5
                z-[120]
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
                transition
                hover:border-white/40
                hover:bg-white/10
              "
            >
              <X size={21} />
            </button>

            {/* POPUP CONTAINER */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-x-0
                bottom-0
                top-0
                overflow-y-auto
                overscroll-contain
                bg-void
                lg:inset-x-[5vw]
                lg:bottom-[3vh]
                lg:top-[3vh]
                lg:border
                lg:border-line
                lg:shadow-2xl
              "
            >
              {/* POPUP HEADER */}
              <div
                className="
                  sticky
                  top-0
                  z-20
                  border-b
                  border-line
                  bg-void/90
                  px-6
                  py-4
                  backdrop-blur-xl
                  lg:px-10
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-[#3E6BFF]
                      "
                    >
                      Global AI GRCS Summit India 2026
                    </p>

                    <p className="mt-1 text-sm text-ink-dim">
                      {popup === "delegate" &&
                        "Delegate registration"}

                      {popup === "partnership" &&
                        "Partnership enquiry"}

                      {popup === "speaker" &&
                        "Speaker nomination"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="
                      hidden
                      items-center
                      gap-2
                      text-xs
                      uppercase
                      tracking-[0.12em]
                      text-ink-dim
                      transition
                      hover:text-ink
                      sm:flex
                    "
                  >
                    Close
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* ================================================= */}
              {/* FORM CONTENT */}
              {/* ================================================= */}

              {popup === "delegate" && (
                <DelegateRegistration />
              )}

              {popup === "partnership" && (
                <PartnershipEnquiry />
              )}

              {popup === "speaker" && (
                <SpeakerNomination />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}