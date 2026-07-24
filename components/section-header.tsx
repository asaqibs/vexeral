export function SectionHeader({
  label,
  title,
  titleMuted,
  lead,
  align = "left",
  variant = "major",
}: {
  label?: string;
  title: string;
  /** Optional second display line rendered in muted gray, reference-style. */
  titleMuted?: string;
  lead?: string;
  align?: "left" | "center";
  variant?: "major" | "medium" | "minor";
}) {
  const centered = align === "center";
  const headingClass = {
    major:
      "font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[80px]",
    medium:
      "font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[64px]",
    minor:
      "font-serif text-3xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[52px]",
  }[variant];

  return (
    <div className={`mb-14 lg:mb-20 ${centered ? "text-center" : "text-center sm:text-left"}`}>
      {label ? (
        <span
          className={`mb-6 inline-flex items-center gap-4 font-mono text-xs uppercase tracking-[0.24em] text-vlight/70 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-12 bg-vmid/30" />
          {label}
          {centered ? <span className="h-px w-12 bg-vmid/30" /> : null}
        </span>
      ) : null}
      <h2 className={headingClass}>
        {title}
        {titleMuted ? (
          <>
            <br />
            <span className="text-vlight/70">{titleMuted}</span>
          </>
        ) : null}
      </h2>
      {lead ? (
        <p
          className={`mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
