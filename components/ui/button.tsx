"use client";

import { ButtonHTMLAttributes, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  href?: string;
};

export function Button({ variant = "primary", className, children, href, ...props }: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.18, y: y * 0.35 });
  }

  function reset() {
    setOffset({ x: 0, y: 0 });
  }

  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors focus-ring",
    variant === "primary" && "bg-signal text-white hover:bg-white hover:text-void",
    variant === "secondary" &&
      "border border-line-strong text-ink hover:bg-ink hover:text-void bg-transparent",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={classes}>
          {children}
        </a>
      ) : (
        <button className={classes} {...props}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
