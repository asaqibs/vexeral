"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif text-3xl text-white lg:text-4xl">
            Something went wrong
          </h1>
          <p className="mt-4 max-w-md text-sm text-neutral-400">
            Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/80"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
