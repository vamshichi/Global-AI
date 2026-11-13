
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import { agendaBlocks } from "@/data/agenda";
import FormModal, { type FormType } from "@/components/FormModal";

export function Agenda() {
  const reducedMotion = useReducedMotion();

  const [expandedBlocks, setExpandedBlocks] = useState<string[]>([]);
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const toggleBlock = (id: string) => {
    setExpandedBlocks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <>
      <section
        id="agenda"
        className="overflow-hidden bg-white py-14 text-[#102A56] sm:py-16 lg:py-20"
      >
        <div className="container-edge">

          {/* Header */}
          <motion.div
            {...reveal()}
            className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="mb-3 text-2xl font-semibold uppercase tracking-[0.16em] text-[#2866B5]">
                Summit Agenda
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A day of insight.
                <span className="text-[#2866B5]">
                  {" "}Ideas into action.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#526B89]">
                Explore the sessions and discussions shaping the future of
                enterprise AI governance.
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-[#E2EAF3] pt-4 sm:border-0 sm:pt-0">
              <CalendarDays size={20} className="text-[#2866B5]" />

              <div>
                <p className="text-sm font-semibold">21 January 2027</p>
                <p className="text-xs text-[#526B89]">Mumbai, India</p>
              </div>
            </div>
          </motion.div>

          {/* Agenda List */}
          <div className="border-t border-[#DCE7F5]">
            {agendaBlocks.map((block, index) => {
              const isExpanded = expandedBlocks.includes(block.id);
              const hasSessions = Boolean(block.sessions?.length);

              return (
                <motion.div
                  key={block.id}
                  {...reveal(index * 0.06)}
                  className="border-b border-[#DCE7F5]"
                >
                  <div className="grid gap-3 py-5 sm:grid-cols-[150px_1fr_auto] sm:items-center sm:gap-6">

                    {/* Time */}
                    <div className="flex items-center justify-between sm:block">
                      <p className="text-base font-semibold text-[#2866B5]">
                        {block.time}
                      </p>

                      <span className="mt-1 inline-block border border-[#E2EAF3] bg-[#F7F9FC] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#526B89] sm:mt-2">
                        {block.track}
                      </span>
                    </div>

                    {/* Main Topic */}
                    <div>
                      <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                        {block.heading}
                      </h3>

                      {hasSessions && (
                        <p className="mt-1 text-xs text-[#7A91AC]">
                          {block.sessions.length} sessions
                        </p>
                      )}
                    </div>

                    {/* Expand Button */}
                    {hasSessions && (
                      <button
                        type="button"
                        onClick={() => toggleBlock(block.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex w-fit items-center gap-2 py-2 text-xs font-semibold text-[#2866B5] transition-colors duration-300 hover:text-[#102A56]"
                      >
                        {isExpanded ? "Hide Sessions" : "View Sessions"}

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Animated Session Details */}
                  <AnimatePresence initial={false}>
                    {hasSessions && isExpanded && (
                      <motion.div
                        initial={
                          reducedMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reducedMotion
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mb-5 ml-0 border-l-2 border-[#C5A46D] bg-[#F7F9FC] px-5 py-2 sm:ml-[174px]">
                          {block.sessions.map((session, sessionIndex) => (
                            <motion.div
                              key={`${block.id}-${session.title}`}
                              initial={
                                reducedMotion
                                  ? false
                                  : { opacity: 0, x: -10 }
                              }
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.35,
                                delay: reducedMotion ? 0 : sessionIndex * 0.06,
                              }}
                              className="border-b border-[#E2EAF3] py-4 last:border-0"
                            >
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7A91AC]">
                                Session {String(sessionIndex + 1).padStart(2, "0")}
                              </p>

                              <h4 className="mt-1 text-sm font-semibold text-[#173B6B]">
                                {session.title}
                              </h4>

                              {session.subtitle && (
                                <p className="mt-1 text-sm leading-6 text-[#526B89]">
                                  {session.subtitle}
                                </p>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            {...reveal(0.1)}
            className="mt-8 flex flex-col gap-4 border-t border-[#E2EAF3] pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm text-[#526B89]">
              One day. Four pillars. Conversations that matter.
            </p>

            <motion.button
              type="button"
              onClick={() => setActiveForm("delegate")}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              className="inline-flex min-h-11 items-center justify-center gap-3 bg-[#174B89] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#102A56]"
            >
              Apply for Delegate Invitation
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Delegate Registration Popup */}
      <FormModal
        type={activeForm}
        onClose={() => setActiveForm(null)}
      />
    </>
  );
}
