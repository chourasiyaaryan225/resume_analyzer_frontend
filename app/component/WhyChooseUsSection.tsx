import {
  BadgeCheck,
  CircleDollarSign,
  ListChecks,
  ScanSearch,
} from "lucide-react";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Free resume guidance",
    description:
      "Get a complete resume review at no cost, with no subscriptions or hidden paywalls.",
    iconBg: "bg-accent-violet-soft",
    iconColor: "text-accent-violet",
  },
  {
    icon: BadgeCheck,
    title: "Matching skills",
    description:
      "See the skills you already have that directly align with the role you are targeting.",
    iconBg: "bg-accent-coral-soft",
    iconColor: "text-accent-coral",
  },
  {
    icon: ScanSearch,
    title: "Skills to build",
    description:
      "Spot non-matching or missing skills so you know exactly where your profile needs improvement.",
    iconBg: "bg-accent-gold-soft",
    iconColor: "text-accent-gold",
  },
  {
    icon: ListChecks,
    title: "Clear recommendations",
    description:
      "Receive practical, role-specific recommendations in one structured report instead of sorting through general AI advice.",
    iconBg: "bg-secondary",
    iconColor: "text-primary",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Why ResumeWise
            </span>
            <h2 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Helpful insight, without the overwhelm.
            </h2>
          </div>
          <p className="animate-fade-up animation-delay-200 max-w-xl text-base leading-7 text-text-secondary">
            ResumeWise does more than copy generic AI feedback. It compares
            your resume with the job you want and turns the result into a
            focused, easy-to-action plan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12">
          {benefits.map(({ icon: Icon, title, description, iconBg, iconColor }, index) => (
            <article
              key={title}
              className={`group animate-fade-up min-h-64 rounded-3xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:mx-0 ${iconBg} ${index === 1 || index === 3 ? "lg:translate-y-8" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-background transition-transform group-hover:scale-110 ${iconColor}`}>
                  <Icon size={23} aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-text-secondary">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
