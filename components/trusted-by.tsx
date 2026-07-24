export function TrustedBy() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-2 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary/60">
          Built for businesses that can&rsquo;t afford to lose a lead
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary/50">
          Currently onboarding our first partners
        </p>
        {/*
          CLIENT LOGO PLACEHOLDER — when the first partners are signed, drop a
          real logo row in here. Kept as a single honest line for now rather
          than empty placeholder tiles, which read as weak pre-launch.
        */}
      </div>
    </section>
  );
}
