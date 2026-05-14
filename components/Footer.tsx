"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import Button from "./ui/Button";

const handleNav = (item: { id: string }) => {
  document.getElementById(item.id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <SectionWrapper
      id="contact"
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f47c20]/10 blur-[120px] rounded-full" />
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* 🧠 BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-extrabold text-white">
            Revormasi<span className="text-[#f47c20]">.dev</span>
          </h1>

          <p className="text-white text-sm mt-4 leading-relaxed max-w-xs">
            Crafting modern digital experiences with clean UI, performance, and
            scalable architecture.
          </p>
        </motion.div>

        {/* 🔗 NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold mb-4">Navigation</h3>

          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#f47c20] transition-all"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </motion.div>

        {/* 🚀 CTA / SOCIAL STYLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-white font-bold">Let’s Build Something</h3>

          <p className="text-white text-sm leading-relaxed">
            Have a project in mind? Let’s collaborate and build something great.
          </p>

          <div className="w-full">
            <Button
              variant="primary"
              onClick={() => handleNav({ id: "contact" })}
            >
              Contact Me →
            </Button>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-xs font-mono">
          © {new Date().getFullYear()} Revormasi <span className="text-[#f47c20]">.dev</span> . All rights reserved.
        </p>

        <div className="flex gap-5 text-xs">
          <a className="text-white hover:text-[#f47c20] transition" href="#">
            Privacy
          </a>
          <a className="text-white hover:text-[#f47c20] transition" href="#">
            Terms
          </a>
          <a className="text-white hover:text-[#f47c20] transition" href="#">
            GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
