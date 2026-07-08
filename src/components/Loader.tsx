"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "សួស្តី", lang: "Khmer" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Hello", lang: "English" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "你好", lang: "Chinese" },
];

interface LoaderProps {
  onComplete?: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 500); // 0.5 seconds per language
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setActive(false);
        document.body.style.overflow = "unset";
        if (onComplete) onComplete();
      }, 500); // Show the last language for 0.5 seconds before hiding the loader
      return () => clearTimeout(timer);
    }
  }, [index, onComplete]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 bg-[#070b14] z-[9999] flex flex-col items-center justify-center"
        >
          {/* Centered Greeting Text Container */}
          <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.h1
                key={index}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
                className="absolute text-5xl sm:text-7xl font-medium tracking-tight text-white flex items-center gap-4 text-center justify-center"
              >
                {/* Subtle indicator dot */}
                <span className="w-2.5 h-2.5 rounded-full bg-blue animate-pulse shrink-0" />
                {greetings[index].text}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Muted Subtitle with Language name */}
          <div className="absolute bottom-12 w-full h-8 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.p
                key={`lang-${index}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute text-xs uppercase tracking-[0.25em] text-white text-center"
              >
                {greetings[index].lang}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
