"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { FaWhatsapp } from "react-icons/fa";



const skills = [
  { name: "Next.js", level: 90, icon: "▲" },
  { name: "React", level: 90, icon: "⚛️" },
  { name: "TypeScript", level: 80, icon: "🔷" },
  { name: "Tailwind CSS", level: 95, icon: "🌊" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Laravel", level: 75, icon: "🔴" },
  { name: "MySQL", level: 80, icon: "🐬" },
  { name: "MongoDB", level: 70, icon: "🍃" },
];

const experiences = [
  {
    year: "13 April 2026 - Present",
    title: "Junior Web Developer",
    company: "PT Konsuling ID - Bali",
    desc: "Building modern web applications for clients across various industries using Next.js, Laravel, and other modern technologies.",
    type: "work",
  },
  {
    year: "1 April 2025 - 31 Agustus 2025",
    title: "Junior Web Developer - Freelancer",
    company: "Yayasan Hasnur Centre - Kalimantan Selatan",
    desc: "Building modern web applications for clients across various industries using Next.js, Laravel, and other modern technologies.",
    type: "work",
  },
  {
    year: "16 Febuary 2024 - 31 Juni 2024",
    title: "Full Stack Developer",
    company: "PT Asuransi Sinarmas - Jakarta",
    desc: "Building modern web applications for clients across various industries using Next.js, Laravel, and other modern technologies.",
    type: "work",
  },
  {
    year: "07 September 2023 - 07 Desember 2023",
    title: "Intern Web Developer",
    company: "PT. Digital Kreatif - Yogyakarta",
    desc: "Developed responsive and interactive UI components using React and Tailwind CSS for enterprise-level applications.",
    type: "work",
  },
  {
    year: "16 Febuary 2023 - 31 Juni 2023",
    title: "Intern Web Developer",
    company: "Yayasan Hasnur Centre - Kalimantan Selatan",
    desc: "Started professional career building web applications using HTML, CSS, JavaScript, and PHP.",
    type: "work",
  },
];

const educations = [
  {
    year: "2020 - 2024",
    title: "S1 Teknik Informatika",
    institution: "Universitas Kristen Immanuel - Yogyakarta",
    desc: "Focused on software engineering, web development, and database management systems.",
    type: "education",
  },
  {
    year: "2024",
    title: "Full-Stack Laravel 11 Next JS 14: Web Rent House",
    institution: "BuildWithAngga",
    desc: "Full-Stack house rental web application built with Laravel 11 and Next.js 14, featuring modern UI, secure authentication, and responsive performance",
    type: "education",
  },
  {
    year: "2024",
    title: "Certified Developer",
    institution: "Alibaba",
    desc: "Earned a professional developer certification from Alibaba Cloud, demonstrating skills in modern web development and cloud technologies.",
    type: "education",
  },
  {
    year: "2023",
    title: "Belajar Membuat Aplikasi React JS",
    institution: "Dicoding Indonesia",
    desc: "Completed intensive bootcamp covering modern web development technologies and best practices.",
    type: "education",
  },
  {
    year: "2023",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    institution: "Dicoding Indonesia",
    desc: "Completed a beginner front-end web development course focused on HTML, CSS, and JavaScript fundamentals.",
    type: "education",
  },
];

const stats = [
  { number: "2+", label: "Years Experience", icon: "🏆" },
  { number: "10+", label: "Projects Done", icon: "🚀" },
  { number: "10+", label: "Happy Clients", icon: "🤝" },
  { number: "100%", label: "Commitment", icon: "💯" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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



export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <SectionWrapper
        id="about"
        className="min-h-screen px-6 md:px-12 lg:px-16 py-32"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* LEFT — Photo */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#f47c20] blur-3xl opacity-20 scale-110 rounded-3xl" />

            {/* Photo */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/30 z-10">
              {/* Background Glow */}
              <div className="absolute inset-0">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-52 h-52 bg-[#f47c20]/30 blur-3xl rounded-full" />
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Decorative Grid */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />

              {/* Content */}
              <motion.div
                variants={item}
                className="relative h-full flex flex-col items-center justify-center"
              >
                {/* Floating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-52 h-52 rounded-full border border-dashed border-[#f47c20]/30"
                />

                {/* Profile Glow */}
                <div className="absolute w-44 h-44 rounded-full bg-[#f47c20]/20 blur-3xl" />

                {/* Profile Image */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-[3px] border-[#f47c20]/60 shadow-2xl shadow-[#f47c20]/20"
                >
                  <Image
                    src="/images/portfolio.webp"
                    alt="Johni Revormasi Ziliwu"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Badge Available */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-2.5 z-20 whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-mono">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Label */}
            <motion.div
              className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-8 h-px bg-[#f47c20]" />
              <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
                About Me
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="
    text-4xl md:text-5xl
    font-extrabold
    leading-tight mb-4
    tracking-tight
  "
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span
                className="
      bg-gradient-to-r
      from-white
      via-white
      to-white/60
      bg-clip-text
      text-transparent
    "
              >
                Johni Revormasi
              </span>

              <br />

              <span
                className="
      bg-gradient-to-r
      from-[#f47c20]
      via-orange-400
      to-yellow-300
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_20px_rgba(244,124,32,0.35)]
    "
              >
                Ziliwu
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-white text-xl font-bold mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Web Developer
            </motion.p>

            {/* Bio */}
            <motion.p
              className="text-white text-md leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Saya adalah seorang web developer yang passionate dalam membangun
              aplikasi digital yang bersih, scalable, dan user-friendly. Dengan
              pengalaman lebih dari 2 tahun di industri teknologi, saya telah
              membantu berbagai client mewujudkan visi digital mereka.
            </motion.p>

            <motion.p
              className="text-white text-md leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Saya percaya bahwa kode yang baik bukan hanya yang berjalan dengan
              benar, tetapi juga yang mudah dibaca, dimaintain, dan dikembangkan
              lebih lanjut.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex items-center gap-4 justify-center lg:justify-start"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a
                href="/cv.pdf"
                download
                className="bg-[#f47c20] text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-[#d96a10] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#f47c20]/20"
              >
                📄 Download CV
              </a>
              <a
                href="https://wa.me/625215644688"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row  items-center gap-2 bg-white/5 border border-[#f47c20] text-white px-4 py-1.5 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-[#f47c20]/10 hover:-translate-y-0.5 transition-all w-full sm:w-auto text-center"
              >
                <FaWhatsapp className="text-white text-3xl" /> WhatsApp Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-[#f47c20] rounded-2xl p-5 text-center hover:bg-white/10 hover:border-[#f47c20]/30 hover:-translate-y-1 transition-all"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-white font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* SKILLS SECTION */}
      <SectionWrapper
        className="px-6 md:px-12 lg:px-16 py-20"
      >
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f47c20]" />
            <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
              What I Know
            </span>
            <div className="w-8 h-px bg-[#f47c20]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Skills & <span className="text-[#f47c20]">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-[#f47c20] rounded-2xl p-5 hover:border-[#f47c20]/30 transition-all"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-bold text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-white">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* EXPERIENCE & EDUCATION */}
      <SectionWrapper
        
        className="px-6 md:px-12 lg:px-16 py-20"
      >
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#f47c20]" />
            <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
              My Journey
            </span>
            <div className="w-8 h-px bg-[#f47c20]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Experience & <span className="text-[#f47c20]">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#f47c20]">💼</span> Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-10"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#f47c20]/20 border border-[#f47c20]/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#f47c20]" />
                    </div>

                    <div className="bg-white/5 border border-[#f47c20] rounded-2xl p-5 hover:border-[#f47c20]/30 transition-all">
                      <span className="text-[#f47c20] text-sm font-bold mb-2 block">
                        {exp.year}
                      </span>
                      <h4 className="text-md font-bold text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-white text-xs font-mono mb-3">
                        {exp.company}
                      </p>
                      <p className="text-white text-sm font-mono leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#f47c20]">🎓</span> Education &
              Certifications
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />

              <div className="flex flex-col gap-8">
                {educations.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative pl-10"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#f47c20]/20 border border-[#f47c20]/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#f47c20]" />
                    </div>

                    <div className="bg-white/5 border border-[#f47c20] rounded-2xl p-5 hover:border-[#f47c20]/30 transition-all">
                      <span className="text-[#f47c20] text-sm font-bold mb-2 block">
                        {edu.year}
                      </span>
                      <h4 className="text-md font-bold text-white mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-white text-xs font-mono mb-3">
                        {edu.institution}
                      </p>
                      <p className="text-white text-sm font-mono leading-relaxed">
                        {edu.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}