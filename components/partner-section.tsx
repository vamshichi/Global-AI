"use client";

import { motion } from "framer-motion";
import { whyPartner, buyerCategories } from "@/data/partners";
import { Button } from "@/components/ui/button";

export function PartnerSection() {
  return (
    <section id="partners" className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Partners</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Stop selling logos.
            <br />
            Start owning the category.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-dim">
            No India-headquartered AI-GRC platform owns this space yet. It could be you — on day
            one, in front of the exact people who approve, fund, audit or kill enterprise AI
            budgets.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="label-tag">Why Partner</p>
            <ul className="mt-6 space-y-5 border-t border-line pt-6">
              {whyPartner.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-4 border-b border-line pb-5 text-ink-dim last:border-b-0"
                >
                  <span className="font-serif text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            <blockquote className="mt-10 border-l-2 border-signal pl-6 font-serif text-xl italic leading-snug text-ink">
              &ldquo;The people governing AI will decide which AI technology enterprises buy. Be in
              the room where that decision gets made.&rdquo;
            </blockquote>
          </div>

          <div>
            <p className="label-tag">Who&rsquo;s Buying in This Room</p>
            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              {buyerCategories.map((category) => (
                <div key={category} className="bg-charcoal px-6 py-6 text-sm text-ink">
                  {category}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#registration" variant="primary">
                View Partnership Tiers
              </Button>
              <Button href="#registration" variant="secondary">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
