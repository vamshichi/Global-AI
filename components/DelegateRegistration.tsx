"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, X } from "lucide-react";

const industries = [
  "Banking / NBFC / Fintech",
  "GCC / IT-ITeS",
  "IT Services / Technology / SaaS",
  "Cybersecurity / Data / Privacy / Telecom",
  "Healthcare / Life Sciences",
  "Manufacturing / Automotive",
  "Retail / E-commerce / Logistics",
  "Government / Public Sector",
  "Other",
];

const seniorityLevels = [
  "CXO / Board",
  "VP / Director",
  "Head / Department Lead",
  "Senior Manager",
  "Other",
];

const interests = [
  "AI governance",
  "Regulatory compliance",
  "Model risk",
  "Data privacy / DPDP",
  "AI security",
  "Audit and assurance",
  "Sector-specific AI",
  "Other",
];

const attendanceOptions = [
  "Full-day summit",
  "Summit + gala dinner",
  "Not sure yet",
];

const hearAboutOptions = [
  "LinkedIn",
  "Email",
  "Colleague / Peer",
  "Event partner",
  "Search engine",
  "Social media",
  "Other",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  jobTitle: "",
  organisation: "",
  industry: "",
  seniority: "",
  interests: [] as string[],
  attendance: "",
  requirements: "",
  heardFrom: "",
  consent: false,
  marketing: false,
};

