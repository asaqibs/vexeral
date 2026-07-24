"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Cycles through words with a per-character slide, staggered from the last
 * character. Sized by the longest word so the surrounding line never reflows.
 */
export function RotatingText({
  words,
  interval = 2500,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  const word = words[index];
  const chars = Array.from(word);

  return (
    <span className={`relative inline-flex overflow-hidden ${className ?? ""}`}>
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          className="inline-flex whitespace-pre"
          aria-hidden="true"
        >
          {chars.map((char, i) => (
            <span key={`${char}-${i}`} className="inline-block overflow-hidden pb-1">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                  delay: (chars.length - 1 - i) * 0.025,
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
