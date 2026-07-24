import Link from "next/link";
import { VexeralLockup } from "./logo";

/* Replace placeholder hrefs with real profiles / pages before launch. */
const socials = [
  { label: "X (Twitter)", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const columns: Record<string, { label: string; href: string }[]> = {
  Explore: [
    { label: "Industries", href: "/industries" },
    { label: "What's Included", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Common Questions", href: "/faq" },
    { label: "About", href: "/about" },
  ],
  Contact: [
    { label: "hello@vexeral.com", href: "mailto:hello@vexeral.com" },
    { label: "WhatsApp", href: "https://wa.me/00000000000" },
    { label: "Book a call", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-5 md:gap-8">
            {/* Brand column */}
            <div className="col-span-2">
              <VexeralLockup markSize={26} />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                AI automation for businesses — chatbots, voice agents, and
                workflow systems built around how you actually operate.
              </p>
              <div className="mt-8 flex gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group inline-flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
>
                    {s.label}
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(columns).map(([title, links]) => (
              <div key={title}>
                <div className="mb-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {title}
                </div>
                <ul className="space-y-4 text-sm">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-primary/90"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-8 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            © {new Date().getFullYear()} Vexeral · vexeral.com
          </span>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-primary"
              style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
            />
            Automation built around how you work
          </span>
        </div>
      </div>
    </footer>
  );
}
