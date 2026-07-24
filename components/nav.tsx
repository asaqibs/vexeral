"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { VexeralMark } from "./logo";

type NavLink = { href: string; label: string; spy?: string };

const links: NavLink[] = [
  { href: "/#services", label: "Services", spy: "services" },
  { href: "/industries", label: "Industries" },
  { href: "/#pricing", label: "Pricing", spy: "pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact", spy: "contact" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy for on-page anchor links (only fires on pages where they exist).
  useEffect(() => {
    const spied = links.filter((l) => l.spy).map((l) => l.spy as string);
    const sections = spied
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4" : "top-0"
      } left-0 right-0`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto transition-all duration-500 ${
          isScrolled
            ? "max-w-[1200px] bg-background/80 shadow-lg backdrop-blur-2xl rounded-2xl mx-4"
            : "max-w-[1400px] bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a
            href="/#top"
            aria-label="Vexeral home"
            className="flex cursor-pointer items-center gap-2.5"
          >
            <VexeralMark size={isScrolled ? 22 : 26} />
            <span
              className={`font-serif font-semibold tracking-[-0.01em] text-ink transition-all duration-500 ${
                isScrolled ? "text-lg" : "text-[21px]"
              }`}
            >
              Vexeral
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => {
              const isActive = l.spy != null && active === l.spy;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative cursor-pointer text-sm transition-colors duration-300 hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full bg-primary" : "w-0 bg-primary/50"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center md:flex">
            <a
              href="/#contact"
              className={`inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 ${
                isScrolled ? "min-h-[44px]" : "min-h-[44px]"
              }`}
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger className="cursor-pointer p-3 text-foreground md:hidden" aria-label="Open menu">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-border bg-background pt-20">
              <nav aria-label="Mobile" className="flex flex-1 flex-col gap-7 px-6">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="cursor-pointer font-serif text-3xl tracking-[-0.02em] text-foreground transition-colors hover:text-muted-foreground sm:text-5xl"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto border-t border-border px-6 pt-8 pb-8">
                <a
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/80"
                >
                  Book a Free Consultation
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
