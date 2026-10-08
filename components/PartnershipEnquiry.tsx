"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const organisationTypes = [
  "Cybersecurity",
  "Cloud / Hyperscaler",
  "GRC / Privacy Platform",
  "Consulting / Big Four",
  "IT Services",
  "AI Governance / Security Startup",
  "Certification / Assurance",
  "Other",
];

const partnershipOptions = [
  "Founding partner",
  "Strategic partner",
  "Sponsorship",
  "Exhibition",
  "Thought leadership",
  "Custom package",
  "Not sure",
];

const budgetRanges = [
  "Prefer not to say",
  "Under ₹5 Lakhs",
  "₹5–10 Lakhs",
  "₹10–25 Lakhs",
  "₹25–50 Lakhs",
  "₹50 Lakhs+",
  "To be discussed",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  website: "",
  organisationType: "",
  partnershipInterest: "",
  targetAudience: "",
  meetingObjectives: "",
  budgetRange: "",
  additionalRequirements: "",
  consent: false,
};

export default function PartnershipEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof typeof initialForm,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.consent) return;

    // Connect your API here.
    console.log("Partnership enquiry:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="partnership"
        className="relative overflow-hidden bg-void px-6 py-24 lg:px-12 lg:py-32"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="field-grid absolute inset-0 opacity-30" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E6BFF]/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#3E6BFF]/40
              bg-[#3E6BFF]/10
            "
          >
            <Check className="h-7 w-7 text-[#3E6BFF]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-8
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#3E6BFF]
            "
          >
            Enquiry received
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-4
              text-4xl
              font-medium
              tracking-tight
              text-ink
              md:text-5xl
            "
          >
            Thank you for your interest.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-ink-dim
              md:text-lg
            "
          >
            Our partnerships team will contact you to understand your
            objectives and discuss suitable opportunities.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="partnership"
      className="
        relative
        overflow-hidden
        bg-void
        px-6
        py-24
        lg:px-12
        lg:py-32
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-30" />

        <div
          className="
            absolute
            -right-40
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3E6BFF]/8
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#3E6BFF]/5
            blur-[130px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label-tag">
              Sponsorship / founding-partner enquiry
            </p>

            <h2
              className="
                mt-6
                max-w-xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-tight
                text-ink
                md:text-5xl
                lg:text-6xl
              "
            >
              Put your
              <br />
              organisation in
              <br />
              the room.
            </h2>

            <p
              className="
                mt-7
                max-w-lg
                text-base
                leading-7
                text-ink-dim
                md:text-lg
              "
            >
              Position your organisation at the centre of India’s emerging
              AI governance, risk and compliance conversation.
            </p>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-ink-dim/80
              "
            >
              Connect with senior buyers across BFSI, GCCs, technology,
              cybersecurity and regulated industries.
            </p>

            {/* EVENT INFO */}
            <div className="mt-10 border-t border-line pt-6">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-ink-dim
                "
              >
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

            {/* VALUE POINTS */}
            <div className="mt-8 space-y-4">
              <ValuePoint>
                Meet senior decision-makers and technology leaders.
              </ValuePoint>

              <ValuePoint>
                Explore strategic partnership and thought-leadership
                opportunities.
              </ValuePoint>

              <ValuePoint>
                Build targeted conversations around AI governance,
                risk and security.
              </ValuePoint>
            </div>
          </div>

          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              border
              border-line
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              md:p-8
              lg:p-10
            "
          >
            {/* ================================================= */}
            {/* 01 — CONTACT */}
            {/* ================================================= */}

            <FormSection
              number="01"
              title="Your details"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Full name"
                required
                value={form.fullName}
                onChange={(value) =>
                  updateField("fullName", value)
                }
              />

              <Input
                label="Business email"
                type="email"
                required
                helper="Use your professional email address."
                value={form.email}
                onChange={(value) =>
                  updateField("email", value)
                }
              />

              <Input
                label="Phone number"
                type="tel"
                required
                helper="Include country code."
                value={form.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
              />

              <Input
                label="Job title"
                required
                value={form.jobTitle}
                onChange={(value) =>
                  updateField("jobTitle", value)
                }
              />

              <Input
                label="Company"
                required
                value={form.company}
                onChange={(value) =>
                  updateField("company", value)
                }
              />

              <Input
                label="Company website"
                type="url"
                placeholder="https://company.com"
                value={form.website}
                onChange={(value) =>
                  updateField("website", value)
                }
              />
            </div>

            {/* ================================================= */}
            {/* 02 — PARTNERSHIP */}
            {/* ================================================= */}

            <div className="mt-14">
              <FormSection
                number="02"
                title="Partnership"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Select
                  label="Organisation type"
                  required
                  options={organisationTypes}
                  value={form.organisationType}
                  onChange={(value) =>
                    updateField(
                      "organisationType",
                      value
                    )
                  }
                />

                <Select
                  label="Partnership interest"
                  required
                  options={partnershipOptions}
                  value={form.partnershipInterest}
                  onChange={(value) =>
                    updateField(
                      "partnershipInterest",
                      value
                    )
                  }
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* 03 — OBJECTIVES */}
            {/* ================================================= */}

            <div className="mt-14">
              <FormSection
                number="03"
                title="Objectives"
              />

              <div className="space-y-7">
                <Textarea
                  label="Target audience / buyer roles"
                  helper="Who would you most like to meet?"
                  rows={5}
                  value={form.targetAudience}
                  onChange={(value) =>
                    updateField(
                      "targetAudience",
                      value
                    )
                  }
                />

                <Textarea
                  label="Meeting objectives"
                  helper="Describe priority accounts, named buyers or business outcomes. 1:1 meetings are subject to mutually agreed availability and confirmation."
                  rows={6}
                  value={form.meetingObjectives}
                  onChange={(value) =>
                    updateField(
                      "meetingObjectives",
                      value
                    )
                  }
                />

                <Select
                  label="Budget range"
                  helper="Optional; configure ranges after commercial packages are finalised."
                  options={budgetRanges}
                  value={form.budgetRange}
                  onChange={(value) =>
                    updateField(
                      "budgetRange",
                      value
                    )
                  }
                />

                <Textarea
                  label="Additional requirements"
                  rows={5}
                  value={form.additionalRequirements}
                  onChange={(value) =>
                    updateField(
                      "additionalRequirements",
                      value
                    )
                  }
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* 04 — CONSENT */}
            {/* ================================================= */}

            <div className="mt-14">
              <FormSection
                number="04"
                title="Confirmation"
              />

              <Checkbox
                checked={form.consent}
                onChange={(checked) =>
                  updateField("consent", checked)
                }
              >
                I agree to be contacted by the summit partnerships
                team about this enquiry.
                <span className="ml-1 text-[#3E6BFF]">
                  *
                </span>
              </Checkbox>
            </div>

            {/* ================================================= */}
            {/* SUBMIT */}
            {/* ================================================= */}

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
                  md:min-w-[330px]
                "
              >
                <span>
                  Request a Partnership Discussion
                </span>

                <span
                  className="
                    ml-8
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>

              <p className="mt-4 max-w-xl text-xs leading-5 text-ink-dim">
                By submitting this form, you agree to be contacted
                by the summit partnerships team regarding this
                enquiry.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ================================================= */
