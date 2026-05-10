"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

// 🔥 animation system
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
       ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stats = [
  { number: "2+", label: "Years Experience", icon: "🏆" },
  { number: "10+", label: "Projects Done", icon: "🚀" },
  { number: "10+", label: "Happy Clients", icon: "🤝" },
  { number: "100%", label: "Commitment", icon: "💯" },
];

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "CEO, Startup Digital",
    message:
      "Johni delivered exceptional work beyond our expectations. Clean code, on time, and great communication throughout the project.",
    avatar: "👨‍💼",
  },
  {
    name: "Sarah Melissa",
    role: "Product Manager",
    message:
      "Very professional and detail-oriented developer. The UI he built was exactly what we envisioned. Highly recommended!",
    avatar: "👩‍💼",
  },
  {
    name: "Budi Santoso",
    role: "Founder, Tech Agency",
    message:
      "Outstanding results! Johni understood our requirements quickly and delivered a scalable solution within the deadline.",
    avatar: "🧑‍💼",
  },
];

export default function Clients() {
  return (
    <SectionWrapper id="clients" className="relative py-28 px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-[#f47c20]/10 blur-[120px] rounded-full -z-10" />

      {/* 🧠 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#f47c20]" />
          <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
            Trusted By Clients
          </span>
          <div className="w-8 h-px bg-[#f47c20]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Clients Get Always <br />
          <span className="text-[#f47c20]">Exceptional Work</span>
        </h2>

        <p className="text-white text-sm mt-4">
          I take pride in delivering high quality work with full commitment and modern standards.
        </p>
      </motion.div>

      {/* 📊 STATS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-6xl mx-auto"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 border-2 border-[#f47c20] rounded-2xl p-6 text-center backdrop-blur-md hover:border-[#f47c20]/40 transition-all"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-extrabold text-white">
              {stat.number}
            </div>
            <div className="text-xs text-white mt-1 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 💬 TESTIMONIALS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -8 }}
            className="relative bg-white/15 border-2 border-[#f47c20] rounded-2xl p-6 backdrop-blur-md hover:border-[#f47c20]/40 transition-all"
          >
            {/* glow */}
            <div className="absolute inset-0 bg-[#f47c20]/5 opacity-0 hover:opacity-100 transition rounded-2xl" />

            {/* quote */}
            <div className="text-[#f47c20] text-3xl mb-3">"</div>

            {/* message */}
            <p className="text-white text-sm leading-relaxed mb-6">
              {t.message}
            </p>

            <div className="h-px bg-white/10 mb-4" />

            {/* author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f47c20]/20 border border-[#f47c20]/30 flex items-center justify-center">
                {t.avatar}
              </div>

              <div>
                <div className="text-white text-sm font-bold">
                  {t.name}
                </div>
                <div className="text-[#f47c20] text-xs font-mono">
                  {t.role}
                </div>
              </div>

              {/* stars */}
              <div className="ml-auto flex text-[#f47c20] text-xs">
                ★★★★★
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </SectionWrapper>
  );
}