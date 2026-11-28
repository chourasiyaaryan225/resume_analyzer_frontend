import {
  ArrowUpRight,
  CircleHelp,
  FileSearch,
  Lightbulb,
  Target,
} from "lucide-react";

const challenges = [
  "It is hard to know what an applicant tracking system may miss.",
  "Generic advice rarely explains what to improve first.",
  "Tailoring every application can take more time than it should.",
];

export default function ProblemOpportunitySection() {
  return (
    <section id="problem" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-primary">
            A clearer path to your next role
          </span>
          <h2 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            A great resume deserves to be seen.
          </h2>
          <p className="animate-fade-up animation-delay-200 mt-4 text-base leading-8 text-text-secondary sm:text-lg">
            Make the gap between your experience and the job description easier
            to understand, so you can focus on the changes that matter.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-7">
          <article className="animate-fade-up rounded-3xl border border-accent-coral-soft bg-accent-coral-soft p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-accent-coral">
                <CircleHelp size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-text-secondary">
                  The challenge
                </p>
                <h3 className="text-xl font-bold text-text-primary">
                  Applying shouldn&apos;t feel like guesswork.
                </h3>
              </div>
            </div>
            <ul className="mt-7 space-y-4">
              {challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                >
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-accent-coral"
                    aria-hidden="true"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </article>

          <article className="animate-fade-up animation-delay-200 group rounded-3xl border border-accent-gold-soft bg-accent-gold-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-accent-gold">
                <Lightbulb size={24} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-accent-gold">
                  The opportunity
                </p>
                <h3 className="text-xl font-bold text-text-primary">
                  Turn uncertainty into a next step.
                </h3>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-text-secondary sm:text-base">
              Compare your resume with a role, spot relevant skills and
              experience, and get focused suggestions you can put into action
              before you apply.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
                <FileSearch size={21} className="shrink-0 text-accent-coral" aria-hidden="true" />
                <span className="text-sm font-semibold text-text-primary">
                  Know what stands out
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4">
                <Target size={21} className="shrink-0 text-accent-violet" aria-hidden="true" />
                <span className="text-sm font-semibold text-text-primary">
                  Focus on this role
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
