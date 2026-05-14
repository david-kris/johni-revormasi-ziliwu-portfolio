"use client";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function CTA() {
  return (
    <SectionWrapper className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Decorative blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f47c20]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-[#f47c20]" />
          <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
            Get In Touch
          </span>
          <div className="w-8 h-px bg-[#f47c20]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Ready To Start Your
          <br />
          <span className="text-[#f47c20]">Next Project?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-white text-sm md:text-base max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Let's work together and build something
          amazing. I'm always open to discussing new opportunities.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:studiorevormasi@gmail.com"
            className="bg-[#f47c20] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#d96a10] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#f47c20]/20 w-full sm:w-auto text-center"
          >
            📧 Send Me Email
          </a>
          <a
            href="https://wa.me/6285215644688"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-white/10/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
          >
            💬 WhatsApp Me
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-full max-w-2xl h-px bg-white mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "💼",
              label: "Github",
              href: "https://github.com/jon-renzil-08",
            },
            {
              icon: "🐙",
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/johnirevormasiziliwu/",
            },
            {
              icon: "📸",
              label: "Instagram",
              href: "https://instagram.com/jonrenzil",
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs font-mono hover:bg-white/10 hover:border-white/10/30 hover:text-white transition-all"
            >
              <span>{social.icon}</span>
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
