"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { stormTimeline } from "@/data/storm";
import { SectionHeader } from "@/components/section-header";
import { ArrowDownRight, ArrowRight, Play, Pause } from "lucide-react";

export function StormTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduceMotion = useReducedMotion();

  const activeEntry = stormTimeline[activeIndex];

  return (
    <section
      id="storm-timeline"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#080D18] py-24 text-white lg:py-36"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/[0.05] blur-[120px]"
      />

      <div className="container-edge relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHeader
              eyebrow="The 90-Day Storm"
              headline="You are standing inside India's most consequential AI-regulation window."
            />
          </div>

          <div className="flex items-center gap-3 pb-1 text-xs uppercase tracking-[0.2em] text-white/40">
            <span className="h-px w-8 bg-signal" />
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(stormTimeline.length).padStart(2, "0")}
            <span>Milestones</span>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Interactive timeline */}
          <div>
            <div className="relative border-t border-white/10">
              {/* Animated progress line */}
              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-[-1px] h-px bg-signal"
                initial={false}
                animate={{
                  width: `${((activeIndex + 1) / stormTimeline.length) * 100}%`,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {stormTimeline.map((entry, i) => {
                const active = i === activeIndex;
                const completed = i < activeIndex;

                return (
                  <motion.button
                    key={entry.date}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={active}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : i * 0.06,
                    }}
                    className={`group relative grid w-full grid-cols-[36px_1fr] gap-4 border-b border-white/[0.08] py-6 text-left transition-colors duration-300 sm:grid-cols-[44px_1fr] sm:gap-5 ${
                      active ? "bg-white/[0.035]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Milestone marker */}
                    <div className="flex justify-center pt-1">
                      <span
                        className={`relative flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "border-signal bg-signal/10"
                            : completed
                              ? "border-signal/50 bg-signal/5"
                              : "border-white/15 bg-transparent group-hover:border-white/40"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all ${
                            active
                              ? "scale-125 bg-signal"
                              : completed
                                ? "bg-signal/70"
                                : "bg-white/30 group-hover:bg-white/60"
                          }`}
                        />
                        {active && (
                          <motion.span
                            aria-hidden="true"
                            className="absolute inset-[-5px] rounded-full border border-signal/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                          />
                        )}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors sm:text-xs ${
                            active ? "text-signal" : "text-white/40"
                          }`}
                        >
                          {entry.tag}
                        </span>

                        <span
                          className={`text-xs transition-colors ${
                            active ? "text-white/80" : "text-white/30"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3
                        className={`mt-3 text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                          active ? "text-white" : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {entry.date}
                      </h3>

                      <p
                        className={`mt-2 max-w-lg text-sm leading-7 transition-colors ${
                          active ? "text-white/70" : "text-white/40"
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
                            transition={{
                              duration: reduceMotion ? 0 : 0.3,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-center gap-2 pt-4 text-xs font-medium uppercase tracking-[0.16em] text-signal">
                              <span>Selected milestone</span>
                              <ArrowRight size={13} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs leading-5 text-white/35">
                Select a milestone to explore the timeline.
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous milestone"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === 0 ? stormTimeline.length - 1 : i - 1
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition hover:border-signal/50 hover:text-signal"
                >
                  <ArrowDownRight
                    size={16}
                    className="rotate-45"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Next milestone"
                  onClick={() =>
                    setActiveIndex((i) =>
                      (i + 1) % stormTimeline.length
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition hover:border-signal/50 hover:text-signal"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Cinematic video */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="group relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0D1421] sm:aspect-video lg:aspect-[4/5] xl:aspect-[4/4.5]">
              <video
                key="/videos/storm.mp4"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
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

              {/* Layered cinematic treatment */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080D18]/40 via-transparent to-[#080D18]/95"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080D18]/20 to-transparent"
              />

              {/* Top metadata */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                    The Regulatory Window
                  </span>
                </div>

                <span className="border border-white/20 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/60">
                  90 Days
                </span>
              </div>

              {/* Selected milestone overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeEntry.date}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                    }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">
                      {activeEntry.tag}
                    </p>

                    <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                      {activeEntry.date}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                      {activeEntry.headline}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      The bigger picture
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      India's AI future is being shaped now.
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    onClick={(event) => {
                      const video = event.currentTarget
                        .closest(".group")
                        ?.querySelector("video");

                      if (!(video instanceof HTMLVideoElement)) return;

                      if (video.paused) {
                        void video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:border-signal hover:text-signal"
                  >
                    {isPlaying ? (
                      <Pause size={17} />
                    ) : (
                      <Play size={17} className="ml-0.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Fine corner details */}
              <div className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-signal/70" />
              <div className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-signal/70" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b border-l border-signal/50" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-signal/50" />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs leading-5 text-white/35">
                Policy. Governance. Enterprise AI.
              </p>
              <span className="text-xs tabular-nums text-white/35">
                {String(activeIndex + 1).padStart(2, "0")} —{" "}
                {String(stormTimeline.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mt-20 border-t border-white/10 pt-10 lg:mt-28 lg:pt-14"
        >
          <p className="max-w-3xl font-serif text-3xl italic leading-tight text-white/90 sm:text-4xl lg:text-5xl">
            No event has turned this moment into a room.
            <span className="mt-2 block not-italic text-signal">
              Until now.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}