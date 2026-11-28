import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";

const highlights = ["Instant ATS insights", "Clear, actionable feedback"];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-24">
        <div className="animate-fade-up relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles size={16} className="text-accent-gold" aria-hidden="true" />
            A smarter way to move your career forward
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Make your resume
            <span className="block text-accent-coral">work for you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            See how your resume matches the role you want, then get practical
            guidance to make your next application count.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/analyze"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-bold !text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Analyze my resume
              <ArrowRight
                size={19}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-base font-bold text-text-primary transition-colors hover:border-primary hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              See how it works
            </Link>
          </div>

          <ul className="mt-7 flex flex-col gap-3 text-sm font-medium text-text-secondary sm:flex-row sm:gap-6">
            {highlights.map((highlight) => (
              <li key={highlight} className="inline-flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check size={13} strokeWidth={3} aria-hidden="true" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary">
            <ShieldCheck size={17} className="text-primary" aria-hidden="true" />
            Your career story stays yours
          </div>
        </div>

        <div className="animate-fade-up animation-delay-200 relative mx-auto w-full max-w-[660px]">
          <div
            aria-hidden="true"
            className="absolute -left-4 top-1/4 h-20 w-20 animate-pulse rounded-full bg-accent-violet-soft motion-reduce:animate-none sm:-left-8"
          />
          <div className="animate-float relative overflow-hidden rounded-[2rem] border border-accent-violet-soft bg-accent-violet-soft p-3 shadow-xl sm:p-5">
            <Image
              src="/resume-analysis.svg"
              alt="ResumeWise analysis dashboard showing a resume match score and improvement checklist"
              width={760}
              height={620}
              priority
              className="h-auto w-full rounded-2xl"
            />
            <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur sm:bottom-10 sm:left-10 sm:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gold-soft text-accent-gold">
                <ShieldCheck size={21} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold text-text-primary">
                  Thoughtful feedback
                </span>
                <span className="mt-0.5 block text-xs text-text-secondary">
                  Built around your next step
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
