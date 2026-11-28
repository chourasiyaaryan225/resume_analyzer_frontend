
import Link from "next/link";
import {
  FileCheck,
  ArrowUpRight,
  Mail
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Privacy", href: "#privacy" },
];

const productLinks = [
  { name: "Resume Analysis", href: "/analyze" },
  { name: "ATS Score", href: "/analyze" },
  { name: "Recommendations", href: "/analyze" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {

  return (
    <footer className="border-t border-border bg-surface">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-14">

        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          {/* Brand Section */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <FileCheck size={24} strokeWidth={1.8} />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-text-primary">
                Resume<span className="text-primary">Wise</span>
              </span>
            </Link>

            <p className="mt-5 text-base leading-7 text-text-secondary">
              Make every application count. Understand your resume&apos;s
              strengths, identify missing skills, and improve your
              alignment with the job you&apos;re targeting.
            </p>

            <Link
              href="mailto:support@resumewise.com"
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              <Mail size={17} />
              Contact Support
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-text-secondary transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Product
              </h3>

              <ul className="mt-5 space-y-3.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-text-secondary transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold text-text-primary">
                Legal
              </h3>

              <ul className="mt-5 space-y-3.5">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-text-secondary transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-base text-text-secondary">
            © 2026 ResumeWise. All rights reserved.
          </p>

          <p className="text-base text-text-secondary">
            Built to help you make your next career move.
          </p>

        </div>
      </div>
    </footer>
  );
}
