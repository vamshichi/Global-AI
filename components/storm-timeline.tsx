
"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Pause,
} from "lucide-react";
import { stormTimeline } from "@/data/storm";

export function StormTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduceMotion = useReducedMotion();

  const activeEntry = stormTimeline[activeIndex];

  const selectMilestone = (index: number) => {
    setActiveIndex(index);
  };

  const nextMilestone = () => {
    setActiveIndex((index) => (index + 1) % stormTimeline.length);
  };

  const previousMilestone = () => {
    setActiveIndex((index) =>
      index === 0 ? stormTimeline.length - 1 : index - 1
    );
  };

  return (
    <section
      id="storm-timeline"
      className="relative overflow-hidden bg-[#FAFAF8] py-24 text-[#111827] md:py-32 lg:py-40"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[130px]"
      />

      <div className="container-edge relative z-10">

        {/* SECTION HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">

          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-[2px] w-8 bg-blue-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-600">
                The 90-Day Storm
              </span>
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[76px]"
            >
              The future of AI
              <br className="hidden sm:block" />

              <span className="text-[#9CA3AF]">
                {" "}is being decided.
              </span>
            </motion.h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6B7280] md:text-lg">
              India is entering a defining regulatory window.
              The decisions made now will shape how AI is built,
              governed and trusted.
            </p>
          </div>

          {/* MILESTONE COUNTER */}
          <div className="flex items-center gap-4 border-t border-[#E5E7EB] pt-5 lg:justify-end lg:border-t-0 lg:pt-0">
            <span className="text-5xl font-light tracking-tight text-[#111827]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-10 w-px bg-[#D1D5DB]" />

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9CA3AF]">
                Of
              </p>

              <p className="mt-1 text-sm font-medium text-[#111827]">
                {String(stormTimeline.length).padStart(2, "0")} milestones
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* LEFT TIMELINE */}
          <div>
            <div className="relative border-t border-[#DDE1E7]">

              {/* Progress */}
              <motion.div
                className="absolute left-0 top-[-1px] h-[2px] bg-blue-600"
                initial={false}
                animate={{
                  width: `${((activeIndex + 1) / stormTimeline.length) * 100}%`,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {stormTimeline.map((entry, index) => {
                const active = index === activeIndex;
                const completed = index < activeIndex;

                return (
                  <motion.button
                    key={entry.date}
                    type="button"
                    onClick={() => selectMilestone(index)}
                    aria-pressed={active}
                    initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : index * 0.05,
                    }}
                    className={`group relative grid w-full grid-cols-[42px_1fr] gap-4 border-b border-[#E5E7EB] py-6 text-left transition-all duration-300 sm:grid-cols-[52px_1fr] sm:gap-5 ${
                      active
                        ? "bg-white"
                        : "hover:bg-white/70"
                    }`}
                  >
                    {/* Number */}
                    <div className="flex items-start justify-center pt-1">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all duration-300 ${
                          active
                            ? "bg-blue-600 text-white"
                            : completed
                              ? "bg-blue-50 text-blue-600"
                              : "bg-[#F0F1F2] text-[#9CA3AF] group-hover:bg-blue-50 group-hover:text-blue-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
                            active
                              ? "text-blue-600"
                              : "text-[#9CA3AF]"
                          }`}
                        >
                          {entry.tag}
                        </span>

                        <ArrowUpRight
                          size={15}
                          className={`shrink-0 transition-all duration-300 ${
                            active
                              ? "translate-x-0 text-blue-600 opacity-100"
                              : "-translate-x-1 text-[#9CA3AF] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>

                      <h3
                        className={`mt-3 text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                          active
                            ? "text-[#111827]"
                            : "text-[#6B7280] group-hover:text-[#111827]"
                        }`}
                      >
                        {entry.date}
                      </h3>

                      <p
                        className={`mt-2 text-sm leading-6 transition-colors ${
                          active
                            ? "text-[#6B7280]"
                            : "text-[#9CA3AF] group-hover:text-[#6B7280]"
                        }`}
                      >
                        {entry.headline}
                      </p>

                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                              Explore this milestone →
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* TIMELINE CONTROLS */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-[#9CA3AF]">
                Explore the regulatory timeline
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous milestone"
                  onClick={previousMilestone}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1E7] text-[#6B7280] transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>

                <button
                  type="button"
                  aria-label="Next milestone"
                  onClick={nextMilestone}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1E7] text-[#6B7280] transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO PANEL */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="relative overflow-hidden rounded-sm bg-[#111827]">

              {/* Video */}
              <video
                key="/videos/storm.mp4"
                className="aspect-[4/5] w-full object-cover sm:aspect-video lg:aspect-[4/5]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/storm-poster.jpg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/storm.mp4" type="video/mp4" />
              </video>

              {/* Video overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

              {/* Top label */}
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  The Regulatory Window
                </span>

                <span className="text-xs text-white/70">
                  90 DAYS
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEntry.date}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      {activeEntry.tag}
                    </span>

                    <h3 className="mt-4 max-w-lg text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                      {activeEntry.date}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                      {activeEntry.headline}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                      The bigger picture
                    </p>

                    <p className="mt-2 text-sm text-white">
                      India's AI future is being shaped now.
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    onClick={(event) => {
                      const video = event.currentTarget
                        .closest(".relative")
                        ?.querySelector("video");

                      if (!(video instanceof HTMLVideoElement)) return;

                      if (video.paused) {
                        void video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-black"
                  >
                    {isPlaying ? (
                      <Pause size={16} />
                    ) : (
                      <Play size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* VIDEO FOOTER */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-[#9CA3AF]">
                Policy. Governance. Enterprise AI.
              </p>

              <p className="text-xs text-[#9CA3AF]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(stormTimeline.length).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-[#E5E7EB] pt-12 md:mt-32 md:pt-16"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h3 className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
              The decisions are happening now.
              <span className="block text-blue-600">
                The conversation starts here.
              </span>
            </h3>

            <a
              href="#registration"
              className="group flex shrink-0 items-center gap-3 text-sm font-medium text-[#111827] transition hover:text-blue-600"
            >
              Join the Summit

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE1E7] transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
