"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <h1 className="font-serif text-3xl text-white lg:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-sm text-neutral-400">
        Please try reloading the page. If the problem persists, contact support.
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/80"
      >
        Try again
      </button>
    </main>
  );
}
