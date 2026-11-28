
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  X,
  UserRound,
  FileCheck,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Problem", href: "#problem" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Privacy", href: "#privacy" },
];

export default function Header({ isLoggedIn = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex min-h-[82px] max-w-[1400px] items-center justify-between px-5 sm-px-0">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <FileCheck size={24} strokeWidth={1.8} />
          </div>

          <span className="text-xl font-extrabold tracking-tight text-text-primary sm:text-2xl">
            Resume<span className="text-primary">Wise</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isLoggedIn && (
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-lg px-3 py-2.5 text-[15px] font-semibold text-text-secondary transition-colors duration-200 hover:bg-secondary hover:text-primary lg:px-4 lg:text-base"
              >
                {link.name}

                <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        )}

        {/* Desktop Authentication / Profile */}
        <div className="hidden items-center gap-4 md:flex">
          {isLoggedIn ? (
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-5 py-2.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-secondary"
            >
              <UserRound size={19} />
              Profile
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-5 py-2.5 text-base font-semibold text-primary transition-all duration-200 hover:bg-secondary"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-5 py-2.5 text-base font-semibold !text-white shadow-sm transition-all duration-200 hover:border-primary-hover hover:bg-primary-hover"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        {!isLoggedIn && (
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-text-primary transition-colors hover:border-primary hover:bg-secondary hover:text-primary md:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        )}

        {/* Mobile Profile */}
        {isLoggedIn && (
          <Link
            href="/profile"
            aria-label="View profile"
            className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-primary text-primary transition-colors hover:bg-secondary md:hidden"
          >
            <UserRound size={21} />
          </Link>
        )}
      </div>

      {/* Mobile Navigation - Guest Only */}
      {!isLoggedIn && (
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-border bg-background px-5 py-5 sm:px-8">

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-3.5 text-base font-semibold text-text-secondary transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Authentication Buttons */}
              <div className="mt-4 flex gap-3 border-t border-border pt-5">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-primary px-4 py-3 text-base font-semibold text-primary transition-all duration-200 hover:bg-secondary"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={closeMenu}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-4 py-3 text-base font-bold !text-white transition-all duration-200 hover:border-primary-hover hover:bg-primary-hover"
                >
                  Get Started
                  <ArrowRight size={17} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
