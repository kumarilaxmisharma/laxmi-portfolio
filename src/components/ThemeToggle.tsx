"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden hover:bg-white/20 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {/* Icon container with animation */}
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-5 h-5 text-yellow-300 group-hover:text-yellow-200 transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-5 h-5 text-blue-200 group-hover:text-blue-100 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: theme === "light" 
            ? "radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(147, 197, 253, 0.15) 0%, transparent 70%)"
        }}
      />
    </motion.button>
  );
}

