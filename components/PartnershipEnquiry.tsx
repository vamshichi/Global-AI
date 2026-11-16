
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/partnership-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

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

  if (submitted) {
    return (
      <section className="bg-void px-6 py-24 text-center">
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
            Our sponsorship team will contact you shortly to discuss
            the partnership opportunities.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="partnership"
      className="relative overflow-hidden bg-void px-5 py-16 sm:px-8 md:py-24 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-20" />

        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#3E6BFF]/8 blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#3E6BFF]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="label-tag">
            Sponsorship Enquiry
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
            Become a Sponsor
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink-dim">
            Tell us about your organisation and explore sponsorship
            opportunities at the AI GRCS Summit India 2027.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-line bg-white/[0.025] p-5 backdrop-blur-xl sm:p-8 md:p-10"
        >
          {/* Personal and Company Details */}
          <FormHeading title="Your Details" />

          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label="Full Name"
              value={form.fullName}
              onChange={(value) => updateField("fullName", value)}
              required
            />

            <Input
              label="Company Name"
              value={form.companyName}
              onChange={(value) => updateField("companyName", value)}
              required
            />

            <Input
              label="Title"
              value={form.title}
              onChange={(value) => updateField("title", value)}
              required
            />

            <Input
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(value) => updateField("phone", value)}
              required
            />

            <Input
              label="Business Email"
              type="email"
              value={form.businessEmail}
              onChange={(value) => updateField("businessEmail", value)}
              required
            />

            <Input
              label="Company Website"
              type="url"
              placeholder="https://company.com"
              value={form.companyWebsite}
              onChange={(value) => updateField("companyWebsite", value)}
            />
          </div>

          {/* Sponsor Interest */}
          <div className="mt-12">
            <FormHeading title="Sponsor Interest" />

            <p className="mb-5 text-sm text-ink-dim">
              Select the sponsorship opportunities you are interested in.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {sponsorInterests.map((option) => (
                <CheckboxOption
                  key={option}
                  label={option}
                  checked={form.sponsorInterest.includes(option)}
                  onChange={() => toggleOption("sponsorInterest", option)}
                />
              ))}
            </div>
          </div>

          {/* Sponsor Level */}
          <div className="mt-12">
            <FormHeading title="Sponsor Level" />

            <p className="mb-5 text-sm text-ink-dim">
              Select the sponsorship level you are interested in.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {sponsorLevels.map((option) => (
                <CheckboxOption
                  key={option}
                  label={option}
                  checked={form.sponsorLevel.includes(option)}
                  onChange={() => toggleOption("sponsorLevel", option)}
                />
              ))}
            </div>
          </div>

          {/* Sponsor Objectives */}
          <div className="mt-12">
            <FormHeading title="Sponsor Objectives" />

            <textarea
              rows={5}
              value={form.sponsorObjectives}
              onChange={(e) =>
                updateField("sponsorObjectives", e.target.value)
              }
              placeholder="Tell us about your sponsorship objectives..."
              className="w-full resize-y border border-line bg-transparent px-4 py-3.5 text-sm leading-6 text-ink outline-none transition placeholder:text-ink-dim/40 focus:border-[#3E6BFF]"
            />
          </div>

          {/* Error */}
          {errorMessage && (
            <p role="alert" className="mt-6 text-sm text-red-400">
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <div className="mt-10 border-t border-line pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-between bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.12em] text-void transition hover:bg-[#3E6BFF] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[280px]"
            >
              <span>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </span>

              <ArrowRight className="ml-6 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* Form Heading */
function FormHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-line pb-4">
      <h3 className="text-lg font-medium text-ink">
        {title}
      </h3>
    </div>
  );
}

/* Input */
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
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-[#3E6BFF]">*</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full border border-line bg-transparent px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink-dim/40 focus:border-[#3E6BFF]"
      />
    </div>
  );
}

/* Multi-select Checkbox */
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
      className={`flex cursor-pointer items-center gap-3 border p-4 text-sm transition ${
        checked
          ? "border-[#3E6BFF] bg-[#3E6BFF]/10 text-ink"
          : "border-line text-ink-dim hover:border-[#3E6BFF]/50"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center border transition ${
          checked
            ? "border-[#3E6BFF] bg-[#3E6BFF]"
            : "border-line"
        }`}
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" />}
      </span>

      <span>{label}</span>
    </label>
  );
}
