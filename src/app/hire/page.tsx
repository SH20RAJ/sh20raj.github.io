"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { monetization } from "@/data/monetization";
import { Check, ArrowRightIcon, Loader2, AlertCircle } from "lucide-react";

const projectTypes = [
  "Landing page",
  "SaaS MVP / dashboard",
  "AI tool / automation",
  "Agency overflow / sprint",
  "Bug fix / small task",
  "Other",
];

const budgets = ["Under $300", "$300 – $1,000", "$1,000 – $5,000", "$5,000+", "Not sure yet"];
const timelines = ["This week", "Within 2 weeks", "This month", "Flexible"];

type Status = "idle" | "submitting" | "success" | "error";

export default function HirePage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!monetization.web3formsAccessKey) {
      const formData = new FormData(e.currentTarget);
      const lines = Array.from(formData.entries())
        .filter(([k]) => k !== "access_key")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:sh20raj@gmail.com?subject=Project%20brief&body=${encodeURIComponent(lines)}`;
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email me directly at sh20raj@gmail.com.");
    }
  }

  if (status === "success") {
    return (
      <main className="flex flex-col min-h-[60dvh] items-center justify-center px-6 pb-16">
        <div className="max-w-md w-full text-center space-y-4">
          <Check className="size-8 text-foreground mx-auto" />
          <h1 className="text-xl font-bold tracking-tight">Brief received</h1>
          <p className="text-sm text-muted-foreground">
            I&apos;ll review and reply within 24 hours.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="https://linkedin.com/in/sh20raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              LinkedIn
            </a>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="py-10 border-b border-border">
        <div className="mx-auto w-full max-w-2xl px-6">
          <h1 className="text-xl font-bold tracking-tight">
            Tell me about your project
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            I respond within 24 hours with a fixed quote and timeline.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Prefer a call?{" "}
            <Link href="/book" className="text-foreground underline underline-offset-4 hover:text-muted-foreground">
              Book a 15-min slot
            </Link>
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-2xl px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input type="hidden" name="access_key" value={monetization.web3formsAccessKey} />
            <input type="hidden" name="subject" value="New project brief from sh20raj.github.io" />
            <input type="hidden" name="from_name" value="sh20raj.github.io" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" required type="text" placeholder="Jane Doe" />
              <Field label="Email" name="email" required type="email" placeholder="you@company.com" />
            </div>
            <Field label="Company (optional)" name="company" type="text" placeholder="Acme Inc." />

            <RadioGroup label="Project type" name="project_type" options={projectTypes} required />
            <RadioGroup label="Budget" name="budget" options={budgets} required />
            <RadioGroup label="Timeline" name="timeline" options={timelines} required />

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Brief <span className="text-destructive">*</span>
              </label>
              <textarea
                name="brief"
                required
                rows={5}
                placeholder="What you're building, the goal, links to references, and anything else I should know."
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
                <AlertCircle className="size-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send brief <ArrowRightIcon className="size-3.5" />
                </>
              )}
            </button>

            <p className="text-xs text-muted-foreground pt-2 border-t border-border">
              Your details stay between us. No spam.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  required,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
      />
    </div>
  );
}

function RadioGroup({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="space-y-1.5">
      <legend className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label} {required && <span className="text-destructive">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs transition-colors hover:bg-accent has-[input:checked]:bg-foreground has-[input:checked]:text-background has-[input:checked]:border-foreground"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              required={required}
              className="sr-only"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
