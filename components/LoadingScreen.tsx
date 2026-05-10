"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >

          {/* Background blur circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f47c20]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#f47c20]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Logo */}
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              Mrstudio<span className="text-[#f47c20]">.</span>
            </h1>
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              Crafting digital experiences
            </p>
          </motion.div>

          {/* Animated circles */}
          <motion.div
            className="relative w-24 h-24 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#f47c20]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-t-[#f47c20] border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-b-[#f47c20]/60 border-r-transparent border-t-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-3 h-3 rounded-full bg-[#f47c20]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 md:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Track */}
            <div className="w-full h-px bg-white/10 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#f47c20] to-[#ff9a4a] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage */}
            <div className="flex items-center justify-between">
              <span className="text-white/30 text-xs font-mono">Loading...</span>
              <span className="text-[#f47c20] text-xs font-mono">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.p
            className="absolute bottom-10 text-white/20 text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Johni Revormasi Ziliwu © {new Date().getFullYear()}
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
}