"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  Clock3,
  Hotel,
  Plane,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const googleMapsUrl =
  "https://www.google.com/maps/place/Courtyard+by+Marriott+Mumbai+International+Airport/@19.114055,72.8644962,17z/data=!3m1!4b1!4m9!3m8!1s0x3be7c83a0b5aaceb:0x76df30fcaacbaa20!5m2!4m1!1i2!8m2!3d19.114055!4d72.8644962!16s%2Fm%2F09v4r_y?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D";

const venueDetails = [
  {
    icon: CalendarDays,
    label: "Conference date",
    title: "Thursday, 21 January 2027",
    description: "A full day of leadership conversations",
  },
  {
    icon: Clock3,
    label: "Programme",
    title: "09:00 – 18:30",
    description: "Gala Dinner · 19:00 – 21:30",
  },
  {
    icon: Hotel,
    label: "Accommodation",
    title: "Stay close to the experience",
    description:
      "On-site rooms available for outstation delegates and speakers.",
  },
  {
    icon: Plane,
    label: "Getting here",
    title: "Mumbai International Airport",
    description:
      "Convenient access to Andheri East, BKC, Powai and the Western Express Highway.",
  },
];

export function VenueSection() {
  return (
    <section
      id="venue"
      className="relative overflow-hidden border-t border-white/10 bg-[#080D17] py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

      <div className="container-edge relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                The Venue
              </p>
            </div>

            <h2 className="mt-6 text-[clamp(2.6rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
              The right place
              <br />
              <span className="text-white/45">for what comes next.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55 lg:pb-2">
            A central Mumbai setting for meaningful conversations, new
            perspectives, and connections that move the industry forward.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[420px] overflow-hidden rounded-sm border border-white/10 bg-white/5 sm:min-h-[560px]"
          >
            <Image
              src="/images/venue.webp"
              alt="Conference venue in Mumbai"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#080D17]/95 via-[#080D17]/10 to-[#080D17]/10" />

            {/* Image label */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/90">
                Mumbai · India
              </span>
            </div>

            {/* Image bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Conference location
                  </p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    Andheri East, Mumbai
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-white/65">
                    <MapPin className="h-4 w-4 text-blue-300" />
                    Courtyard by Marriott Mumbai International Airport
                  </p>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open venue in Google Maps"
                  className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition hover:bg-white hover:text-[#080D17] sm:flex"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="border-y border-white/10">
              {venueDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`group grid grid-cols-[42px_1fr] gap-4 py-6 sm:py-7 ${
                      index !== venueDetails.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-blue-300/40 group-hover:bg-blue-300/10">
                      <Icon className="h-4 w-4 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-base font-medium text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <p className="mb-5 text-sm leading-6 text-white/50">
                Make your plans early and be part of a day built around
                leadership, insight, and connection.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href={googleMapsUrl} variant="primary">
                  View Venue Map
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>

                <Button href="#registration" variant="secondary">
                  Book Accommodation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}