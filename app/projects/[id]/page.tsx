import { projects } from "@/lib/projects";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.desc,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-2">Project not found</h1>
          <Link href="/" className="text-[#f47c20] hover:underline text-sm font-mono">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <SectionWrapper  className="min-h-screen px-32 py-20">

      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/50 hover:text-[#f47c20] text-sm font-mono transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        Back to Home
      </Link>

      <div className="grid grid-cols-2 gap-12">

        {/* LEFT */}
        <div>

          {/* Project Visual */}
          <div className={`relative h-72 bg-gradient-to-br ${project.color} rounded-3xl flex items-center justify-center mb-6 overflow-hidden`}>
            <span className="text-8xl">{project.emoji}</span>
            <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${
              project.status === "Completed"
                ? "bg-green-500/20 border-green-500/40 text-green-400"
                : "bg-yellow-500/20 border-yellow-500/40 text-yellow-400"
            }`}>
              {project.status}
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: "Category", value: project.category },
              { label: "Year",     value: project.year },
              { label: "Status",   value: project.status },
            ].map((meta, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-xs text-white/40 font-mono uppercase mb-1">{meta.label}</div>
                <div className="text-sm font-bold text-white">{meta.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#f47c20]">⚡</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-[#f47c20]/10 border border-[#f47c20]/30 text-[#f47c20] text-xs font-mono px-3 py-1.5 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              className="flex-1 bg-[#f47c20] text-white py-3 rounded-xl text-sm font-bold text-center hover:bg-[#d96a10] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#f47c20]/20"
            >
              🚀 Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl text-sm font-bold text-center hover:bg-white/10 hover:border-[#f47c20]/30 hover:-translate-y-0.5 transition-all"
            >
              🐙 GitHub
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div>

          {/* Label */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#f47c20]" />
            <span className="text-[#f47c20] text-xs font-mono uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            {project.title}
          </h1>

          {/* Short Desc */}
          <p className="text-white/60 text-sm leading-relaxed mb-6 pb-6 border-b border-white/10">
            {project.desc}
          </p>

          {/* Long Desc */}
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <span className="text-[#f47c20]">📋</span> About This Project
          </h3>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            {project.longDesc}
          </p>

          {/* Features */}
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#f47c20]">✨</span> Key Features
          </h3>
          <ul className="flex flex-col gap-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-5 h-5 rounded-full bg-[#f47c20]/20 border border-[#f47c20]/40 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f47c20]" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

        </div>
      </div>

    </SectionWrapper>
  );
}