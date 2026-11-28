import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileUp,
  ListChecks,
} from "lucide-react";

const steps = [
  {
    icon: FileUp,
    number: "01",
    title: "Add your resume",
    description:
      "Start with the resume you want to improve. You stay in control of what you share.",
    iconBg: "bg-accent-violet-soft",
    iconColor: "text-accent-violet",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Choose a job",
    description:
      "Add the job description so your review is focused on the opportunity you have in mind.",
    iconBg: "bg-accent-coral-soft",
    iconColor: "text-accent-coral",
  },
  {
    icon: ListChecks,
    number: "03",
    title: "Explore your results",
    description:
      "Review the match and use the suggestions to decide what you want to refine next.",
    iconBg: "bg-accent-gold-soft",
    iconColor: "text-accent-gold",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-primary">
            How it works
          </span>
          <h2 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            From resume to ready in three steps.
          </h2>
          <p className="animate-fade-up animation-delay-200 mt-4 text-base leading-8 text-text-secondary sm:text-lg">
            A straightforward way to understand your resume before your next
            application.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, description, iconBg, iconColor }, index) => (
            <li
              key={number}
              className={`group animate-fade-up relative rounded-3xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${iconBg}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-background transition-transform duration-300 group-hover:scale-110 ${iconColor}`}>
                  <Icon size={26} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold tracking-widest text-text-secondary">
                  {number}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
                {description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link
            href="/analyze"
            className="animate-fade-up group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start your review
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
