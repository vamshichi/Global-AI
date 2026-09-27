"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { agendaBlocks } from "@/data/agenda";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters = ["All Tracks", ...Array.from(new Set(agendaBlocks.map((b) => b.track)))];

export function Agenda() {
  const [activeFilter, setActiveFilter] = useState("All Tracks");
  const [openId, setOpenId] = useState<string | null>(agendaBlocks[0]?.id ?? null);

  const visible =
    activeFilter === "All Tracks"
      ? agendaBlocks
      : agendaBlocks.filter((b) => b.track === activeFilter);

  return (
    <section id="agenda" className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="label-tag">Agenda</p>
            <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
              One day.
              <br />
              Every question that matters.
            </h2>
            <p className="mt-6 text-lg text-ink-dim">
              09:00 &ndash; 18:30. Plenary tracks, celebrations, and a night that keeps the room
              talking.
            </p>
          </div>
        </div>

        <div className="no-scrollbar mt-14 flex gap-3 overflow-x-auto border-b border-line pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "focus-ring whitespace-nowrap border px-5 py-2 text-sm transition-colors",
                activeFilter === f
                  ? "border-signal bg-signal/10 text-ink"
                  : "border-line-strong text-ink-faint hover:text-ink"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {visible.map((block) => {
            const isOpen = openId === block.id;
            return (
              <div key={block.id} className="border-b border-line">
                <button
                  onClick={() => setOpenId(isOpen ? null : block.id)}
                  className="focus-ring flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="w-20 flex-shrink-0 font-serif text-xl text-signal">
                      {block.time}
                    </span>
                    <div>
                      <p className="label-tag">{block.track}</p>
                      <p className="mt-1 text-xl font-medium text-ink md:text-2xl">
                        {block.heading}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-ink-faint transition-transform duration-300",
                      isOpen && "rotate-180 text-signal"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-4 pb-8 pl-0 sm:pl-28 md:grid-cols-2">
                        {block.sessions.map((s) => (
                          <div
                            key={s.title}
                            className="border border-line bg-charcoal px-5 py-4"
                          >
                            <p className="text-sm font-medium text-ink">{s.title}</p>
                            {s.subtitle && (
                              <p className="mt-1 text-xs text-ink-faint">{s.subtitle}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <Button href="#registration" variant="primary">
            Reserve Your Seat for the Full Day
          </Button>
        </div>
      </div>
    </section>
  );
}
