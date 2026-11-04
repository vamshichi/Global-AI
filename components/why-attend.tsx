
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  whyAttendCards,
  walkAwayItems,
  builtFor,
  notBuiltFor,
} from "@/data/why-attend";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export function WhyAttend() {
  return (
    <section
      id="why-attend"
      className="border-t border-line bg-navy py-28 lg:py-36"
    >
      <div className="container-edge">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="label-tag">Why Attend</p>

          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Your AI is already in production.
            <br />
            Is your governance?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-dim">
            India has stopped asking whether to deploy AI. It&rsquo;s asking
            whether you can prove you deployed it safely — to a regulator,
            an auditor, and your own board.
          </p>
        </div>

        {/* Why Attend Cards */}
        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
          {whyAttendCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="bg-navy px-7 py-10"
            >
              <h3 className="text-lg font-medium text-ink">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-ink-dim">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image + Walk Away Content */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Panel Discussion Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-2xl border border-line"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/leadership-panel.png"
                alt="Technology leaders participating in a panel discussion"
                fill
                priority={false}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Image Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Leadership. Innovation. Strategy.
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight text-white sm:text-3xl">
                Conversations That Shape the Future
              </h3>
            </div>
          </motion.div>

          {/* What You'll Walk Away With */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-tag">
              What You&rsquo;ll Walk Away With
            </p>

            <ul className="mt-6 space-y-5">
              {walkAwayItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-ink-dim"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-signal" />

                  <span className="leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Delegate Eligibility */}
        <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Built For */}
          <div>
            <p className="label-tag">
              Is This Room for You?
            </p>

            <p className="mt-6 text-sm text-ink-faint">
              Built for
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {builtFor.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-ink"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-line pt-6 text-ink-faint">
              <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />

              <p className="text-sm">
                Not built for:{" "}
                <span className="text-ink-dim">
                  {notBuiltFor}
                </span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <Button href="#delegates" variant="secondary">
              Check Delegate Eligibility
            </Button>

            <Button href="#registration" variant="primary">
              Reserve Your Seat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
