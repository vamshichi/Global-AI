
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Linkedin,
  Mic2,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const expertise = [
  "Enterprise AI",
  "Cybersecurity",
  "AI Governance",
  "Risk & Compliance",
  "Regulation",
  "AI Assurance",
];

export default function SpeakersSection() {
  const reduceMotion = useReducedMotion();
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setError("");

    try {
      // Connect this endpoint to your actual backend.
      const response = await fetch("/api/speaker-enquiry", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Unable to submit your enquiry. Please try again.");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="speakers"
      className="relative isolate overflow-hidden bg-[#080E18]
        px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10
          -z-10 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10
          -z-10 h-96 w-96 rounded-full bg-amber-300/[0.06] blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px]">

        {/* Hero heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end lg:gap-20"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B779]" />
              <span className="text-[10px] font-semibold uppercase
                tracking-[0.28em] text-[#D6B779] sm:text-xs"
              >
                The Speakers
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em]
                text-white/35"
              >
                / Dubai 2027
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-medium
              leading-[1.06] tracking-[-0.045em]
              sm:text-5xl md:text-6xl xl:text-7xl"
            >
              The Voices Shaping
              <br />
              the Future of
              <br />
              <span className="bg-gradient-to-r from-[#F3E5C1]
                via-[#D6B779] to-[#B9904A] bg-clip-text
                text-transparent"
              >
                Trusted AI.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Hear from leaders working across enterprise AI,
              cybersecurity, governance, risk, compliance,
              regulation and assurance.
            </p>

            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              We are curating practical perspectives from enterprise
              decision-makers, risk and security leaders, legal experts,
              technology innovators and relevant public-sector specialists.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-white/[0.025]
                    px-3 py-2 text-[10px] uppercase tracking-[0.1em]
                    text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Speaker announcement feature */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-16 overflow-hidden border
            border-white/10 bg-[#0D1521] sm:mt-20"
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* Abstract speaker visual */}
            <div className="relative flex min-h-[280px] items-center
              justify-center overflow-hidden border-b border-white/10
              bg-gradient-to-br from-[#152438] via-[#0B1422]
              to-[#080E18] sm:min-h-[360px] lg:border-b-0
              lg:border-r"
            >
              <div
                aria-hidden="true"
                className="absolute h-64 w-64 rounded-full
                  border border-[#D6B779]/15 sm:h-80 sm:w-80"
              />

              <div
                aria-hidden="true"
                className="absolute h-48 w-48 rounded-full
                  border border-white/[0.08] sm:h-60 sm:w-60"
              />

              <div
                aria-hidden="true"
                className="absolute h-32 w-32 rounded-full
                  bg-[#D6B779]/[0.08] blur-3xl"
              />

              <div className="relative flex h-24 w-24 items-center
                justify-center rounded-full border border-[#D6B779]/30
                bg-[#D6B779]/[0.06] sm:h-28 sm:w-28"
              >
                <BrainCircuit
                  size={43}
                  strokeWidth={1}
                  className="text-[#D6B779]"
                />
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6B779]" />
                <span className="text-[9px] uppercase tracking-[0.22em]
                  text-white/55"
                >
                  Global AI GRCS Summit
                </span>
              </div>

              <span className="absolute right-6 top-6 text-[10px]
                tracking-[0.2em] text-white/35"
              >
                2027
              </span>
            </div>

            {/* Announcement content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2 text-[#D6B779]">
                <Sparkles size={15} strokeWidth={1.5} />
                <span className="text-[10px] font-semibold uppercase
                  tracking-[0.24em]"
                >
                  Speaker Announcements
                </span>
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-medium
                leading-tight tracking-[-0.035em] sm:text-4xl"
              >
                Perspectives That Move
                <span className="text-[#D6B779]"> AI Forward.</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                We are bringing together experts who understand the
                opportunities and responsibilities of deploying AI
                across modern enterprises.
              </p>

              <div className="mt-7 flex items-start gap-3 border-l
                border-[#D6B779]/50 pl-4"
              >
                <ShieldCheck
                  size={18}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#D6B779]"
                />
                <p className="text-xs leading-6 text-white/55 sm:text-sm">
                  Speaker announcements will be published as
                  participation is formally confirmed.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormOpen(true);
                  setSubmitted(false);
                  setError("");
                }}
                className="group mt-9 inline-flex min-h-12 w-fit
                  items-center gap-3 border border-[#D6B779]/50
                  px-5 py-3 text-[10px] font-semibold uppercase
                  tracking-[0.15em] text-[#E8CE96]
                  transition-all duration-300 hover:bg-[#D6B779]
                  hover:text-[#10141B]"
              >
                <Mic2 size={16} />
                Propose a Speaker
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Areas of expertise */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 sm:mt-24"
        >
          <div className="mb-8 flex flex-col gap-3 sm:flex-row
            sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase
                tracking-[0.24em] text-[#D6B779]"
              >
                Expertise on Stage
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-tight
                sm:text-3xl"
              >
                Conversations Worth Having.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/45">
              Practical perspectives across the disciplines shaping
              the future of trusted enterprise AI.
            </p>
          </div>

          <div className="grid grid-cols-1 border-l border-t
            border-white/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: BrainCircuit,
                title: "Enterprise AI",
                text: "Responsible adoption, intelligent systems and business outcomes.",
              },
              {
                icon: ShieldCheck,
                title: "Cybersecurity",
                text: "AI threats, model security and enterprise resilience.",
              },
              {
                icon: Scale,
                title: "Governance & Regulation",
                text: "Accountability, compliance and defensible controls.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="border-b border-r border-white/10
                    p-6 transition-colors duration-300
                    hover:bg-white/[0.025] sm:p-8"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.4}
                    className="text-[#D6B779]"
                  />

                  <h4 className="mt-6 text-lg font-medium">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 flex flex-col gap-6 border-t
            border-white/10 pt-8 sm:mt-20 sm:flex-row
            sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xl font-medium tracking-tight sm:text-2xl">
              Have a perspective worth sharing?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Contribute your expertise to the trusted AI conversation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormOpen(true);
              setSubmitted(false);
              setError("");
            }}
            className="group inline-flex min-h-14 items-center
              justify-center gap-3 bg-[#D6B779] px-7 py-4
              text-xs font-bold uppercase tracking-[0.12em]
              text-[#10141B] transition-colors hover:bg-[#EDCE91]"
          >
            Speak at the Summit
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>

      {/* Speaker proposal form modal */}
      {formOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center
            justify-center overflow-y-auto bg-black/80 p-4
            backdrop-blur-md sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !loading) {
              setFormOpen(false);
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-auto w-full max-w-2xl border
              border-white/10 bg-[#0B111C] p-6 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="speaker-form-title"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em]
                  text-[#D6B779]"
                >
                  Speaker Enquiry
                </p>

                <h3 id="speaker-form-title" className="mt-3 text-2xl
                  font-medium sm:text-3xl"
                >
                  Share Your Expertise.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Tell us about yourself and your proposed contribution.
                </p>
              </div>

              <button
                type="button"
                aria-label="Close speaker form"
                disabled={loading}
                onClick={() => setFormOpen(false)}
                className="px-2 py-1 text-xl text-white/50
                  hover:text-white disabled:opacity-40"
              >
                ×
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2
                  size={42}
                  className="mx-auto text-[#D6B779]"
                />
                <h4 className="mt-5 text-xl font-medium">
                  Enquiry Submitted
                </h4>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Thank you for your interest. Your enquiry has been
                  submitted successfully.
                </p>
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="mt-7 bg-[#D6B779] px-6 py-3
                    text-xs font-bold uppercase tracking-wider text-[#10141B]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="fullName" required />
                  <Field label="Job Title" name="jobTitle" required />
                  <Field label="Organisation" name="organisation" required />
                  <Field
                    label="Work Email"
                    name="workEmail"
                    type="email"
                    required
                  />
                </div>

                <Field
                  label="Proposed Topic"
                  name="proposedTopic"
                  required
                />

                <div>
                  <label
                    htmlFor="shortBiography"
                    className="mb-2 block text-xs text-white/70"
                  >
                    Short Biography
                  </label>
                  <textarea
                    id="shortBiography"
                    name="shortBiography"
                    rows={4}
                    required
                    className="w-full resize-y border border-white/10
                      bg-white/[0.025] px-4 py-3 text-sm text-white
                      outline-none transition-colors placeholder:text-white/25
                      focus:border-[#D6B779]/60"
                    placeholder="Share your relevant experience..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkedinProfile"
                    className="mb-2 block text-xs text-white/70"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    id="linkedinProfile"
                    name="linkedinProfile"
                    type="url"
                    placeholder="https://www.linkedin.com/in/..."
                    className="w-full border border-white/10
                      bg-white/[0.025] px-4 py-3 text-sm text-white
                      outline-none transition-colors placeholder:text-white/25
                      focus:border-[#D6B779]/60"
                  />
                  <p className="mt-2 flex items-center gap-2 text-[10px]
                    text-white/40"
                  >
                    <Linkedin size={13} />
                    Optional professional profile
                  </p>
                </div>

                <label className="flex items-start gap-3 text-xs
                  leading-6 text-white/55"
                >
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    required
                    className="mt-1 accent-[#D6B779]"
                  />
                  <span>
                    I consent to being contacted by the summit team
                    regarding my speaker enquiry and acknowledge the
                    applicable privacy notice.
                  </span>
                </label>

                {error && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-14 w-full items-center
                    justify-center gap-3 bg-[#D6B779] px-6 py-4
                    text-xs font-bold uppercase tracking-[0.12em]
                    text-[#10141B] transition-colors hover:bg-[#EDCE91]
                    disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Speaker Enquiry"}
                  {!loading && <ArrowRight size={16} />}
                </button>

                <p className="text-[10px] leading-5 text-white/35">
                  Submission does not guarantee speaker selection.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `speaker-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs text-white/70"
      >
        {label}
        {required && <span className="ml-1 text-[#D6B779]">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={
          name === "fullName"
            ? "name"
            : name === "workEmail"
              ? "email"
              : "off"
        }
        className="w-full border border-white/10 bg-white/[0.025]
          px-4 py-3 text-sm text-white outline-none transition-colors
          placeholder:text-white/25 focus:border-[#D6B779]/60"
      />
    </div>
  );
}
