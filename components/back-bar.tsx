import Link from "next/link";

/** Thin breadcrumb bar for subpages; clears the fixed nav. */
export function BackBar({ current }: { current: string }) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 pb-5 pt-28 font-mono text-xs uppercase tracking-[0.14em] lg:px-12">
        <Link
          href="/"
          className="cursor-pointer text-vlight transition-colors duration-200 hover:text-ink"
        >
          Home
        </Link>
        <span className="text-vmid/50">/</span>
        <span className="text-ink/80">{current}</span>
      </div>
    </div>
  );
}
