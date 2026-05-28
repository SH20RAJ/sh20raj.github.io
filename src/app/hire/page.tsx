"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { monetization } from "@/data/monetization";
import { CheckCircle2, ArrowRightIcon, Loader2, AlertCircle } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

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
      // Fallback: open mailto with the brief
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
        <div className="rounded-2xl border-2 border-[var(--duo-feather)]/30 bg-[var(--duo-feather)]/5 p-8 md:p-12 max-w-2xl w-full text-center space-y-5 shadow-[0_2px_0_var(--duo-swan)]">
          <CheckCircle2 className="size-12 text-[var(--duo-feather)] mx-auto" />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Brief received</h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            I&apos;ll review and reply within 24 hours with a fixed quote and timeline. If you want
            to skip the wait, book a call now.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/book"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--duo-feather)] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none gap-2"
            >
              Book a Call <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full border-2 border-[var(--duo-swan)] bg-white dark:bg-transparent dark:text-foreground px-6 text-xs font-bold uppercase tracking-wider text-[var(--duo-eel)] shadow-[0_4px_0_var(--duo-swan)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none"
            >
              Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] pb-16">
      <section className="pt-12 pb-8">
        <div className="mx-auto w-full max-w-3xl px-6 space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--duo-feather)]/30 bg-[var(--duo-feather)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--duo-feather)]">
              Send a brief
            </span>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              Tell me about your project
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Async-friendly. I respond within 24 hours with a fixed quote and timeline. Prefer to
              talk?{" "}
              <Link href="/book" className="font-bold text-[var(--duo-feather)] hover:underline">
                Book a 15-min call instead
              </Link>
              .
            </p>
          </BlurFade>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto w-full max-w-3xl px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border-2 border-[var(--duo-swan)] bg-card p-6 md:p-8 shadow-[0_2px_0_var(--duo-swan)] space-y-5"
            >
              <input type="hidden" name="access_key" value={monetization.web3formsAccessKey} />
              <input type="hidden" name="subject" value="New project brief from sh20raj.github.io" />
              <input type="hidden" name="from_name" value="sh20raj.github.io" />
              {/* Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Your name" name="name" required type="text" placeholder="Jane Doe" />
                <Field
                  label="Email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <Field
                label="Company / startup (optional)"
                name="company"
                type="text"
                placeholder="Acme Inc."
              />

              <RadioGroup label="Project type" name="project_type" options={projectTypes} required />
              <RadioGroup label="Budget" name="budget" options={budgets} required />
              <RadioGroup label="Timeline" name="timeline" options={timelines} required />

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Brief <span className="text-[var(--duo-cardinal)]">*</span>
                </label>
                <textarea
                  name="brief"
                  required
                  rows={6}
                  placeholder="What you're building, the goal, links to references, and anything else I should know."
                  className="w-full rounded-xl border-2 border-[var(--duo-swan)] bg-background px-4 py-3 text-sm focus:outline-none focus:border-[var(--duo-feather)] transition-colors"
                />
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-lg border-2 border-[var(--duo-cardinal)]/30 bg-[var(--duo-cardinal)]/5 p-3 text-xs text-[var(--duo-cardinal)]">
                  <AlertCircle className="size-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex h-11 w-full md:w-auto items-center justify-center gap-2 rounded-full bg-[var(--duo-feather)] px-8 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_0_var(--duo-feather-shadow)] transition-all hover:brightness-105 active:translate-y-1 active:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send brief <ArrowRightIcon className="size-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted-foreground pt-2 border-t border-[var(--duo-swan)]">
                Your details stay between us. No spam. No newsletter sign-up.
              </p>
            </form>
          </BlurFade>
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
      <label className="text-xs font-bold uppercase tracking-wider text-foreground">
        {label} {required && <span className="text-[var(--duo-cardinal)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-[var(--duo-swan)] bg-background px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--duo-feather)] transition-colors"
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
      <legend className="text-xs font-bold uppercase tracking-wider text-foreground">
        {label} {required && <span className="text-[var(--duo-cardinal)]">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full border-2 border-[var(--duo-swan)] bg-background px-3 py-1.5 text-xs font-bold transition-all hover:border-[var(--duo-feather)] has-[input:checked]:bg-[var(--duo-feather)] has-[input:checked]:text-white has-[input:checked]:border-[var(--duo-feather)]"
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
