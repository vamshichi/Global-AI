
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const hearAboutOptions = [
  "LinkedIn",
  "Social Media",
  "Email Invitation",
  "Colleague / Peer",
  "Event Website",
  "Other",
];

const initialForm = {
  fullName: "",
  organisation: "",
  jobTitle: "",
  email: "",
  phoneNumber: "",
  heardFrom: "",
  referralCode: "",
  agreeTerms: false,
  marketingConsent: false,
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

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!form.agreeTerms) {
      setErrorMessage(
        "Please accept the Terms and Conditions."
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/delegate-registration",
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
          result.message ||
            "Registration failed. Please try again."
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
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#3E6BFF]/40 bg-[#3E6BFF]/10"
          >
            <Check className="h-7 w-7 text-[#3E6BFF]" />
          </motion.div>

          <h2 className="mt-8 text-4xl font-medium text-ink">
            Thank you for registering.
          </h2>

          <p className="mt-6 text-base leading-7 text-ink-dim">
            Your registration has been received.
            Our team will contact you with further details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-void px-6 py-16 lg:px-12 lg:py-4"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-30" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#3E6BFF]/8 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3E6BFF]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          {/* <p className="label-tag">
            Delegate invitation
          </p> */}

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            Delegate Registration
          </h2>
        </div>

        {/* Registration Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="border border-line bg-white/[0.025] p-6 backdrop-blur-xl md:p-10"
        >

          {/* Input Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <Input
              label="Full Name"
              required
              value={form.fullName}
              onChange={(value) =>
                updateField("fullName", value)
              }
            />

            <Input
              label="Company / Organisation"
              required
              value={form.organisation}
              onChange={(value) =>
                updateField("organisation", value)
              }
            />

            <Input
              label="Job Title"
              required
              value={form.jobTitle}
              onChange={(value) =>
                updateField("jobTitle", value)
              }
            />

            <Input
              label="Email (Work Email Only)"
              type="email"
              required
              value={form.email}
              onChange={(value) =>
                updateField("email", value)
              }
            />

            <Input
              label="🇮🇳 +91 Phone Number"
              type="tel"
              required
              value={form.phoneNumber}
              onChange={(value) =>
                updateField("phoneNumber", value)
              }
            />

            {/* How did you hear */}
            <div>
              <select
                required
                value={form.heardFrom}
                onChange={(e) =>
                  updateField("heardFrom", e.target.value)
                }
                className="w-full border border-line bg-void px-4 py-3.5 text-sm text-ink outline-none transition focus:border-[#3E6BFF]"
              >
                <option value="" disabled>
                  Where did you hear about us?*
                </option>

                {hearAboutOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Referral Code */}
            <Input
              label="Referral Code (if any)"
              value={form.referralCode}
              onChange={(value) =>
                updateField("referralCode", value)
              }
            />

          </div>

          {/* Terms and Conditions */}
          <div className="mt-8 space-y-5">

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                checked={form.agreeTerms}
                onChange={(e) =>
                  updateField(
                    "agreeTerms",
                    e.target.checked
                  )
                }
                className="mt-1 h-4 w-4 shrink-0 accent-[#3E6BFF]"
              />

              <span className="text-sm leading-6 text-ink-dim">
                I have read and agree to the{" "}
                <a
                  href="#terms"
                  className="text-[#3E6BFF] underline"
                >
                  Terms and Conditions
                </a>
                .
                <span className="text-[#3E6BFF]">*</span>
              </span>
            </label>

            {/* Marketing Consent */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.marketingConsent}
                onChange={(e) =>
                  updateField(
                    "marketingConsent",
                    e.target.checked
                  )
                }
                className="mt-1 h-4 w-4 shrink-0 accent-[#3E6BFF]"
              />

              <span className="text-sm leading-6 text-ink-dim">
                I agree to receive updates about future
                events and marketing. I also consent to my
                information being shared with selected
                third parties and participants to enhance
                the event experience.
              </span>
            </label>

          </div>

          {/* Error Message */}
          {errorMessage && (
            <p
              role="alert"
              className="mt-5 text-sm text-red-500"
            >
              {errorMessage}
            </p>
          )}

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={!form.agreeTerms || isSubmitting}
              className="
                group flex min-w-[200px] items-center
                justify-center gap-5
                bg-ink px-8 py-4 text-sm font-medium
                uppercase tracking-[0.12em] text-void
                transition-all hover:bg-[#3E6BFF]
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
            >
              {isSubmitting
                ? "Submitting..."
                : "Submit"}

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-ink-dim">
            Your information will be used for delegate
            registration and event-related communication.
          </p>

        </motion.form>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */

function Input({
  label,
  value,
  onChange,
  required = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={label + (required ? "*" : "")}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full border border-line bg-transparent
          px-4 py-3.5 text-sm text-ink outline-none
          placeholder:text-ink-dim/60
          transition focus:border-[#3E6BFF]
        "
      />
    </div>
  );
}
