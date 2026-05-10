"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "jrevormasi@gmail.com",
    href: "mailto:jrevormasi@gmail.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+62 852 1564 4688",
    href: "https://wa.me/6285215644688",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bali, Indonesia",
    href: "#map",
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Mon - Fri, 9AM - 6PM",
    href: "#",
  },
];

const socials = [
  { icon: "💼", label: "Github", href: "https://github.com/jon-renzil-08" },
  { icon: "🐙", label: "LinkedIn", href: "https://www.linkedin.com/in/johnirevormasiziliwu/" },
  { icon: "📸", label: "Instagram", href: "https://instagram.com/johni" },
  { icon: "🐦", label: "Twitter", href: "https://twitter.com/johni" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_pjgjj5r", // ← ganti dengan Service ID kamu
        "template_h1nd868", // ← ganti dengan Template ID kamu
        formRef.current!,
        "rEmAXukmX4lB-bmd6", // ← ganti dengan Public Key kamu
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <SectionWrapper
        id="contact"
        className="px-6 md:px-12 lg:px-16 py-32 min-h-[40vh] flex items-center justify-center"
      >

        {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#f47c20]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

        <motion.div
          className="text-center w-full"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Top Label */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#f47c20]" />

              <span className="text-[#f47c20] text-[11px] md:text-xs font-mono uppercase tracking-[0.3em]">
                Get In Touch
              </span>

              <div className="w-10 h-px bg-[#f47c20]" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6">
              Let&apos;s Work <span className="text-[#f47c20]">Together</span>
            </h1>

            {/* Description */}
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
              Have a project in mind? I&apos;d love to hear about it. Send me a
              message and let&apos;s build something modern, meaningful, and
              impactful together.
            </p>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* MAIN CONTENT */}
      <SectionWrapper
        className="px-6 md:px-12 lg:px-16 py-10 "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* LEFT — Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Send Me a <span className="text-[#f47c20]">Message</span>
            </h2>
            <p className="text-white text-sm font-mono mb-8">
              I'll get back to you within 24 hours.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xs font-mono uppercase tracking-wider mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Johni Ziliwu"
                    className="w-full bg-white/5 border border-[#f47c20] rounded-xl px-4 py-3 text-white text-sm placeholder:text-whitefocus:outline-none focus:border-[#f47c20]/50 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white text-xs font-mono uppercase tracking-wider mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="johni@email.com"
                    className="w-full bg-white/5 border border-[#f47c20] rounded-xl px-4 py-3 text-white text-sm placeholder:text-whitefocus:outline-none focus:border-[#f47c20]/50 focus:bg-white/8 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-white text-xs font-mono uppercase tracking-wider mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full bg-white/5 border border-[#f47c20] rounded-xl px-4 py-3 text-white text-sm placeholder:text-whitefocus:outline-none focus:border-[#f47c20]/50 focus:bg-white/8 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-white text-xs font-mono uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-[#f47c20] rounded-xl px-4 py-3 text-white text-sm placeholder:text-whitefocus:outline-none focus:border-[#f47c20]/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                  status === "sending"
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : "bg-[#f47c20] text-white hover:bg-[#d96a10] hover:-translate-y-0.5 shadow-lg shadow-[#f47c20]/20"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? "⏳ Sending..." : "📨 Send Message"}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm font-mono text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-mono text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* RIGHT — Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Contact <span className="text-[#f47c20]">Info</span>
              </h2>
              <p className="text-white text-sm font-mono mb-6">
                Or reach me directly through these channels.
              </p>

              {/* Contact Cards */}
              <div className="flex flex-col gap-3">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/5 border border-[#f47c20] rounded-2xl px-5 py-4 hover:bg-white/10 hover:border-[#f47c20]/30 transition-all group"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#f47c20]/10 border border-[#f47c20]/20 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#f47c20]/20 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white text-xs font-mono uppercase tracking-wider mb-0.5">
                        {info.label}
                      </div>
                      <div className="text-white text-sm font-medium group-hover:text-[#f47c20] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#f47c20]">🌐</span> Follow Me
              </h3>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/5 border border-[#f47c20] rounded-xl px-4 py-2.5 text-white text-xs font-mono hover:bg-white/10 hover:border-[#f47c20]/30 hover:text-white transition-all"
                  >
                    <span>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-[#f47c20]/10 border border-[#f47c20] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono font-medium">
                  Currently Available
                </span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                I'm currently open for freelance projects and full-time
                opportunities. Let's build something great together!
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* MAP SECTION */}
      <SectionWrapper
        id="map"
        className="px-6 md:px-12 lg:px-16 py-16"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#f47c20]" />
            <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
              My Location
            </span>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126164.79580719779!2d115.17527!3d-8.67194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f1e7faa6da1%3A0x6544f2aa7a4c7517!2sDenpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
