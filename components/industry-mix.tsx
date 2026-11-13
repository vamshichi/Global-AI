
"use client";

import { motion, useReducedMotion } from "framer-motion";

const industryData = [
  { name: "Banking & Financial Services", value: 28, color: "#173F75" },
  { name: "Technology & IT", value: 22, color: "#397BC0" },
  { name: "Healthcare & Pharma", value: 15, color: "#79A9D8" },
  { name: "Manufacturing & Energy", value: 13, color: "#C5A46D" },
  { name: "Telecom & Media", value: 12, color: "#6C9F9A" },
  { name: "Government & Others", value: 10, color: "#A8BBD0" },
];

const polarPoint = (
  cx: number,
  cy: number,
  radius: number,
  angle: number
) => {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
};

const createSlice = (startAngle: number, endAngle: number) => {
  const center = 160;
  const radius = 126;

  const start = polarPoint(center, center, radius, startAngle);
  const end = polarPoint(center, center, radius, endAngle);

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${center} ${center}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
};

export function IndustryMix() {
  const reducedMotion = useReducedMotion();

  let currentAngle = 0;

  const slices = industryData.map((industry) => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + (industry.value / 100) * 360;

    currentAngle = endAngle;

    return {
      ...industry,
      startAngle,
      endAngle,
      path: createSlice(startAngle, endAngle),
    };
  });

  return (
    <div>
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2866B5]">
            Industry Representation
          </p>

          <h3 className="mt-3 text-2xl font-medium tracking-tight text-[#102A56] sm:text-3xl">
            A cross-industry perspective.
          </h3>
        </div>

        <p className="text-xs text-[#7290B3]">
          Delegate industry mix · %
        </p>
      </div>

      {/* Chart and legend */}
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

        {/* Pie chart */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <svg
            viewBox="0 0 320 320"
            role="img"
            aria-label="Pie chart showing delegate representation across six industries"
            className="h-auto w-full max-w-[340px] overflow-visible"
          >
            {/* Outer circular outline */}
            <circle
              cx="160"
              cy="160"
              r="129"
              fill="none"
              stroke="#DCE7F5"
              strokeWidth="1.5"
            />

            {/* Individual pie slices */}
            {slices.map((slice, index) => (
              <motion.path
                key={slice.name}
                d={slice.path}
                fill={slice.color}
                stroke="#F8FAFD"
                strokeWidth="3"
                strokeLinejoin="round"
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, scale: 0.96 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.1,
                }}
                style={{ transformOrigin: "160px 160px" }}
              />
            ))}

            {/* Fine outer edge */}
            <circle
              cx="160"
              cy="160"
              r="129"
              fill="none"
              stroke="#B8CBE0"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        {/* Legend */}
        <div className="space-y-0">
          {industryData.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={reducedMotion ? false : { opacity: 0, x: 15 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : index * 0.07,
              }}
              className="flex items-center justify-between gap-4 border-b border-[#DCE7F5] py-4 first:border-t"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="h-3 w-3 shrink-0"
                  style={{ backgroundColor: industry.color }}
                />

                <span className="text-sm font-medium text-[#34577F]">
                  {industry.name}
                </span>
              </div>

              <span className="shrink-0 text-base font-semibold tabular-nums text-[#102A56]">
                {industry.value}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
