"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const sessionFormats = [
  "Keynote",
  "Panel",
  "Fireside chat",
  "Practitioner case study",
  "Simulation / live demo",
  "Open to recommendation",
];

const agendaThemes = [
  "AI accountability",
  "DPDP and AI",
  "RBI / SEBI / IRDAI regulation",
  "Model risk",
  "GCC governance",
  "AI security",
  "Human oversight",
  "BFSI",
  "Healthcare",
  "Other",
];

const initialForm = {
  nomineeName: "",
  currentTitle: "",
  organisation: "",
  email: "",
  phone: "",
  linkedin: "",
  nominatedBy: "",
  sessionFormat: "",
  agendaTheme: "",
  proposedTopic: "",
  biography: "",
  experience: "",
  profileLink: "",
  consent: false,
};

export default function SpeakerNomination() {
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
    console.log("Speaker nomination:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="speaker-nomination"
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
            Nomination received
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-4xl font-medium tracking-tight text-ink md:text-5xl"
          >
            Thank you for your nomination.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-ink-dim md:text-lg"
          >
            The content team will review it and contact the nominee or
            nominator if there is a suitable opportunity.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-6 text-ink-dim/70"
          >
            Submission does not guarantee a speaking opportunity.
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="speaker-nomination"
      className="relative overflow-hidden bg-void px-6 py-24 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="field-grid absolute inset-0 opacity-30" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#3E6BFF]/8 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3E6BFF]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label-tag">
              Speaker nomination / speaker interest
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Bring the
              <br />
              insight to stage.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-ink-dim md:text-lg">
              Bring regulatory, risk, governance, security or practitioner
              insight to the stage.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-ink-dim/80">
              Nominate yourself or a leader whose experience can move the AI
              accountability conversation forward.
            </p>

            {/* Event information */}
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

            {/* Speaking note */}
            <div className="mt-8 border-l border-[#3E6BFF]/50 pl-5">
              <p className="text-sm leading-6 text-ink-dim">
                We are looking for practitioners and leaders with real-world
                perspectives on governing, securing and responsibly deploying
                AI.
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
            {/* 01 — NOMINEE */}
            <FormSection
              number="01"
              title="Nominee details"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                label="Nominee full name"
                required
                value={form.nomineeName}
                onChange={(value) =>
                  updateField("nomineeName", value)
                }
              />

              <Input
                label="Current title"
                required
                value={form.currentTitle}
                onChange={(value) =>
                  updateField("currentTitle", value)
                }
              />

              <Input
                label="Organisation"
                required
                value={form.organisation}
                onChange={(value) =>
                  updateField("organisation", value)
                }
              />

              <Input
                label="Professional email"
                type="email"
                required
                value={form.email}
                onChange={(value) =>
                  updateField("email", value)
                }
              />

              <Input
                label="Phone number"
                type="tel"
                value={form.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
              />

              <Input
                label="LinkedIn profile"
                type="url"
                placeholder="https://linkedin.com/in/..."
                value={form.linkedin}
                onChange={(value) =>
                  updateField("linkedin", value)
                }
              />

              <div className="sm:col-span-2">
                <Input
                  label="Nominated by"
                  helper="Complete if submitting on behalf of someone else."
                  value={form.nominatedBy}
                  onChange={(value) =>
                    updateField("nominatedBy", value)
                  }
                />
              </div>
            </div>

            {/* 02 — SESSION */}
            <div className="mt-14">
              <FormSection
                number="02"
                title="Speaking opportunity"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Select
                  label="Proposed session format"
                  required
                  options={sessionFormats}
                  value={form.sessionFormat}
                  onChange={(value) =>
                    updateField("sessionFormat", value)
                  }
                />

                <Select
                  label="Relevant agenda theme"
                  required
                  options={agendaThemes}
                  value={form.agendaTheme}
                  onChange={(value) =>
                    updateField("agendaTheme", value)
                  }
                />
              </div>
            </div>

            {/* 03 — TOPIC */}
            <div className="mt-14">
              <FormSection
                number="03"
                title="Point of view"
              />

              <div className="space-y-7">
                <Textarea
                  label="Proposed topic or point of view"
                  required
                  helper="Share a working title and the key insight the speaker would bring."
                  rows={6}
                  value={form.proposedTopic}
                  onChange={(value) =>
                    updateField("proposedTopic", value)
                  }
                />

                <Textarea
                  label="Short biography"
                  required
                  helper="Suggested length: 100–150 words."
                  rows={7}
                  value={form.biography}
                  onChange={(value) =>
                    updateField("biography", value)
                  }
                />

                <Textarea
                  label="Relevant experience / credentials"
                  rows={5}
                  value={form.experience}
                  onChange={(value) =>
                    updateField("experience", value)
                  }
                />

                <Input
                  label="Profile or headshot link"
                  type="url"
                  placeholder="https://..."
                  value={form.profileLink}
                  onChange={(value) =>
                    updateField("profileLink", value)
                  }
                />
              </div>
            </div>

            {/* 04 — CONSENT */}
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
                I confirm that the nominee may be contacted regarding this
                submission, or that I am submitting my own details.
                <span className="ml-1 text-[#3E6BFF]">*</span>
              </Checkbox>
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
                  md:min-w-[300px]
                "
              >
                <span>Submit Speaker Nomination</span>

                <span className="ml-8 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="mt-4 max-w-xl text-xs leading-5 text-ink-dim">
                Submission does not guarantee a speaking opportunity. The
                content team will review the submission and contact the
                nominee or nominator where there is a suitable opportunity.
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
        onChange={(e) => onChange(e.target.value)}
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
          <span className="ml-1 text-[#3E6BFF]">
            *
          </span>
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