/* FORM SECTION */
/* ================================================= */

function FormSection({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div
      className="
        mb-8
        flex
        items-center
        gap-4
        border-b
        border-line
        pb-4
      "
    >
      <span
        className="
          text-xs
          font-medium
          tracking-[0.15em]
          text-[#3E6BFF]
        "
      >
        {number}
      </span>

      <h3 className="text-lg font-medium text-ink">
        {title}
      </h3>
    </div>
  );
}

/* ================================================= */
/* INPUT */
/* ================================================= */

function Input({
  label,
  value,
  onChange,
  required = false,
  helper,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  helper?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}

        {required && (
          <span className="ml-1 text-[#3E6BFF]">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
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
          placeholder:text-ink-dim/35
          transition
          focus:border-[#3E6BFF]
        "
      />

      {helper && (
        <p className="mt-2 text-xs leading-5 text-ink-dim">
          {helper}
        </p>
      )}
    </div>
  );
}

/* ================================================= */
/* TEXTAREA */
/* ================================================= */

function Textarea({
  label,
  value,
  onChange,
  required = false,
  helper,
  rows = 5,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  helper?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}

        {required && (
          <span className="ml-1 text-[#3E6BFF]">
            *
          </span>
        )}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        required={required}
        className="
          w-full
          resize-y
          border
          border-line
          bg-transparent
          px-4
          py-3.5
          text-sm
          leading-6
          text-ink
          outline-none
          placeholder:text-ink-dim/35
          transition
          focus:border-[#3E6BFF]
        "
      />

      {helper && (
        <p className="mt-2 text-xs leading-5 text-ink-dim">
          {helper}
        </p>
      )}
    </div>
  );
}

/* ================================================= */
/* SELECT */
/* ================================================= */

function Select({
  label,
  value,
  onChange,
  options,
  required = false,
  helper,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  helper?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">
        {label}

        {required && (
          <span className="ml-1 text-[#3E6BFF]">
            *
          </span>
        )}
      </label>

      <div className="relative">
        <select
          required={required}
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className="
            w-full
            appearance-none
            border
            border-line
            bg-transparent
            px-4
            py-3.5
            pr-10
            text-sm
            text-ink
            outline-none
            transition
            focus:border-[#3E6BFF]
          "
        >
          <option
            value=""
            className="bg-[#0b0d12]"
          >
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

        <ChevronDown
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-ink-dim
          "
        />
      </div>

      {helper && (
        <p className="mt-2 text-xs leading-5 text-ink-dim">
          {helper}
        </p>
      )}
    </div>
  );
}

/* ================================================= */
/* CHECKBOX */
/* ================================================= */

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
        onClick={() =>
          onChange(!checked)
        }
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

/* ================================================= */
/* VALUE POINT */
/* ================================================= */

function ValuePoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#3E6BFF]" />

      <p className="text-sm leading-6 text-ink-dim">
        {children}
      </p>
    </div>
  );
}