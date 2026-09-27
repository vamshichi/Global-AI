"use client";

import { motion } from "framer-motion";
import { whyAttendCards, walkAwayItems, builtFor, notBuiltFor } from "@/data/why-attend";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

export function WhyAttend() {
  return (
    <section id="why-attend" className="border-t border-line bg-navy py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Why Attend</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Your AI is already in production.
            <br />
            Is your governance?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-dim">
            India has stopped asking whether to deploy AI. It&rsquo;s asking whether you can prove
            you deployed it safely — to a regulator, an auditor, and your own board.
          </p>
        </div>

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
              <h3 className="text-lg font-medium text-ink">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="label-tag">What You&rsquo;ll Walk Away With</p>
            <ul className="mt-6 space-y-5">
              {walkAwayItems.map((item) => (
                <li key={item} className="flex gap-4 text-ink-dim">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-signal" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-tag">Is This Room for You?</p>
            <p className="mt-6 text-sm text-ink-faint">Built for</p>
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
                Not built for: <span className="text-ink-dim">{notBuiltFor}</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#delegates" variant="secondary">
                Check Delegate Eligibility
              </Button>
              <Button href="#registration" variant="primary">
                Reserve Your Seat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
