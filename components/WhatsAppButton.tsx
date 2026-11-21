
"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "917676557286";

  const message = encodeURIComponent(
    "Hello, I would like to know more about the Global AI GRCS Summit India."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <MessageCircle size={30} strokeWidth={2.2} />

      {/* ONLINE INDICATOR */}
      <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
    </a>
  );
}
