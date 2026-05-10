"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(10);

  // Auto redirect ke home setelah 10 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Background blur circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f47c20]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#f47c20]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 404 big text */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-[150px] md:text-[200px] font-extrabold text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-6xl"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            😕
          </motion.span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#f47c20]" />
          <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
            Page Not Found
          </span>
          <div className="w-8 h-px bg-[#f47c20]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
          Oops! You're Lost
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
          Don't worry, let's get you back on track!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/"
            className="bg-[#f47c20] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#d96a10] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#f47c20]/20 w-full sm:w-auto text-center"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-[#f47c20]/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
          >
            💬 Contact Me
          </Link>
        </div>

        {/* Auto redirect countdown */}
        <motion.p
          className="text-white/30 text-xs font-mono"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Redirecting to home in{" "}
          <span className="text-[#f47c20]">{count}s</span>...
        </motion.p>

      </motion.div>

      {/* Quick links */}
      <motion.div
        className="absolute bottom-10 flex items-center gap-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {[
          { label: "Home",     href: "/" },
          { label: "About",    href: "/about" },
          { label: "Projects", href: "/#projects" },
          { label: "Contact",  href: "/contact" },
        ].map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="text-white/30 text-xs font-mono hover:text-[#f47c20] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>

    </div>
  );
}