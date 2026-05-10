const techs = [
  { name: "React",      icon: "⚛️" },
  { name: "Next.js",    icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js",    icon: "🟢" },
  { name: "Laravel",    icon: "🔴" },
  { name: "MySQL",      icon: "🐬" },
  { name: "MongoDB",    icon: "🍃" },
  { name: "Tailwind",   icon: "🌊" },
  { name: "Git",        icon: "🐙" },
  { name: "Docker",     icon: "🐳" },
];

export default function TechStack() {
  return (
    <div className="relative overflow-hidden w-full">

      {/* Fade kiri & kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/10 to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex gap-4 w-max animate-marquee">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-sm rounded-xl px-4 py-2 flex-shrink-0 hover:bg-white/20 hover:border-[#f47c20]/50 transition-all cursor-default"
          >
            <span className="text-base">{tech.icon}</span>
            <span className="text-white/70 text-xs font-mono font-medium whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}