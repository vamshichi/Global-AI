
"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowUpRight,
  Play,
  Pause,
  ShieldCheck,
  Activity,
  Scale,
  LockKeyhole,
} from "lucide-react";

import { stormTimeline } from "@/data/storm";

const pillars = [
  { number: "01", name: "Governance", icon: ShieldCheck },
  { number: "02", name: "Risk", icon: Activity },
  { number: "03", name: "Compliance", icon: Scale },
  { number: "04", name: "Security", icon: LockKeyhole },
];

export function StormTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  const activeEntry = stormTimeline[activeIndex];

  const progress =
    ((activeIndex + 1) / stormTimeline.length) * 100;

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="storm-timeline"
      className="w-full overflow-hidden bg-white py-8 text-[#102A56] sm:py-10 md:py-14 lg:py-16"
    >
      <div className="container-edge">

        {/* INTRODUCTION */}
        <motion.div
          {...reveal()}
          className="w-full max-w-4xl"
        >
          <h2 className="text-[clamp(2rem,5.5vw,4.25rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
            The next 90 days will shape{" "}
            <span className="text-[#155EEF]">
              the future of AI.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#647A98] sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
            India is entering a defining period for artificial
            intelligence. The decisions made today will determine
            how AI is governed, secured and trusted tomorrow.
          </p>
        </motion.div>

        {/* GOVERNANCE PILLARS */}
        <motion.div
          {...reveal(0.1)}
          className="mt-10 border-y border-[#E5ECF5] py-6 sm:mt-12 md:mt-16 md:py-8"
        >
          <div className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-0">

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.name}
                  className={`flex min-w-0 items-center gap-3 sm:gap-4 ${
                    index !== 0
                      ? "md:border-l md:border-[#E5ECF5] md:pl-5 lg:pl-8"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F6FF] text-[#155EEF] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-widest text-[#91A3BC] sm:text-xs">
                      {pillar.number}
                    </p>

                    <p className="mt-1 break-words text-base font-semibold text-[#102A56] sm:text-lg lg:text-xl">
                      {pillar.name}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </motion.div>

        {/* TIMELINE AND VIDEO */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 sm:gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

          {/* LEFT: TIMELINE */}
          <motion.div
            {...reveal()}
            className="min-w-0"
          >
            <div className="mb-6 flex items-end justify-between gap-3 sm:mb-8">
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#155EEF] sm:text-[10px] sm:tracking-[0.2em]">
                  The Regulatory Window
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#102A56] sm:mt-3 sm:text-2xl">
                  Key milestones
                </h3>
              </div>

              <span className="shrink-0 text-[10px] font-medium text-[#91A3BC] sm:text-xs">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(stormTimeline.length).padStart(2, "0")}
              </span>
            </div>

            {/* PROGRESS */}
            <div className="mb-6 h-[2px] w-full bg-[#EAF0F8] sm:mb-8">
              <motion.div
                className="h-full bg-[#155EEF]"
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                }}
              />
            </div>

            {/* MILESTONES */}
            <div className="space-y-2">

              {stormTimeline.map((entry, index) => {
                const active = index === activeIndex;
                const completed = index < activeIndex;

                return (
                  <motion.button
                    key={entry.date}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={active}
                    initial={
                      reduceMotion ? false : { opacity: 0, x: -12 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: reduceMotion ? 0 : index * 0.05,
                    }}
                    className={`group flex w-full min-w-0 items-start gap-3 border-b border-[#EAF0F8] px-2 py-4 text-left transition-colors duration-300 sm:gap-5 sm:px-3 sm:py-5 ${
                      active
                        ? "bg-[#F6F9FF]"
                        : "hover:bg-[#FAFCFF]"
                    }`}
                  >
                    {/* NUMBER */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold transition-colors duration-300 sm:h-9 sm:w-9 sm:text-xs ${
                        active
                          ? "bg-[#155EEF] text-white"
                          : completed
                            ? "bg-[#E7F0FF] text-[#155EEF]"
                            : "bg-[#F2F5F9] text-[#91A3BC] group-hover:bg-[#E7F0FF] group-hover:text-[#155EEF]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">

                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`min-w-0 break-words text-[9px] font-semibold uppercase tracking-[0.12em] sm:text-[10px] sm:tracking-[0.16em] ${
                            active
                              ? "text-[#155EEF]"
                              : "text-[#91A3BC]"
                          }`}
                        >
                          {entry.tag}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            active
                              ? "translate-x-0 text-[#155EEF] opacity-100"
                              : "-translate-x-1 text-[#91A3BC] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>

                      <h4
                        className={`mt-2 break-words text-sm font-semibold transition-colors sm:text-lg ${
                          active
                            ? "text-[#102A56]"
                            : "text-[#45658C] group-hover:text-[#155EEF]"
                        }`}
                      >
                        {entry.date}
                      </h4>

                      <p className="mt-2 break-words text-xs leading-6 text-[#7A8DA7] sm:text-sm">
                        {entry.headline}
                      </p>

                    </div>
                  </motion.button>
                );
              })}

            </div>
          </motion.div>

          {/* RIGHT: VIDEO */}
          <motion.div
            {...reveal(0.15)}
            className="min-w-0 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-sm bg-[#102A56]">

              {/* VIDEO */}
              <div className="relative w-full">
                <video
                  ref={videoRef}
                  className="aspect-video w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/delegate-profile.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source
                    src="/videos/hero-background-2.mp4"
                    type="video/mp4"
                  />
                </video>

                {/* VIDEO CONTROL */}
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#102A56]/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#155EEF] sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
                >
                  {isPlaying ? (
                    <Pause size={17} />
                  ) : (
                    <Play size={17} />
                  )}
                </button>
              </div>

              {/* VIDEO INFORMATION */}
              <div className="p-4 sm:p-6 md:p-8">

                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A8C9FF] sm:text-[10px] sm:tracking-[0.2em]">
                  AI Regulatory Intelligence
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEntry.date}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, y: -8 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="mt-3 break-words text-xl font-semibold tracking-tight text-white sm:mt-4 sm:text-2xl md:text-3xl">
                      {activeEntry.date}
                    </h3>

                    <p className="mt-3 max-w-lg text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                      {activeEntry.headline}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* FOOTER */}
                <div className="mt-5 flex flex-col items-start gap-3 border-t border-white/15 pt-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-5">

                  <p className="max-w-full text-lg leading-snug text-white/55 sm:text-xl md:text-2xl">
                    India's AI future is being shaped now.
                  </p>

                  <span className="shrink-0 text-[10px] font-semibold text-[#A8C9FF] sm:text-xs">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(stormTimeline.length).padStart(2, "0")}
                  </span>
                </div>

              </div>
            </div>

            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.12em] text-[#91A3BC] sm:mt-4 sm:text-[10px] sm:tracking-[0.16em]">
              Policy · Governance · Enterprise AI
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
