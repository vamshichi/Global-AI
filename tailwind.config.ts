import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070B",
        navy: "#0A0F1A",
        charcoal: "#10141D",
        panel: "#12161F",
        line: "rgba(244,242,236,0.10)",
        "line-strong": "rgba(244,242,236,0.18)",
        ink: "#F3F1EA",
        "ink-dim": "#A6ADBB",
        "ink-faint": "#6B7280",
        signal: "#3E6BFF",
        "signal-dim": "#20356E",
        alert: "#E8A33D",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 7vw, 8rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        edge: "1440px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,7,11,1)), linear-gradient(rgba(244,242,236,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,236,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 48px 48px, 48px 48px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
