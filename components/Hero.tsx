"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import SectionWrapper from "./SectionWrapper";
import Button from "./ui/Button";
import Link from "next/link";

// 🔥 Animation setup
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <SectionWrapper
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden py-32 mx-auto"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f47c20]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* 💎 Animated Container */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        id="home"
        className="flex flex-col items-center text-center max-w-3xl"
      >
        {/* 🚀 Badge */}
        <motion.div
          variants={item}
          className="mb-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white"
        >
          🚀 Available for freelance work
        </motion.div>

        {/* 💥 Headline */}
        <motion.h3
          variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          Building Modern
          <br />
          <span className="bg-gradient-to-r from-[#f47c20] to-orange-300 bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h3>

        {/* ✨ Typing */}
        <motion.div variants={item} className="mt-4 text-lg text-white/70">
          <TypingEffect />
        </motion.div>

        {/* 📊 Stats */}
        <motion.div
          variants={item}
          className="flex gap-4 mt-10 flex-wrap justify-center"
        >
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Done", value: "10+" },
            { label: "Clients", value: "10+" },
          ].map((item, i) => (
            <div
              key={i}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <div className="text-white text-lg font-bold">{item.value}</div>
              <div className="text-white text-xs">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 🎯 CTA */}
        <motion.div
          variants={item}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <Link href="/contact">
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Started
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Work
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
