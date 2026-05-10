"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// 🔥 Stats data
const stats = [
  {
    number: 566,
    suffix: "k",
    label: "People Reached",
    icon: "👥",
    color: "from-[#f47c20]/20",
  },
  {
    number: 256,
    suffix: "k",
    label: "Projects Done",
    icon: "🚀",
    color: "from-[#4a90e2]/20",
  },
  {
    number: 98,
    suffix: "%",
    label: "Client Satisfied",
    icon: "💯",
    color: "from-[#9b59b6]/20",
  },
  {
    number: 24,
    suffix: "/7",
    label: "Always Active",
    icon: "⚡",
    color: "from-[#f47c20]/20",
  },
];

const bars = [40, 60, 55, 80, 50, 70, 90, 45, 65, 75];

// 🔥 Counter hook
function useCount(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;

      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return value;
}

// 🔥 animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Stats() {
  return (
    <SectionWrapper className="px-6 md:px-16 lg:px-32 py-16 md:py-20">
      {/* Glow */}
      <div className="absolute bottom-20 left-10 md:left-20 w-60 md:w-72 h-60 md:h-72 bg-[#4a90e2]/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Perfect Solution <br />
          For Your <span className="text-[#f47c20]">Business</span>
        </h2>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT CHART */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 border-2 border-[#f47c20] rounded-3xl p-5 md:p-7 w-full lg:min-w-[320px]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-white font-mono mb-1">
                  People Reached
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  566.12k
                </h3>
              </div>

              <div className="bg-[#f47c20]/20 border-2 border-[#f47c20] rounded-xl px-3 py-1.5">
                <span className="text-white text-xs font-mono">2024</span>
              </div>
            </div>

            {/* Bars */}
            <div className="flex items-end gap-1.5 h-20 md:h-24 my-5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex-1 rounded-md"
                  style={{
                    background:
                      i === bars.length - 1
                        ? "#f47c20"
                        : i % 3 === 0
                          ? "#9b59b6"
                          : "#4a90e2",
                  }}
                />
              ))}
            </div>

            {/* Small stat */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-2xl">❤️</span>
              <div>
                <div className="text-lg md:text-xl font-extrabold text-white">
                  256.12k
                </div>
                <div className="text-xs text-white font-mono">
                  Total Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const value = useCount(stat.number);

              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`bg-gradient-to-br ${stat.color} border-2 border-[#f47c20] rounded-2xl p-5 transition-all`}
                >
                  <div className="text-2xl mb-3">{stat.icon}</div>

                  <div className="text-2xl md:text-3xl font-extrabold text-white">
                    {value}
                    {stat.suffix}
                  </div>

                  <div className="text-xs text-white font-mono uppercase mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
