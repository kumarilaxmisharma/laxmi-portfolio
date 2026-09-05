"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface CircleStickerProps {
  text: string;
  emoji?: string;
  className?: string;
  rotate?: number;
}

/** A round "stamp" sticker with circular text running around the rim - cute, hand-made feel. */
export function CircleSticker({ text, emoji = "👋", className = "", rotate = -8 }: CircleStickerProps) {
  const pathId = useId();
  const repeated = `${text} • ${text} • `;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ rotate: 0, scale: 1.06 }}
      className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-blue border-[3px] border-white/90 shadow-xl flex items-center justify-center shrink-0 ${className}`}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <path id={pathId} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-white" style={{ fontSize: "7.5px", fontWeight: 700, letterSpacing: "1.5px" }}>
          <textPath href={`#${pathId}`}>{repeated}</textPath>
        </text>
      </svg>
      <span className="relative z-10 text-3xl md:text-4xl" role="img" aria-label="waving hand">
        {emoji}
      </span>
    </motion.div>
  );
}

interface CodeStickerProps {
  className?: string;
  rotate?: number;
}

/** A small rounded "badge" sticker, like a stamped label. */
export function CodeSticker({ className = "", rotate = 7 }: CodeStickerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: rotate + 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
      whileHover={{ rotate: 0, scale: 1.08 }}
      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border-[3px] border-blue shadow-xl flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="text-xl md:text-2xl font-black text-blue">{"</>"}</span>
    </motion.div>
  );
}
