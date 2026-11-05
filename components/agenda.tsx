
"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Clock3,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import { agendaBlocks } from "@/data/agenda";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters = [
  "All Tracks",
  ...Array.from(new Set(agendaBlocks.map((block) => block.track))),
];

export function Agenda() {
  const [activeFilter, setActiveFilter] = useState("All Tracks");
  const [openId, setOpenId] = useState<string | null>(
    agendaBlocks[0]?.id ?? null
  );

  const reducedMotion = useReducedMotion();

  const visible =
    activeFilter === "All Tracks"
      ? agendaBlocks
      : agendaBlocks.filter((block) => block.track === activeFilter);

  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#F7F7F4] py-24 text-[#101522] sm:py-32 lg:py-40"
    >
      <div className="container-edge relative z-10">
        {/* Header */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-700">
                The Summit Programme
              </p>
            </div>

            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              One day.
              <br />
              <span className="text-[#101522]/40">
                Every question that matters.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#101522]/55 sm:text-lg">
              A full day of strategic conversations, expert perspectives,
              and meaningful connections shaping the future of AI governance.
            </p>
          </div>

          <div className="flex items-center gap-4 border-t border-[#101522]/10 pt-5 lg:border-t-0 lg:pb-2 lg:pt-0">
            <div className="flex h-12 w-12 items-center justify-center border border-[#101522]/10">
              <CalendarDays className="h-5 w-5 text-blue-700" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#101522]/40">
                Summit Day
              </p>
              <p className="mt-1 text-sm font-medium">
                09:00 AM — 06:30 PM
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mt-14 sm:mt-20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#101522]/40">
              Explore the programme
            </p>

            <p className="hidden text-xs text-[#101522]/35 sm:block">
              Select a track to filter sessions
            </p>
          </div>

          <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-[#101522]/10 pb-5">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setOpenId(null);
                  }}
                  className={cn(
                    "whitespace-nowrap border px-5 py-2.5 text-xs font-medium transition-all duration-300",
                    active
                      ? "border-[#101522] bg-[#101522] text-white"
                      : "border-[#101522]/15 bg-transparent text-[#101522]/55 hover:border-[#101522]/40 hover:text-[#101522]"
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Agenda timeline */}
        <div className="mt-3">
          {visible.map((block, index) => {
            const isOpen = openId === block.id;

            return (
              <motion.div
                key={block.id}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.04,
                }}
                className={cn(
                  "group border-b border-[#101522]/10 transition-colors duration-300",
                  isOpen && "bg-white"
                )}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : block.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-8 lg:gap-12"
                >
                  {/* Time */}
                  <div className="w-[76px] shrink-0 sm:w-24">
                    <p className="font-serif text-lg tracking-tight text-blue-700 sm:text-2xl">
                      {block.time}
                    </p>
                  </div>

                  {/* Track and heading */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#101522]/40 sm:text-[10px]">
                        {block.track}
                      </span>

                      {isOpen && (
                        <span className="h-1 w-1 rounded-full bg-blue-600" />
                      )}

                      {isOpen && (
                        <span className="text-[9px] uppercase tracking-[0.15em] text-blue-700 sm:text-[10px]">
                          Expanded
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-medium leading-snug tracking-tight text-[#101522] transition-colors group-hover:text-blue-800 sm:text-2xl lg:text-3xl">
                      {block.heading}
                    </h3>
                  </div>

                  {/* Toggle */}
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 sm:h-12 sm:w-12",
                      isOpen
                        ? "border-[#101522] bg-[#101522] text-white"
                        : "border-[#101522]/15 text-[#101522]/50 group-hover:border-[#101522] group-hover:text-[#101522]"
                    )}
                  >
                    <ChevronDown
                      size={18}
                      className={cn(
                        "transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                {/* Expandable sessions */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        reducedMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-0 sm:pb-10 sm:pl-32 lg:pl-40">
                        <div className="grid gap-3 md:grid-cols-2">
                          {block.sessions.map((session, sessionIndex) => (
                            <div
                              key={session.title}
                              className="group/session relative border border-[#101522]/10 bg-[#F7F7F4] p-5 transition-all duration-300 hover:border-blue-600/30 hover:bg-white sm:p-6"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-[0.18em] text-[#101522]/30">
                                  Session {String(sessionIndex + 1).padStart(2, "0")}
                                </span>

                                <ArrowUpRight
                                  size={14}
                                  className="text-[#101522]/25 transition-colors group-hover/session:text-blue-700"
                                />
                              </div>

                              <h4 className="mt-5 text-base font-medium leading-snug text-[#101522] sm:text-lg">
                                {session.title}
                              </h4>

                              {session.subtitle && (
                                <p className="mt-2 text-sm leading-6 text-[#101522]/50">
                                  {session.subtitle}
                                </p>
                              )}

                              <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-600 transition-all duration-300 group-hover/session:w-full" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {visible.length === 0 && (
            <div className="py-16 text-center text-sm text-[#101522]/50">
              No sessions available for this track yet.
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col gap-5 border-t border-[#101522]/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <div className="flex items-center gap-3 text-[#101522]/45">
            <Clock3 size={16} />
            <p className="text-xs leading-5">
              A full day of insight, collaboration, and leadership.
            </p>
          </div>

          <Button href="#registration" variant="primary">
            Reserve Your Seat for the Full Day
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
