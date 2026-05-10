"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import Button from "./ui/Button";

// 🔥 animation (lebih smooth SaaS feel)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const services = [
  {
    icon: "🤖",
    title: "Developer",
    desc: "Building scalable and clean web applications with modern technologies and best practices.",
  },
  {
    icon: "🎭",
    title: "UI/UX",
    desc: "Designing intuitive and beautiful user interfaces that deliver great user experiences.",
  },
  {
    icon: "✏️",
    title: "Design",
    desc: "Creating stunning visual designs that communicate your brand identity effectively.",
  },
];

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* 🔥 Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#f47c20]/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* 🧠 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#f47c20]" />
            <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
              What I Do
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            My Awesome <br />
            <span className="text-[#f47c20]">Services</span>
          </h2>

          <p className="text-white text-sm mt-4 leading-relaxed">
            I help businesses build modern, scalable, and high-performance
            digital products with clean UI and strong UX architecture.
          </p>

         <Button
                     variant="primary"
                     onClick={() => {
                       document.getElementById("contact")?.scrollIntoView({
                         behavior: "smooth",
                       });
                     }}
                   >
                    Hire Me
                   </Button>
        </motion.div>

        {/* 🧱 RIGHT CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-5"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative bg-white/5 border-2 border-[#f47c20] rounded-2xl p-5 backdrop-blur-md hover:border-[#f47c20]/40 transition-all cursor-pointer overflow-hidden"
            >
              {/* glow hover layer */}
              <div className="absolute inset-0 bg-[#f47c20]/5 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl" />

              <div className="relative flex items-start gap-4">
                {/* icon */}
                <div className="w-12 h-12 rounded-xl bg-[#f47c20]/10 border border-[#f47c20]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* text */}
                <div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-[#f47c20] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}