export default function DelegateRegistration() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }));
  };

  const removeInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.filter((item) => item !== interest),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.consent) return;

    // Connect your API here.
    console.log("Delegate registration:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="registration"
        className="relative overflow-hidden bg-void px-6 py-24 lg:px-12 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="field-grid absolute inset-0 opacity-30" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E6BFF]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#3E6BFF]/40 bg-[#3E6BFF]/10"
          >
            <Check className="h-7 w-7 text-[#3E6BFF]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#3E6BFF]"
          >
            Registration received
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl font-medium tracking-tight text-ink md:text-5xl"
          >
            Thank you for your interest.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ink-dim md:text-lg"
          >
            Thank you for your interest in the Global AI GRCS Summit India
            2026. Our team will review your details and contact you with the
            next steps.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-void px-6 py-24 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-30" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#3E6BFF]/8 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3E6BFF]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label-tag">
              Delegate registration / seat reservation
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Reserve your place
              <br />
              in the room.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-ink-dim md:text-lg">
              Reserve your place among 200–250 carefully selected senior
              leaders shaping how AI is governed, secured and trusted across
              India.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-ink-dim/80">
              Share your details to register your interest; the team will
              follow up with eligibility and next steps.
            </p>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-ink-dim">
                Global AI GRCS Summit India 2026
              </p>

              <p className="mt-2 text-sm text-ink">
                10 December 2026
              </p>

              <p className="mt-1 text-sm text-ink-dim">
                Courtyard by Marriott
                <br />
                Mumbai International Airport
              </p>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="border border-line bg-white/[0.025] p-6 backdrop-blur-xl md:p-8 lg:p-10"
          >
            {/* BASIC INFORMATION */}
            <FormSection
              number="01"
              title="Your details"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="First name"
                required
                value={form.firstName}
                onChange={(value) => updateField("firstName", value)}
              />

              <Input
                label="Last name"
                required
                value={form.lastName}
                onChange={(value) => updateField("lastName", value)}
              />

              <Input
                label="Work email"
                type="email"
                required
                helper="Use your professional email address."
                value={form.email}
                onChange={(value) => updateField("email", value)}
              />

              <Input
                label="Mobile number"
                type="tel"
                required
                helper="Include country code."
                value={form.mobile}
                onChange={(value) => updateField("mobile", value)}
              />

              <Input
                label="Job title"
                required
                value={form.jobTitle}
                onChange={(value) => updateField("jobTitle", value)}
              />

              <Input
                label="Organisation"
                required
                value={form.organisation}
                onChange={(value) => updateField("organisation", value)}
              />

              <Select
                label="Industry"
                required
                options={industries}
                value={form.industry}
                onChange={(value) => updateField("industry", value)}
              />

              <Select
                label="Seniority"
                required
                options={seniorityLevels}
                value={form.seniority}
                onChange={(value) => updateField("seniority", value)}
              />
            </div>

            {/* INTEREST */}
            <div className="mt-14">
              <FormSection
                number="02"
                title="Your interests"
              />

              <div>
                <p className="mb-4 text-sm font-medium text-ink">
                  Primary area of interest
                </p>

                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => {
                    const selected = form.interests.includes(interest);

                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`
                          border px-4 py-2.5 text-sm transition-all
                          ${
                            selected
                              ? "border-[#3E6BFF] bg-[#3E6BFF]/10 text-ink"
                              : "border-line bg-transparent text-ink-dim hover:border-ink/40 hover:text-ink"
                          }
                        `}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>

                {form.interests.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {form.interests.map((interest) => (
                      <span
                        key={interest}
                        className="flex items-center gap-2 bg-ink px-3 py-1.5 text-xs text-void"
                      >
                        {interest}

                        <button
                          type="button"
                          onClick={() => removeInterest(interest)}
                          aria-label={`Remove ${interest}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ATTENDANCE */}
            <div className="mt-14">
              <FormSection
                number="03"
                title="Attendance"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Select
                  label="Attendance interest"
                  required
                  options={attendanceOptions}
                  value={form.attendance}
                  onChange={(value) =>
                    updateField("attendance", value)
                  }
                />

                <Input
                  label="How did you hear about the summit?"
                  required
                  as="select"
                  options={hearAboutOptions}
                  value={form.heardFrom}
                  onChange={(value) =>
                    updateField("heardFrom", value)
                  }
                />
              </div>

              <div className="mt-6">
                <Input
                  label="Dietary or accessibility requirements"
                  helper="Share only information needed to support attendance."
                  value={form.requirements}
                  onChange={(value) =>
                    updateField("requirements", value)
                  }
                />
              </div>
            </div>

            {/* CONSENT */}
            <div className="mt-14">
              <FormSection
                number="04"
                title="Confirmation"
              />

              <div className="space-y-4">
                <Checkbox
                  checked={form.consent}
                  onChange={(checked) =>
                    updateField("consent", checked)
                  }
                >
                  I agree to be contacted about my registration and
                  event-related information.
                  <span className="ml-1 text-[#3E6BFF]">*</span>
                </Checkbox>

                <Checkbox
                  checked={form.marketing}
                  onChange={(checked) =>
                    updateField("marketing", checked)
                  }
                >
                  I would also like to receive future updates,
                  invitations and marketing communications.
                </Checkbox>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="mt-10 border-t border-line pt-8">
              <button
                type="submit"
                disabled={!form.consent}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  bg-ink
                  px-6
                  py-4
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-void
                  transition-all
                  hover:bg-[#3E6BFF]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  md:w-auto
                  md:min-w-[280px]
                "
              >
                <span>Submit Registration Interest</span>

                <span className="ml-8 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="mt-4 max-w-xl text-xs leading-5 text-ink-dim">
                By submitting this form, you confirm that the information
                provided is accurate and agree to be contacted regarding your
                registration.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* FORM SECTION */
/* -------------------------------- */

function FormSection({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4 border-b border-line pb-4">
      <span className="text-xs font-medium tracking-[0.15em] text-[#3E6BFF]">
        {number}
      </span>

      <h3 className="text-lg font-medium text-ink">
        {title}
      </h3>
    </div>
  );
}

/* -------------------------------- */
/* INPUT */
/* -------------------------------- */

function Input({
  label,
  value,
  onChange,
  required = false,
  helper,
  type = "text",
  as,
  options = [],
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  helper?: string;
  type?: string;
  as?: "select";
  options?: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-[#3E6BFF]">*</span>
        )}
      </label>

      {as === "select" ? (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
              w-full
              appearance-none
              border
              border-line
              bg-transparent
              px-4
              py-3.5
              text-sm
              text-ink
              outline-none
              transition
              focus:border-[#3E6BFF]
            "
          >
            <option value="" className="bg-[#0b0d12]">
              Select an option
            </option>

            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="bg-[#0b0d12]"
              >
                {option}
              </option>
            ))}
          </select>

          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" />
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="
            w-full
            border
            border-line
            bg-transparent
            px-4
            py-3.5
            text-sm
            text-ink
            outline-none
            placeholder:text-ink-dim/40
            transition
            focus:border-[#3E6BFF]
          "
        />
      )}

      {helper && (
        <p className="mt-2 text-xs leading-5 text-ink-dim">
          {helper}
        </p>
      )}
    </div>
  );
}

/* -------------------------------- */
/* SELECT */
/* -------------------------------- */

function Select({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-[#3E6BFF]">*</span>
        )}
      </label>

      <div className="relative">
        <select
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full
            appearance-none
            border
            border-line
            bg-transparent
            px-4
            py-3.5
            text-sm
            text-ink
            outline-none
            transition
            focus:border-[#3E6BFF]
          "
        >
          <option value="" className="bg-[#0b0d12]">
            Select an option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0b0d12]"
            >
              {option}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-dim" />
      </div>
    </div>
  );
}

/* -------------------------------- */
/* CHECKBOX */
/* -------------------------------- */

function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          border
          transition
          ${
            checked
              ? "border-[#3E6BFF] bg-[#3E6BFF]"
              : "border-line bg-transparent"
          }
        `}
      >
        {checked && (
          <Check className="h-3.5 w-3.5 text-white" />
        )}
      </button>

      <span className="text-sm leading-6 text-ink-dim">
        {children}
      </span>
    </label>
  );
}