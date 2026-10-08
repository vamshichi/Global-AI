"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while popup is open
  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [popup]);

  // ESC closes popup
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPopup(null);
      }
    }

    if (popup) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [popup]);

  const openPartnership = () => {
    setOpen(false);
    setPopup("partnership");
  };

  const openContact = () => {
    setOpen(false);
    setPopup("contact");
  };

  const closePopup = () => {
    setPopup(null);
  };

  return (
    <>
      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

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
          <a
            href="#home"
            className="focus-ring flex items-center"
          >
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
                className="
                  focus-ring
                  group
                  relative
                  text-sm
                  text-ink-dim
                  transition-colors
                  hover:text-ink
                "
              >
                {link.label}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    bg-signal
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* PARTNERSHIP */}
            <Button
              type="button"
              variant="secondary"
              onClick={openPartnership}
              className="px-5 py-2.5 text-xs"
            >
              Partner With Us
            </Button>

            {/* CONTACT */}
            <Button
              type="button"
              variant="primary"
              onClick={openContact}
              className="px-5 py-2.5 text-xs"
            >
              Contact Us
            </Button>
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            onClick={() => setOpen((v) => !v)}
            className="focus-ring text-ink lg:hidden"
          >
            {open ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-line
                bg-void
                lg:hidden
              "
            >
              <div
                className="
                  container-edge
                  flex
                  flex-col
                  gap-6
                  py-8
                "
              >
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

                  {/* MOBILE PARTNERSHIP */}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={openPartnership}
                    className="w-full"
                  >
                    Partner With Us
                  </Button>

                  {/* MOBILE CONTACT */}
                  <Button
                    type="button"
                    variant="primary"
                    onClick={openContact}
                    className="w-full"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================================================= */}
      {/* POPUP */}
      {/* ================================================= */}

      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-md
            "
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closePopup();
              }
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close popup"
              className="
                absolute
                right-5
                top-5
                z-[110]
                flex
                h-11
                w-11
                items-center
                justify-center
                border
                border-white/20
                bg-black/40
                text-white
                backdrop-blur-md
                transition
                hover:border-white/40
                hover:bg-white/10
              "
            >
              <X size={21} />
            </button>

            {/* POPUP CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-x-0
                bottom-0
                top-0
                overflow-y-auto
                overscroll-contain
                bg-void
                lg:inset-x-[5vw]
                lg:bottom-[3vh]
                lg:top-[3vh]
                lg:border
                lg:border-line
                lg:shadow-2xl
              "
            >
              {/* Popup header */}
              <div
                className="
                  sticky
                  top-0
                  z-20
                  border-b
                  border-line
                  bg-void/90
                  px-6
                  py-4
                  backdrop-blur-xl
                  lg:px-10
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#3E6BFF]">
                      Global AI GRCS Summit India 2026
                    </p>

                    <p className="mt-1 text-sm text-ink-dim">
                      {popup === "partnership"
                        ? "Partnership enquiry"
                        : "General enquiry"}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closePopup}
                    className="
                      hidden
                      items-center
                      gap-2
                      text-xs
                      uppercase
                      tracking-[0.12em]
                      text-ink-dim
                      transition
                      hover:text-ink
                      sm:flex
                    "
                  >
                    Close
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Form */}
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