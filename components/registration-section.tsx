"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const paths = [
  {
    number: "01",
    emoji: "\u{1F39F}\u{FE0F}",
    title: "I Want to Attend",
    description: "Reserve one of 200\u2013250 seats.",
    cta: "Register as a Delegate",
  },
  {
    number: "02",
    emoji: "\u{1F91D}",
    title: "I Want to Partner",
    description: "Own the category before someone else does.",
    cta: "Talk to Our Partnerships Team",
  },
  {
    number: "03",
    emoji: "\u{1F3A4}",
    title: "I Want to Speak / Nominate a Speaker",
    description: "Bring regulatory or practitioner insight to the stage.",
    cta: "Submit a Speaker Nomination",
  },
];

export function RegistrationSection() {
  return (
    <section id="registration" className="border-t border-line bg-navy py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Registration</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Ready to be in the room?
          </h2>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex flex-col justify-between bg-navy p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl italic text-signal">{path.number}</span>
                  <span className="text-2xl" aria-hidden="true">
                    {path.emoji}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-ink">{path.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{path.description}</p>
              </div>
              <div className="mt-10">
                <Button href="#" variant="secondary" className="w-full">
                  {path.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex items-center gap-3 text-ink-dim">
            <Mail className="h-5 w-5 text-signal" />
            <span className="text-sm">Email on request</span>
          </div>
          <div className="flex items-center gap-3 text-ink-dim">
            <Phone className="h-5 w-5 text-signal" />
            <span className="text-sm">Phone on request</span>
          </div>
          <div className="flex items-center gap-3 text-ink-dim">
            <MapPin className="h-5 w-5 text-signal" />
            <span className="text-sm">Mumbai, India</span>
          </div>
          <div className="flex items-center gap-3 text-ink-dim">
            <Linkedin className="h-5 w-5 text-signal" />
            <span className="text-sm">LinkedIn</span>
          </div>
          <div className="flex items-center gap-3 text-ink-dim">
            <MessageCircle className="h-5 w-5 text-signal" />
            <span className="text-sm">WhatsApp Broadcast Sign-up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
