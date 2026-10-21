
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CalendarDays,
  MapPin,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-[#D6B779]/70 focus:bg-white/[0.07]";

const labelClass = "mb-2 block text-sm font-medium text-white/75";

const industries = [
  "Technology & Software",
  "Banking & Financial Services",
  "Cybersecurity",
  "Consulting & Professional Services",
  "Government & Public Sector",
  "Healthcare & Life Sciences",
  "Energy & Utilities",
  "Telecommunications",
  "Manufacturing & Industrial",
  "Legal, Risk & Compliance",
  "Education & Research",
  "Other",
];

const interests = [
  "Governance",
  "Risk",
  "Compliance",
  "Security",
  "AI Strategy",
  "Other",
];

const registrationTypes = [
  "Individual",
  "Group",
  "Sponsor",
  "Speaker",
  "Partner",
];

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setError("");

    const payload = Object.fromEntries(formData.entries());

    try {
      // Connect this endpoint to your registration API.
      const response = await fetch("/api/registration-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    <main className="min-h-screen overflow-hidden bg-[#080E18] text-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[480px] items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080E18] via-[#080E18]/90 to-[#080E18]/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080E18] via-transparent to-[#080E18]/30" />

        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D6B779]/30 bg-black/20 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#D6B779]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E8D4A2]">
                Registration of Interest
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D6B779]">
              Global AI GRCS Summit 2027
            </p>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Make Your Next AI Decision a{" "}
              <span className="font-serif italic text-[#D6B779]">
                More Informed One.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Join the leaders working to make AI accountable, secure and
              ready to scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#D6B779]" />
                Dubai, United Arab Emirates
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#D6B779]" />
                6 August 2027*
              </span>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-[#D6B779]/10 blur-[100px]" />
      </section>

      {/* Registration form */}
      <section id="registration-form" className="relative px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Intro panel */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6B779]">
              Join the Conversation
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Be Part of the Future of{" "}
              <span className="font-serif italic text-[#D6B779]">
                Trusted AI.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-white/60">
              Share your details with our team to express your interest in
              attending the Dubai Edition. We&apos;ll contact you with the
              next steps.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6B779]/20 bg-[#D6B779]/10">
                  <ShieldCheck className="h-5 w-5 text-[#D6B779]" />
                </div>
                <div>
                  <h3 className="font-medium">Focused on trusted AI</h3>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Governance, risk, compliance and security in one
                    business-focused forum.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D6B779]/20 bg-[#D6B779]/10">
                  <LockKeyhole className="h-5 w-5 text-[#D6B779]" />
                </div>
                <div>
                  <h3 className="font-medium">Your details matter</h3>
                  <p className="mt-1 text-sm leading-6 text-white/50">
                    Your information should be handled in accordance with the
                    event&apos;s privacy notice.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                Event
              </p>
              <p className="mt-2 font-medium">
                Global AI GRCS Summit 2027
              </p>
              <p className="mt-1 text-sm text-[#D6B779]">Dubai Edition</p>
              <div className="mt-4 h-px bg-white/10" />
              <p className="mt-4 text-xs leading-5 text-white/45">
                *Please confirm the event date before publishing. Registration
                enquiries do not constitute confirmed attendance.
              </p>
            </div>
          </motion.aside>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-[#0D1624]/90 p-6 shadow-2xl shadow-black/20 sm:p-9 lg:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D6B779]/30 bg-[#D6B779]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#D6B779]" />
                </div>
                <h2 className="mt-7 text-3xl font-semibold">
                  Thank You for Your Interest.
                </h2>
                <p className="mt-5 max-w-lg leading-7 text-white/65">
                  Thank you for your interest in Global AI GRCS Summit 2027 —
                  Dubai Edition. Our team will contact you with the next steps.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
                  Your registration is not confirmed until you receive
                  official confirmation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#D6B779] transition hover:text-white"
                >
                  Back to registration
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B779]">
                    Registration Enquiry
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Tell Us About Yourself
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Complete the form below and our team will be in touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="firstName">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        autoComplete="given-name"
                        placeholder="Enter first name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="lastName">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        autoComplete="family-name"
                        placeholder="Enter last name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="jobTitle">
                        Job Title *
                      </label>
                      <input
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="e.g. Chief Information Officer"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="organisation">
                        Organisation *
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        autoComplete="organization"
                        placeholder="Company or organisation"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="businessEmail">
                        Business Email *
                      </label>
                      <input
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="businessPhone">
                        Business Phone *
                      </label>
                      <input
                        id="businessPhone"
                        name="businessPhone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+971 XX XXX XXXX"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="country">
                        Country *
                      </label>
                      <input
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        placeholder="Enter your country"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="industry">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        defaultValue=""
                        className={`${inputClass} [color-scheme:dark]`}
                        required
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="primaryInterest">
                        Primary Interest *
                      </label>
                      <select
                        id="primaryInterest"
                        name="primaryInterest"
                        defaultValue=""
                        className={`${inputClass} [color-scheme:dark]`}
                        required
                      >
                        <option value="" disabled>
                          Select your primary interest
                        </option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className={labelClass}
                        htmlFor="registrationType"
                      >
                        Registration Type *
                      </label>
                      <select
                        id="registrationType"
                        name="registrationType"
                        defaultValue=""
                        className={`${inputClass} [color-scheme:dark]`}
                        required
                      >
                        <option value="" disabled>
                          Select registration type
                        </option>
                        {registrationTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="requirements"
                    >
                      Accessibility or Dietary Requirements
                      <span className="ml-2 font-normal text-white/35">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={3}
                      placeholder="Let us know if you have any requirements..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        value="yes"
                        required
                        className="mt-1 h-4 w-4 shrink-0 accent-[#D6B779]"
                      />
                      <span className="text-sm leading-6 text-white/65">
                        I consent to being contacted about the summit and
                        acknowledge the event privacy notice. *
                        {/* Replace this with your actual privacy policy URL. */}
                        <a
                          href="/privacy-policy"
                          className="ml-1 text-[#D6B779] underline decoration-[#D6B779]/40 underline-offset-4 hover:text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Privacy Notice
                        </a>
                      </span>
                    </label>
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#D6B779] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#10151D] transition duration-300 hover:bg-[#E8D4A2] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Registration Enquiry"}
                    {!loading && (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-white/35">
                    Submitting this form expresses your interest only.
                    Attendance is subject to official confirmation.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
