"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const googleMapsUrl =
  "https://www.google.com/maps/place/Courtyard+by+Marriott+Mumbai+International+Airport/@19.114055,72.8644962,17z/data=!3m1!4b1!4m9!3m8!1s0x3be7c83a0b5aaceb:0x76df30fcaacbaa20!5m2!4m1!1i2!8m2!3d19.114055!4d72.8644962!16s%2Fm%2F09v4r_y?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D";

export function VenueSection() {
  return (
    <section
      id="venue"
      className="border-t border-line bg-navy py-28 lg:py-36"
    >
      <div className="container-edge">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="label-tag">
            Venue
          </p>

          <h2
            className="
              mt-5
              text-[clamp(2.25rem,4.6vw,4rem)]
              font-medium
              leading-[1.05]
              text-ink
            "
          >
            Where the room comes together.
          </h2>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-stretch">

          {/* ================================================= */}
          {/* VENUE IMAGE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 1.03,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              relative
              min-h-[340px]
              overflow-hidden
              border
              border-line
              bg-charcoal
            "
          >
            <Image
              src="/images/venue.webp"
              alt="Courtyard by Marriott Mumbai International Airport"
              fill
              priority
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Dark overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/20
                to-transparent
              "
            />

            {/* Location */}
            <div
              className="
                absolute
                bottom-6
                left-6
                flex
                items-center
                gap-2
                text-white
              "
            >
              <MapPin className="h-5 w-5 text-signal" />

              <span className="text-sm">
                Andheri East, Mumbai
              </span>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* VENUE DETAILS */}
          {/* ================================================= */}

          <div className="flex flex-col justify-between">
            <div>

              <p className="text-2xl font-medium text-ink">
                Courtyard by Marriott, Mumbai International Airport
              </p>

              <p className="mt-2 text-ink-dim">
                Andheri East, Mumbai · 6 minutes from Chhatrapati
                Shivaji International Airport
              </p>

              {/* DETAILS */}
              <div
                className="
                  mt-10
                  grid
                  gap-6
                  border-t
                  border-line
                  pt-8
                  sm:grid-cols-2
                "
              >

                {/* DATE */}
                <div>
                  <p className="label-tag">
                    Date &amp; Time
                  </p>

                  <p className="mt-2 text-ink">
                    Thursday, 10 December 2026
                  </p>

                  <p className="text-ink-dim">
                    09:00 – 18:30
                  </p>

                  <p className="mt-1 text-ink-dim">
                    Gala Dinner 19:00 – 21:30
                  </p>
                </div>

                {/* STAY */}
                <div>
                  <p className="label-tag">
                    Stay
                  </p>

                  <p className="mt-2 text-ink-dim">
                    On-site rooms available for outstation
                    delegates and speakers
                  </p>
                </div>

                {/* GETTING THERE */}
                <div className="sm:col-span-2">
                  <p className="label-tag">
                    Getting There
                  </p>

                  <p className="mt-2 text-ink-dim">
                    Airport-adjacent, easy access to BKC, Powai,
                    Western Express Highway
                  </p>
                </div>

              </div>
            </div>

            {/* ================================================= */}
            {/* BUTTONS */}
            {/* ================================================= */}

            <div className="mt-10 flex flex-wrap gap-4">

              {/* GOOGLE MAPS */}
              <Button
                href={googleMapsUrl}
                variant="primary"
              >
                View Map
              </Button>

              {/* ACCOMMODATION */}
              <Button
                href="#registration"
                variant="secondary"
              >
                Book Accommodation
              </Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}