"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
   const interval = setInterval(() => {
  setProgress((prev) => {
    if (prev >= 100) {
      clearInterval(interval);
      setTimeout(() => setLoading(false), 250);
      return 100;
    }

    return Math.min(prev + Math.random() * 25, 100);
  });
}, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#020B0A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#f47c20]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#1B5249]/40 blur-3xl" />

          {/* Subtle grid overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

          {/* Logo */}
          <motion.div
            className="relative z-10 mb-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            {/* Icon */}
            <motion.div
              className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#f47c20] bg-white"
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 0px rgba(61,168,152,0)",
                  "0 0 35px rgba(61,168,152,0.35)",
                  "0 0 0px rgba(61,168,152,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/favicon.ico"
                alt="Revormasi.dev Logo"
                width={180}
                height={180}
                sizes="40px"
                className="h-32 w-32 object-contain"
              />
            </motion.div>

            {/* Text logo */}
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-[#F4F0E8] md:text-5xl">
              Revormasi<span className="text-[#f47c20]">.dev</span>
            </h1>

            <p className="font-mono text-xs uppercase tracking-[0.35em] text-white">
              Crafting digital experiences
            </p>
          </motion.div>

          {/* Animated loader rings */}
          <motion.div
            className="relative z-10 mb-10 h-24 w-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#f47c20]/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Middle ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-[#f47c20]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-b-[#f47c20] border-l-transparent border-r-transparent border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="h-3 w-3 rounded-full bg-[#f47c20]"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="relative z-10 w-52 md:w-72"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Track */}
            <div className="mb-3 h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#f47c20] to-white"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">Loading...</span>

              <span className="font-mono text-xs text-[#f47c20]">
                {Math.min(Math.round(progress), 100)}%
              </span>
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.p
            className="absolute bottom-10 z-10 font-mono text-xs text-white"
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
