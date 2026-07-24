export function VexeralMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, overflow: "visible", display: "block" }}
      aria-hidden="true"
    >
      <polygon points="18,30 40,30 60,62 60,100" fill="#6d28d9" />
      <polygon points="102,30 80,30 60,62 60,100" fill="#a78bfa" />
      <polygon points="60,10 72,26 60,42 48,26" fill="#c4b5fd" />
    </svg>
  );
}

export function VexeralLockup({ markSize = 28 }: { markSize?: number }) {
  return (
    <span className="flex items-center gap-[11px]">
      <VexeralMark size={markSize} />
      <span className="font-serif text-[21px] font-semibold tracking-[-0.01em] text-ink">
        Vexeral
      </span>
    </span>
  );
}
