
"use client";

import { useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const industryData = [
  { name: "Banking & Financial Services", value: 28, color: "#C9A96E" },
  { name: "Technology & IT", value: 22, color: "#6D9FE8" },
  { name: "Healthcare & Pharma", value: 15, color: "#80B9AD" },
  { name: "Telecom & Media", value: 12, color: "#A48BCB" },
  { name: "Manufacturing & Energy", value: 13, color: "#D69B78" },
  { name: "Government & Others", value: 10, color: "#8794A8" },
];

const radius = 96;
const strokeWidth = 28;
const circumference = 2 * Math.PI * radius;

// Animated percentage counter
function AnimatedCounter({
  value,
  duration = 1.8,
  reducedMotion,
}: {
  value: number;
  duration?: number;
  reducedMotion: boolean | null;
}) {
  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => `${Math.round(latest)}%`
  );

  useEffect(() => {
    if (reducedMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [value, duration, count, reducedMotion]);

  return <motion.span>{rounded}</motion.span>;
}

export function IndustryMix() {
  const reducedMotion = useReducedMotion();

  let cumulative = 0;

  return (
    <section className="w-full">
      {/* Heading */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={
          reducedMotion ? undefined : { opacity: 1, y: 0 }
        }
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-300">
          Industry Representation
        </p>

        <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
          A cross-industry perspective
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
          Connect with leaders across the industries shaping enterprise AI
          governance, risk, compliance and security.
        </p>
      </motion.div>

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">

        {/* Circular Donut Chart */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
          whileInView={
            reducedMotion ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto h-[300px] w-full max-w-[380px]"
        >
          <svg
            viewBox="0 0 240 240"
            className="h-full w-full overflow-visible"
            aria-label="Industry mix donut chart"
            role="img"
          >
            {/* Background Circle */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth={strokeWidth}
            />

            {/* Animated Industry Segments */}
            {industryData.map((industry, index) => {
              const dash =
                (industry.value / 100) * circumference;

              const offset =
                -(cumulative / 100) * circumference;

              cumulative += industry.value;

              return (
                <motion.circle
                  key={industry.name}
                  cx="120"
                  cy="120"
                  r={radius}
                  fill="none"
                  stroke={industry.color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={offset}
                  transform="rotate(-90 120 120)"
                  initial={
                    reducedMotion
                      ? false
                      : {
                          opacity: 0,
                          strokeDasharray: `0 ${circumference}`,
                        }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          opacity: 1,
                          strokeDasharray: `${dash} ${circumference - dash}`,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.3 },
                    strokeDasharray: {
                      duration: 1.4,
                      delay: 0.2 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                />
              );
            })}
          </svg>

          {/* Animated Center Counter */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={reducedMotion ? false : { opacity: 0, scale: 0.7 }}
              whileInView={
                reducedMotion
                  ? undefined
                  : { opacity: 1, scale: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-4xl font-semibold tracking-tight text-white tabular-nums"
            >
              <AnimatedCounter
                value={industryData.reduce(
                  (total, item) => total + item.value,
                  0
                )}
                reducedMotion={reducedMotion}
              />
            </motion.span>

            <motion.span
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={
                reducedMotion ? undefined : { opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40"
            >
              Industry Mix
            </motion.span>
          </div>
        </motion.div>

        {/* Industry Legend */}
        <div className="space-y-5">
          {industryData.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={
                reducedMotion ? false : { opacity: 0, x: 20 }
              }
              whileInView={
                reducedMotion
                  ? undefined
                  : { opacity: 1, x: 0 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={
                    reducedMotion ? false : { scale: 0 }
                  }
                  whileInView={
                    reducedMotion ? undefined : { scale: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + index * 0.1,
                  }}
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: industry.color }}
                />

                <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                  {industry.name}
                </span>
              </div>

              <motion.span
                initial={
                  reducedMotion ? false : { opacity: 0, y: 8 }
                }
                whileInView={
                  reducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                }}
                className="text-sm font-semibold tabular-nums text-white"
              >
                {industry.value}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
