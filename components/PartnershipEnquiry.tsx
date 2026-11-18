
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const sponsorInterests = [
  "Exhibitor Booth",
  "Thought Leadership / Speaking Slots",
  "Logo & Branding",
  "One-to-One Meetings",
  "Workshops / Hackathons",
];

const sponsorLevels = [
  "Title Partner",
  "Platinum Partner",
  "Gold Partner",
  "Silver Partner",
  "Exhibitor Partner",
];

const initialForm = {
  fullName: "",
  companyName: "",
  title: "",
  phone: "",
  businessEmail: "",
  companyWebsite: "",
  sponsorInterest: [] as string[],
  sponsorLevel: [] as string[],
  sponsorObjectives: "",
};

export default function PartnershipEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (
    field: keyof typeof initialForm,
    value: string | string[]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleOption = (
    field: "sponsorInterest" | "sponsorLevel",
    option: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(option)
        ? prev[field].filter((item) => item !== option)
        : [...prev[field], option],
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/partnership-enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit your enquiry."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* SUCCESS MESSAGE */

  if (submitted) {
    return (
      <section className="bg-void px-5 py-16 text-center">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#3E6BFF]/40 bg-[#3E6BFF]/10">
            <Check className="h-7 w-7 text-[#3E6BFF]" />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#3E6BFF]">
            Enquiry Received
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink md:text-4xl">
            Thank you for your interest.
          </h2>

          <p className="mt-5 text-sm leading-7 text-ink-dim">
            Our sponsorship team will contact you shortly
            to discuss the partnership opportunities.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-void px-4 py-12 sm:px-6 md:py-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-20" />

        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#3E6BFF]/8 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#3E6BFF]/5 blur-[130px]" />
      </div>

      {/* Compact Main Container */}
      <div className="relative mx-auto w-full max-w-xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center"
        >
          <p className="label-tag">
            Sponsorship Enquiry
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Become a Sponsor
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-dim">
            Tell us about your organisation and explore
            sponsorship opportunities at the AI GRCS
            Summit India 2027.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full border border-line bg-white/[0.025] p-5 backdrop-blur-xl sm:p-6 md:p-8"
        >

          {/* Personal Details */}
          <FormHeading title="Your Details" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <Input
              label="Full Name"
              value={form.fullName}
              onChange={(value) =>
                updateField("fullName", value)
              }
              required
            />

            <Input
              label="Company Name"
              value={form.companyName}
              onChange={(value) =>
                updateField("companyName", value)
              }
              required
            />

            <Input
              label="Job Title"
              value={form.title}
              onChange={(value) =>
                updateField("title", value)
              }
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(value) =>
                updateField("phone", value)
              }
              required
            />

            <Input
              label="Business Email"
              type="email"
              value={form.businessEmail}
              onChange={(value) =>
                updateField("businessEmail", value)
              }
              required
            />

            <Input
              label="Company Website"
              type="url"
              placeholder="https://company.com"
              value={form.companyWebsite}
              onChange={(value) =>
                updateField("companyWebsite", value)
              }
            />

          </div>

          {/* Sponsor Interest */}
          <div className="mt-8">
            <FormHeading title="Sponsor Interest" />

            <p className="mb-4 text-xs leading-5 text-ink-dim">
              Select the sponsorship opportunities you
              are interested in. You can choose multiple.
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {sponsorInterests.map((option) => (
                <CheckboxOption
                  key={option}
                  label={option}
                  checked={form.sponsorInterest.includes(option)}
                  onChange={() =>
                    toggleOption("sponsorInterest", option)
                  }
                />
              ))}
            </div>
          </div>

          {/* Sponsor Level Dropdown */}
          <div className="mt-8">
            <FormHeading title="Sponsor Level" />

            <p className="mb-4 text-xs leading-5 text-ink-dim">
              Select your preferred sponsorship level.
            </p>

            <select
              value={form.sponsorLevel[0] || ""}
              onChange={(e) =>
                updateField(
                  "sponsorLevel",
                  e.target.value ? [e.target.value] : []
                )
              }
              required
              className="
                w-full appearance-none
                border border-line bg-void
                px-4 py-3.5 text-sm text-ink
                outline-none transition
                focus:border-[#3E6BFF]
              "
            >
              <option value="" disabled>
                Select Sponsor Level*
              </option>

              {sponsorLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Sponsor Objectives */}
          <div className="mt-8">
            <FormHeading title="Sponsor Objectives" />

            <textarea
              rows={3}
              value={form.sponsorObjectives}
              onChange={(e) =>
                updateField(
                  "sponsorObjectives",
                  e.target.value
                )
              }
              placeholder="Tell us about your sponsorship objectives..."
              className="
                w-full resize-y
                border border-line bg-transparent
                px-4 py-3 text-sm leading-6 text-ink
                outline-none transition
                placeholder:text-ink-dim/40
                focus:border-[#3E6BFF]
              "
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p
              role="alert"
              className="mt-5 text-sm text-red-400"
            >
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <div className="mt-7 border-t border-line pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                group flex w-full items-center
                justify-between
                bg-ink px-5 py-3.5
                text-sm font-medium uppercase
                tracking-[0.12em] text-void
                transition hover:bg-[#3E6BFF]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <span>
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Enquiry"}
              </span>

              <ArrowRight className="ml-6 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </motion.form>
      </div>
    </section>
  );
}

/* FORM HEADING */

function FormHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-4 border-b border-line pb-3">
      <h3 className="text-base font-medium text-ink">
        {title}
      </h3>
    </div>
  );
}

/* INPUT COMPONENT */

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="min-w-0">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label + (required ? "*" : "")}
        required={required}
        className="
          w-full min-w-0
          border border-line bg-transparent
          px-3.5 py-3 text-sm text-ink
          outline-none transition
          placeholder:text-ink-dim/50
          focus:border-[#3E6BFF]
        "
      />
    </div>
  );
}

/* MULTI-SELECT CHECKBOX */

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className={`
        flex min-w-0 cursor-pointer
        items-center gap-2.5
        border px-3 py-3 text-xs
        transition
        ${
          checked
            ? "border-[#3E6BFF] bg-[#3E6BFF]/10 text-ink"
            : "border-line text-ink-dim hover:border-[#3E6BFF]/50"
        }
      `}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`
          flex h-4 w-4 shrink-0
          items-center justify-center
          border transition
          ${
            checked
              ? "border-[#3E6BFF] bg-[#3E6BFF]"
              : "border-line"
          }
        `}
      >
        {checked && (
          <Check className="h-3 w-3 text-white" />
        )}
      </span>

      <span>{label}</span>
    </label>
  );
}
