
"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import PartnershipEnquiry from "@/components/PartnershipEnquiry";
import DelegateRegistration from "@/components/DelegateRegistration";
import SpeakerNomination from "@/components/SpeakerNomination";

export type FormType = "sponsor" | "delegate" | "speaker" | null;

interface FormModalProps {
  type: FormType;
  onClose: () => void;
}

export default function FormModal({ type, onClose }: FormModalProps) {
  useEffect(() => {
    if (!type) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative my-auto w-full max-w-6xl overflow-hidden border border-white/10 bg-[#0b0d12] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-white/15 bg-[#0b0d12] text-white transition hover:bg-[#3E6BFF] sm:right-5 sm:top-5"
        >
          <X className="h-5 w-5" />
        </button>

        {type === "sponsor" && <PartnershipEnquiry />}
        {type === "delegate" && <DelegateRegistration />}
        {type === "speaker" && <SpeakerNomination />}
      </div>
    </div>
  );
}
