import {
  EyeOff,
  FileLock2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const privacyPoints = [
  {
    icon: LockKeyhole,
    title: "Personal information stays yours",
    description:
      "We do not share your personal information to train any AI model. Your resume and career details are not used to improve third-party AI training datasets.",
    iconBg: "bg-accent-violet-soft",
    iconColor: "text-accent-violet",
  },
  {
    icon: EyeOff,
    title: "Your data matters to us",
    description:
      "Your data and privacy are important. We keep the analysis experience transparent and handle the information you provide with care.",
    iconBg: "bg-accent-coral-soft",
    iconColor: "text-accent-coral",
  },
  {
    icon: FileLock2,
    title: "A private, focused review",
    description:
      "Review only the information you choose to provide and use your results confidently to improve your application.",
    iconBg: "bg-accent-gold-soft",
    iconColor: "text-accent-gold",
  },
];

export default function PrivacySecuritySection() {
  return (
    <section id="privacy" className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="animate-fade-up text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Privacy &amp; security
            </span>
            <h2 className="animate-fade-up animation-delay-100 mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Your career data deserves real privacy.
            </h2>
            <p className="animate-fade-up animation-delay-200 mt-5 text-base leading-8 text-text-secondary">
              Your resume, personal details, and job targets stay focused on
              helping you improve. We do not share them to train AI models.
            </p>
            <Link
              href="/privacy-policy"
              className="animate-fade-up mt-6 inline-flex items-center gap-2 rounded-lg text-base font-bold text-primary transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Read our privacy policy
              <ShieldCheck size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-4">
            {privacyPoints.map(({ icon: Icon, title, description, iconBg, iconColor }, index) => (
              <article
                key={title}
                className={`group animate-fade-up flex gap-4 rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6 ${iconBg}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background transition-transform group-hover:scale-105 ${iconColor}`}>
                  <Icon size={23} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-text-primary">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-text-secondary">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
