
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const solutionOptions = [
  "AI Governance",
  "AI Security",
  "Cybersecurity",
  "Enterprise IT Security",
  "IT Audit & Assurance",
  "GRC Solutions",
  "Regulatory & Compliance Audits",
  "Model Risk",
  "Data Privacy/DPDP Compliance",
  "Agentic AI",
  "Others",
];

const hearAboutOptions = [
  "Scrolled through the event page",
  "LinkedIn",
  "Received an Email Invitation",
  "Referred by your colleague / Peer",
  "Heard from one of our friendly agents",
  "Social Media",
  "Others",
];

const initialForm = {
  firstName: "",
  lastName: "",
  title: "",
  organisation: "",
  solutionsInterestedIn: [] as string[],
  heardFrom: "",
  confirmation: false,
};

export default function DelegateRegistration() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (
    field: string,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleSolution = (solution: string) => {
    setForm((prev) => ({
      ...prev,
      solutionsInterestedIn: prev.solutionsInterestedIn.includes(solution)
        ? prev.solutionsInterestedIn.filter((item) => item !== solution)
        : [...prev.solutionsInterestedIn, solution],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!form.confirmation) {
      setErrorMessage("Please confirm your agreement before submitting.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/delegate-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
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
            Thank you for your interest in AI GRCS Summit India 2027.
            Our team will review your details and contact you with the
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

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="label-tag">
            Delegate invitation
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Be part of the conversation.
          </h2>

          <p className="mt-6 text-base leading-7 text-ink-dim md:text-lg">
            Share your details and areas of interest to express your
            interest in attending AI GRCS Summit India 2027.
          </p>

          <p className="mt-4 text-sm text-ink-dim">
            21 January 2027 · Mumbai, India
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="border border-line bg-white/[0.025] p-6 backdrop-blur-xl md:p-10"
        >
          {/* Personal details */}
          <FormSection
            number="01"
            title="Your details"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label="First Name"
              required
              value={form.firstName}
              onChange={(value) => updateField("firstName", value)}
            />

            <Input
              label="Last Name"
              required
              value={form.lastName}
              onChange={(value) => updateField("lastName", value)}
            />

            <Input
              label="Title"
              required
              placeholder="Your professional designation"
              value={form.title}
              onChange={(value) => updateField("title", value)}
            />

            <Input
              label="Organisation"
              required
              placeholder="Your organisation name"
              value={form.organisation}
              onChange={(value) => updateField("organisation", value)}
            />
          </div>

          {/* Solutions */}
          <div className="mt-14">
            <FormSection
              number="02"
              title="Solutions interested in"
            />

            <p className="mb-5 text-sm leading-6 text-ink-dim">
              Select the areas that align with your professional
              interests. You can choose more than one.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {solutionOptions.map((solution) => {
                const selected =
                  form.solutionsInterestedIn.includes(solution);

                return (
                  <button
                    key={solution}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => toggleSolution(solution)}
                    className={`
                      flex min-h-12 items-center gap-3 border px-4 py-3
                      text-left text-sm transition-all
                      ${
                        selected
                          ? "border-[#3E6BFF] bg-[#3E6BFF]/10 text-ink"
                          : "border-line bg-transparent text-ink-dim hover:border-ink/40 hover:text-ink"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-5 w-5 shrink-0 items-center justify-center
                        border transition-all
                        ${
                          selected
                            ? "border-[#3E6BFF] bg-[#3E6BFF]"
                            : "border-line"
                        }
                      `}
                    >
                      {selected && (
                        <Check className="h-3.5 w-3.5 text-white" />
                      )}
                    </span>

                    {solution}
                  </button>
                );
              })}
            </div>
          </div>

          {/* How did you hear */}
          <div className="mt-14">
            <FormSection
              number="03"
              title="How did you hear about the summit?"
            />

            <p className="mb-5 text-sm leading-6 text-ink-dim">
              Please select one option.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {hearAboutOptions.map((option) => {
                const selected = form.heardFrom === option;

                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => updateField("heardFrom", option)}
                    className={`
                      flex min-h-12 items-center gap-3 border px-4 py-3
                      text-left text-sm transition-all
                      ${
                        selected
                          ? "border-[#3E6BFF] bg-[#3E6BFF]/10 text-ink"
                          : "border-line bg-transparent text-ink-dim hover:border-ink/40 hover:text-ink"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-5 w-5 shrink-0 items-center justify-center
                        rounded-full border transition-all
                        ${
                          selected
                            ? "border-[#3E6BFF]"
                            : "border-line"
                        }
                      `}
                    >
                      {selected && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#3E6BFF]" />
                      )}
                    </span>

                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Confirmation */}
          <div className="mt-14">
            <FormSection
              number="04"
              title="Confirmation"
            />

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.confirmation}
                onChange={(e) =>
                  updateField("confirmation", e.target.checked)
                }
                className="mt-1 h-4 w-4 shrink-0 accent-[#3E6BFF]"
              />

              <span className="text-sm leading-6 text-ink-dim">
                I confirm that the information provided is accurate
                and agree to be contacted by the AI GRCS Summit India
                team regarding my delegate invitation and event-related
                updates.
                <span className="ml-1 text-[#3E6BFF]">*</span>
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="mt-10 border-t border-line pt-8">
            {errorMessage && (
              <p
                role="alert"
                className="mb-4 text-sm text-red-500"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={!form.confirmation || isSubmitting}
              className="
                group flex w-full items-center justify-between
                bg-ink px-6 py-4 text-sm font-medium uppercase
                tracking-[0.12em] text-void transition-all
                hover:bg-[#3E6BFF] disabled:cursor-not-allowed
                disabled:opacity-40 md:w-auto md:min-w-[280px]
              "
            >
              <span>
                {isSubmitting
                  ? "Submitting..."
                  : "Submit"}
              </span>

              <span className="ml-8 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mt-4 max-w-xl text-xs leading-5 text-ink-dim">
              Your details will be used by the summit team to review
              and process your delegate invitation.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

/* FORM SECTION */

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

/* INPUT */

function Input({
  label,
  value,
  onChange,
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-[#3E6BFF]">*</span>
        )}
      </label>

      <input
        type="text"
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full border border-line bg-transparent
          px-4 py-3.5 text-sm text-ink outline-none
          placeholder:text-ink-dim/40 transition
          focus:border-[#3E6BFF]
        "
      />
    </div>
  );
}
