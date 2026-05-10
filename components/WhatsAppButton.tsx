"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "6281234567890";

  const message = encodeURIComponent(
    "Hello Johni 👋 I want to discuss a project with you."
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1],
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.12,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        group
        fixed bottom-6 right-6 z-50
      "
    >

      {/* 🔥 Ripple Ping */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* 🔥 Glow */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] blur-2xl opacity-50" />

      {/* 🔥 Main Button */}
      <div
        className="
          relative
          w-16 h-16
          rounded-full
          bg-[#25D366]
          border border-white/10
          backdrop-blur-xl
          flex items-center justify-center
          shadow-2xl shadow-[#25D366]/40
        "
      >
        <FaWhatsapp className="text-white text-3xl" />
      </div>

      {/* 🔥 Tooltip */}
      <div
        className="
          absolute right-20 top-1/2 -translate-y-1/2
          bg-black/80 backdrop-blur-xl
          border border-white/10
          text-white text-sm
          px-4 py-2
          rounded-xl
          whitespace-nowrap
          opacity-0
          translate-x-2
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          pointer-events-none
        "
      >
        Chat via WhatsApp 👋
      </div>

    </motion.a>



  );
}