"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import useReveal from "@/hooks/useReveal";

type SectionWrapperProps = {
  children: ReactNode;
  overlay?: string;
  className?: string;
  id?: string;
};

export default function SectionWrapper({
  children,
  overlay = "",
  className = "",
  id,
}: SectionWrapperProps) {
  const ref = useReveal();

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* 🌌 Background layer (tetap seperti punyamu) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* 🌫 Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}

      {/* ✨ Content Animated (SAAS REVEAL) */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}