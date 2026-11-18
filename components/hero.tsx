
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

  useEffect(() => {
    const targetDate = new Date(
      "2027-01-21T09:00:00+05:30"
    ).getTime();

    const updateTimer = () => {
      const difference = Math.max(0, targetDate - Date.now());

      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference / 3600000) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoEnd = () => {
    setActiveVideo((current) => (current + 1) % heroVideos.length);
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
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
        className="relative isolate flex h-[100svh] min-h-[680px] w-full items-center justify-center overflow-hidden bg-[#101827] text-white"
      >
        {/* BACKGROUND VIDEO */}
        <div className="absolute inset-0 -z-30 overflow-hidden bg-black">
          <AnimateVideo
            src={heroVideos[activeVideo]}
            onEnded={handleVideoEnd}
            reducedMotion={!!reduceMotion}
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 -z-20 bg-black/55" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 pb-6 pt-44 text-center sm:px-8 sm:pt-24">

          {/* EYEBROW */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <span className="h-px w-7 bg-[#C4B5FD]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DDD6FE] sm:text-xs">
              India’s Executive AI Governance Forum AI GRCS Summit India · 2027
            </p>

            <span className="h-px w-7 bg-[#C4B5FD]" />
          </motion.div>

          {/* EVENT NAME */}
          {/* <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm"
          >
            The Future of AI
          </motion.p> */}

          {/* MAIN HEADING */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[58px]"
          >
            The Future of AI
            <br />
            Demands{" "}
            <span className="text-[#D7C5FF]">
              Accountability.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mx-auto mt-5 max-w-2xl text-center"
          >
            {/* <p className="text-sm leading-6 text-white/90 sm:text-base md:text-sm">
              Where global leaders shape the future of AI Governance,
              Risk, Compliance and Security.
            </p> */}

            {/* <p className="mt-1 text-sm leading-6 text-white/75 sm:text-base">
              One summit. One conversation. A more accountable AI future.
            </p> */}
          </motion.div>

          {/* EVENT DETAILS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs text-white/90 sm:text-sm">
              <CalendarDays size={16} className="text-[#D7C5FF]" />
              Thursday, 21 January 2027
            </div>

            <div className="hidden h-4 w-px bg-white/30 sm:block" />

            <div className="flex items-center justify-center gap-2 text-xs text-white/90 sm:text-sm">
              <MapPin size={16} className="text-[#D7C5FF]" />
              Mumbai, India
            </div>

            <div className="hidden h-4 w-px bg-white/30 sm:block" />

            <div className="flex items-center justify-center gap-2 text-xs text-white/90 sm:text-sm">
              <Users size={16} className="text-[#D7C5FF]" />
              200+ Senior Leaders
            </div>
          </motion.div>

          {/* COUNTDOWN */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mt-7 w-full max-w-[460px]"
          >
            <div className="mb-3 flex items-center justify-center gap-2">
              <Sparkles size={13} className="text-[#D7C5FF]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
                The Summit Begins In
              </p>

              <Sparkles size={13} className="text-[#D7C5FF]" />
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {timerItems.map((item) => (
                <div
                  key={item.label}
                  className="border border-white/25 bg-white/[0.06] px-2 py-3 backdrop-blur-md"
                >
                  <div className="text-2xl font-semibold tabular-nums tracking-tight sm:text-3xl">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/70 sm:text-[10px]">
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
            className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <button
              type="button"
              onClick={() => setActiveForm("sponsor")}
              className="w-full bg-[#3E6BFF] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-blue-700 sm:w-auto"
            >
              Become a Sponsor
            </button>

            <button
              type="button"
              onClick={() => setActiveForm("delegate")}
              className="w-full border border-white/60 bg-white/5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#101827] sm:w-auto"
            >
              Apply for Delegate Invitation
            </button>
          </motion.div>

          {/* VIDEO INDICATORS */}
          {/* <div className="mt-6 flex items-center justify-center gap-2">
            {heroVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Play background video ${index + 1}`}
                onClick={() => setActiveVideo(index)}
                className={`h-[3px] transition-all duration-300 ${
                  activeVideo === index
                    ? "w-8 bg-[#D7C5FF]"
                    : "w-4 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div> */}

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

/* BACKGROUND VIDEO */
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
      animate={{ opacity: 0.5 }}
      transition={{
        duration: reducedMotion ? 0 : 0.8,
      }}
      className="h-full w-full object-cover object-center"
    >
      <source src={src} type="video/mp4" />
    </motion.video>
  );
}
