"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/lib/projects";

const filters = ["All", "Web", "Mobile", "Design", "Full Stack"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <SectionWrapper
      id="projects"
      className="px-6 md:px-12 lg:px-16 py-16 md:py-20"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#9b59b6]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        className="text-center mb-8 md:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#f47c20]" />
          <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
            My Work
          </span>
          <div className="w-8 h-px bg-[#f47c20]" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Recent <span className="text-[#f47c20]">Projects</span>
        </h2>
        <p className="text-white text-sm mt-4 max-w-lg mx-auto leading-relaxed px-4 md:px-0">
          A collection of projects I've built with passion, precision, and
          modern technologies.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10 flex-wrap px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs font-mono font-medium transition-all ${
              active === f
                ? "bg-[#f47c20] text-white shadow-lg shadow-[#f47c20]/20"
                : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#f47c20]/30 hover:-translate-y-1 transition-all"
            >
              {/* Project Visual */}
              <div
                className={`relative h-40 md:h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden group`}
              >
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay saat hover — bukan transparent */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

                {/* Category badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 z-10">
                  <span className="text-white text-xs font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Hover — View Project */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <Link
                    href={`/projects/${project.id}`}
                    className="bg-[#f47c20] text-white py-2 px-2 rounded-full text-xs font-mono font-medium flex items-center "
                  >
                    View Project →
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-5">
                <h3 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-[#f47c20] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white text-xs leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-white/5 border border-white/10 text-white text-xs font-mono px-2 md:px-2.5 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <Link
                    href={`/projects/${project.id}`}
                    className="bg-[#f47c20] text-white py-2 px-2 rounded-full text-xs font-mono font-medium flex items-center "
                  >
                    View Project →
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xs font-bold hover:text-white transition"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* View All */}
      <motion.div
        className="text-center mt-8 md:mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button className="bg-[#f47c20] border border-white/10 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-[#f47c20]/30 hover:text-white transition-all cursor-pointer">
          View All Projects →
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
