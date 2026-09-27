export type StatItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const marketStats: StatItem[] = [
  {
    value: 17,
    prefix: "US$",
    suffix: "bn",
    label: "India's AI market by 2027",
  },
  {
    value: 87,
    suffix: "%",
    label: "Enterprises already past pilot stage",
  },
  {
    value: 81,
    suffix: "%",
    label: "Enterprises with no real AI monitoring",
  },
  {
    value: 2117,
    label: "GCCs writing their own AI governance rules",
  },
];
