export default function Brands() {
  const brands = [
    { icon: "🅰", bg: "bg-gray-100" },
    { icon: "🦊", bg: "bg-gray-100" },
    { icon: "🔴", bg: "bg-gray-100" },
    { icon: "💙", bg: "bg-gray-100" },
  ];

  return (
    <section className="px-16 py-6 flex items-center gap-4 border-b border-gray-100">

      {/* Label */}
      <span className="text-xs text-gray-400 font-medium whitespace-nowrap mr-2">
        Work For All This Brand & Client
      </span>

      {/* Brand Icons */}
      {brands.map((brand, i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full ${brand.bg} flex items-center justify-center text-lg shadow-sm`}
        >
          {brand.icon}
        </div>
      ))}

      {/* Upwork */}
      <div className="bg-[#14a800] text-white rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-1">
        <span className="font-black">Up</span>work
      </div>

    </section>
  );
}