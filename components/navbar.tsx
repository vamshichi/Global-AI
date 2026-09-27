"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-void/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "container-edge flex items-center justify-between transition-all duration-500",
          scrolled ? "py-4" : "py-7"
        )}
      >
        {/* LOGO */}
        <a href="#home" className="focus-ring flex items-center">
          <Image
            src="/logo.png"
            alt="Global AI GRCS Summit 2026"
            width={180}
            height={60}
            priority
            className={cn(
              "h-[60px] w-[120px] object-contain transition-all duration-500 sm:w-[180px]",
              scrolled && "sm:w-[160px]"
            )}
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring group relative text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="#registration"
            variant="secondary"
            className="px-5 py-2.5 text-xs"
          >
            Partner With Us
          </Button>

          <Button
            href="#registration"
            variant="primary"
            className="px-5 py-2.5 text-xs"
          >
            Register Now
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring text-ink lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-t border-line bg-void lg:hidden"
          >
            <div className="container-edge flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-ink"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-3">
                <Button
                  href="#registration"
                  variant="secondary"
                  className="w-full"
                >
                  Partner With Us
                </Button>

                <Button
                  href="#registration"
                  variant="primary"
                  className="w-full"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}