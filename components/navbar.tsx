
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/data/nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PartnershipEnquiry from "@/components/PartnershipEnquiry";
import GeneralContact from "@/components/GeneralContact";

type PopupType = "partnership" | "contact" | null;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState<PopupType>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPopup(null);
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const openContact = () => {
    setOpen(false);
    setPopup("contact");
  };

  const openPartnership = () => {
    setOpen(false);
    setPopup("partnership");
  };

  const closePopup = () => setPopup(null);

  return (
    <>
      {/* NAVIGATION */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.08] bg-[#05070B]/85 backdrop-blur-2xl"
            : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 transition-all duration-500 md:px-10 xl:px-16",
            scrolled ? "py-3" : "py-5 md:py-7"
          )}
        >
          {/* LOGO */}
          <a
            href="#home"
            aria-label="Global AI GRCS Summit home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt="Global AI GRCS Summit"
              width={180}
              height={60}
              priority
              className={cn(
                "h-12 w-auto object-contain transition-all duration-500 md:h-[58px]",
                scrolled && "md:h-[48px]"
              )}
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-[12px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#5478FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-4 xl:flex">
            <button
              type="button"
              onClick={openPartnership}
              className="text-xs font-medium text-white/60 transition-colors hover:text-white"
            >
              Partner With Us
            </button>

            <button
              type="button"
              onClick={openContact}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:bg-[#DCE5FF]"
            >
              <span>Contact Us</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition hover:bg-white/10 xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/[0.08] bg-[#05070B]/95 backdrop-blur-2xl xl:hidden"
            >
              <div className="flex flex-col px-6 pb-8 pt-5 md:px-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4 text-lg font-medium text-white/80 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={17}
                      className="text-white/30 transition group-hover:text-white"
                    />
                  </motion.a>
                ))}

                <div className="mt-6 flex flex-col gap-3">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={openContact}
                    className="w-full"
                  >
                    Contact Us
                  </Button>

                  <button
                    type="button"
                    onClick={openPartnership}
                    className="py-3 text-sm text-white/60 transition hover:text-white"
                  >
                    Partnership Enquiry
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CONTACT / PARTNERSHIP POPUP */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePopup();
            }}
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute right-5 top-5 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 overflow-y-auto bg-[#080A10] lg:inset-x-[5vw] lg:bottom-[3vh] lg:top-[3vh] lg:border lg:border-white/10"
            >
              <div className="sticky top-0 z-20 border-b border-white/10 bg-[#080A10]/90 px-6 py-5 backdrop-blur-xl md:px-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6485FF]">
                  Global AI GRCS Summit India
                </p>

                <p className="mt-2 text-sm text-white/60">
                  {popup === "partnership"
                    ? "Partnership enquiry"
                    : "General enquiry"}
                </p>
              </div>

              {popup === "partnership" ? (
                <PartnershipEnquiry />
              ) : (
                <GeneralContact />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
