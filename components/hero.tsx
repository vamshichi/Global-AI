
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

import FormModal, { type FormType } from "@/components/FormModal";

const heroVideos = [
  "/videos/hero-background-1.mp4",
  "/videos/hero-background-2.mp4",
  "/videos/hero-background-3.mp4",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date(
    "2027-01-21T09:00:00+05:30"
  ).getTime();

  // Countdown
  useEffect(() => {
    const updateTimer = () => {
      const difference = Math.max(0, targetDate - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Automatically move to the next video when the current one ends
  const handleVideoEnd = () => {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <>
      <section
        id="home"
        className="relative isolate flex min-h-[850px] items-center justify-center overflow-hidden bg-[#101827] text-white md:min-h-[calc(100svh-20px)]"
      >
        {/* BACKGROUND VIDEO */}
        <div className="absolute inset-0 -z-30 overflow-hidden bg-black">

          <AnimateVideo
            src={heroVideos[activeVideo]}
            onEnded={handleVideoEnd}
            reducedMotion={!!reduceMotion}
          />

        </div>

        {/* READABILITY OVERLAY */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/40 via-black/20 to-black/65" />

        {/* MAIN CONTENT */}
        <div className="container-edge relative z-10 flex w-full flex-col items-center px-5 pb-16 pt-32 text-center sm:pb-20">

          {/* EYEBROW */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-7 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#A78BFA]" />

            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white sm:text-sm">
              India’s Executive AI Governance Forum
            </span>

            <span className="h-px w-8 bg-[#A78BFA]" />
          </motion.div>

          {/* EVENT NAME */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#D7C5FF]"
          >
            AI GRCS SUMMIT INDIA · 2027
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-[1100px] text-5xl font-semibold leading-[1.05] tracking-[-0.055em] [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            The Future of AI
            <br />
            Demands{" "}
            <span className="text-[#D7C5FF]">
              Accountability.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-7 max-w-[680px] text-sm leading-7 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.4)] sm:text-base md:text-lg"
          >
            Where global leaders shape the future of AI Governance,
            Risk, Compliance and Security.
            <br className="hidden sm:block" />
            One summit. One conversation. A more accountable AI future.
          </motion.p>

          {/* EVENT INFORMATION */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2 text-sm text-white">
              <CalendarDays size={17} className="text-[#D7C5FF]" />
              Thursday, 21 January 2027
            </div>

            <span className="hidden h-4 w-px bg-white/60 sm:block" />

            <div className="flex items-center gap-2 text-sm text-white">
              <MapPin size={17} className="text-[#D7C5FF]" />
              Mumbai, India
            </div>

            <span className="hidden h-4 w-px bg-white/60 sm:block" />

            <div className="flex items-center gap-2 text-sm text-white">
              <Users size={17} className="text-[#D7C5FF]" />
              200+ Senior Leaders
            </div>
          </motion.div>

          {/* COUNTDOWN */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-11 w-full max-w-[540px]"
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-[#D7C5FF]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white sm:text-xs">
                The Summit Begins In
              </p>

              <Sparkles size={14} className="text-[#D7C5FF]" />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {timerItems.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/35 bg-black/10 px-2 py-4 backdrop-blur-sm sm:py-5"
                >
                  <div className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl md:text-5xl">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/90 sm:text-[10px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <button
              type="button"
              onClick={() => setActiveForm("sponsor")}
              className="w-full bg-[#3E6BFF] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-blue-700 sm:w-auto"
            >
              Become a Sponsor
            </button>

            <button
              type="button"
              onClick={() => setActiveForm("delegate")}
              className="w-full border border-white/60 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#0b0d12] sm:w-auto"
            >
              Apply for Delegate Invitation
            </button>
          </motion.div>

          {/* VIDEO INDICATORS */}
          <div className="mt-10 flex items-center gap-2">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Play background video ${index + 1}`}
                onClick={() => setActiveVideo(index)}
                className={`h-[3px] transition-all duration-300 ${
                  activeVideo === index
                    ? "w-9 bg-[#D7C5FF]"
                    : "w-4 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* FORM MODAL */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}

/* BACKGROUND VIDEO COMPONENT */
function AnimateVideo({
  src,
  onEnded,
  reducedMotion,
}: {
  src: string;
  onEnded: () => void;
  reducedMotion: boolean;
}) {
  return (
    <motion.video
      key={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={onEnded}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.55 }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
      }}
      className="h-full w-full object-cover object-center"
    >
      <source src={src} type="video/mp4" />
    </motion.video>
  );
}
