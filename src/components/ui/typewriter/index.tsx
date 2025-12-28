"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Sansation } from "next/font/google";
import { JSX, useEffect, useState } from "react";

const sansation = Sansation({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-sansation', fallback: ['system-ui'] })

export default function FramerTypewriter({
  text,
  highlightWord,
}: {
  text: string;
  highlightWord?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [chars, setChars] = useState<JSX.Element[]>([]);

  // Precompute all highlight indices
  const highlightIndices = highlightWord
    ? Array.from(text.matchAll(new RegExp(highlightWord, "gi"))).flatMap((match) =>
        Array.from({ length: match[0].length }, (_, i) => match.index! + i)
      )
    : [];

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "linear",
    });

    const unsubscribe = rounded.onChange((latest) => {
      const currentText = text.slice(0, latest);
      const elements = currentText.split("").map((char, i) => {
        const isHighlight = highlightIndices.includes(i);
        return (
          <span key={i} className={isHighlight ? "text-accent font-bold" : ""}>
            {char}
          </span>
        );
      });
      setChars(elements);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [text, highlightWord, highlightIndices]);

  return (
    <span className="text-center">
      <motion.span className={`${sansation.className} font-bold text-8xl text-wrap`}>{chars}</motion.span>
      {/* Blinking Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-1 h-16 ml-2 bg-foreground text-center"
      />
    </span>
  );
}
