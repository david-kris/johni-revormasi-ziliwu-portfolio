"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Button from "./ui/Button";

type NavItem = {
  id: string;
  label: string;
  href?: string;
  scroll: boolean;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/", scroll: true },
  { id: "services", label: "Services", scroll: true },
  { id: "projects", label: "Projects", scroll: true },
  { id: "about", label: "About", href: "/about", scroll: false },
  { id: "contact", label: "Contact", href: "contact", scroll: false },
];

export default function Navbar() {
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  // =========================
  // Navbar scroll background
  // =========================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // =========================
  // Sync active route (About page, dll)
  // =========================
  useEffect(() => {
    const matched = navItems.find((item) => {
      if (item.scroll) return false;
      return item.href === pathname;
    });

    if (matched) {
      setActive(matched.id);
      return;
    }

    // Kalau masuk homepage & masih di atas
    if (pathname === "/" && !pendingSection) {
      setActive("home");
    }
  }, [pathname]);

  // =========================
  // Scroll spy homepage
  // =========================
  useEffect(() => {
    if (!isHomePage) return;

    const handleSpy = () => {
      const pos = window.scrollY + 120;

      navItems.forEach((item) => {
        if (!item.scroll) return;

        const el = document.getElementById(item.id);

        if (!el) return;

        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(item.id);
        }
      });
    };

    handleSpy();

    window.addEventListener("scroll", handleSpy);

    return () => {
      window.removeEventListener("scroll", handleSpy);
    };
  }, [isHomePage]);

  // =========================
  // Animated pill indicator
  // =========================
  useEffect(() => {
    const index = navItems.findIndex((i) => i.id === active);

    const el = itemRefs.current[index];

    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    } else {
      setIndicator({
        left: 0,
        width: 0,
      });
    }
  }, [active]);

  // =========================
  // Navigation handler
  // =========================
  const handleNav = (item: NavItem) => {
    setOpen(false);

    // ======================
    // Non-scroll page
    // ======================
    if (!item.scroll) {
      setActive(item.id);

      if (item.href) {
        router.push(item.href);
      }

      return;
    }

    // ======================
    // Scroll items
    // ======================
    setActive(item.id);
    setPendingSection(item.id);

    // Kalau dari halaman lain
    if (!isHomePage) {
      router.push("/");

      setTimeout(() => {
        const el = document.getElementById(item.id);

        if (el) {
          window.scrollTo({
            top: el.offsetTop - 20,
            behavior: "smooth",
          });

          // reset pending setelah scroll mulai
          setTimeout(() => {
            setPendingSection(null);
          }, 500);
        }
      }, 300);

      return;
    }

    // Kalau sudah di homepage
    const el = document.getElementById(item.id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 20,
        behavior: "smooth",
      });
      // reset pending setelah scroll mulai
      setTimeout(() => {
        setPendingSection(null);
      }, 500);
    }
  };

  // =========================
  // Active checker
  // =========================
  const isActive = (item: NavItem) => {
    return active === item.id;
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-16 lg:px-32
        transition-all duration-300
        ${
          scrolled
            ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/10"
            : "py-5 bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div
        onClick={() => handleNav(navItems[0])}
        className="
          text-white font-bold text-lg md:text-xl
          cursor-pointer transition-colors
          hover:text-[#f47c20]
        "
      >
        Mrstudio<span className="text-[#f47c20]">.</span>
      </div>

      {/* Desktop Menu */}
      <div
        className="
          hidden md:flex relative items-center gap-1
          bg-white/5 border border-white/10
          rounded-full px-3 py-2
          backdrop-blur-md
        "
      >
        {/* Active Pill */}
        {indicator.width > 0 && (
          <div
            className="
              absolute top-1 bottom-1
              bg-[#f47c20]/20
              border border-[#f47c20]/30
              rounded-full
              transition-all duration-300
            "
            style={{
              left: indicator.left,
              width: indicator.width,
            }}
          />
        )}

        {navItems.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onClick={() => handleNav(item)}
            className={`
              relative z-10
              px-3 py-1
              text-sm font-medium
              transition-colors
              ${
                isActive(item)
                  ? "text-[#f47c20]"
                  : "text-white/80 hover:text-white"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <Button
          variant="primary"
          onClick={() => handleNav(navItems.find((i) => i.id === "contact")!)}
        >
          Contact
        </Button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[75%]
          bg-black/90 backdrop-blur-xl
          border-l border-white/10
          flex flex-col gap-6 p-8
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="
            self-end text-2xl mb-4
            text-white/50 hover:text-white
          "
        >
          ✕
        </button>

        {/* Mobile Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item)}
            className={`
              text-left text-lg font-medium
              transition-colors
              ${
                isActive(item)
                  ? "text-[#f47c20]"
                  : "text-white hover:text-[#f47c20]"
              }
            `}
          >
            {item.label}
          </button>
        ))}

        {/* Mobile CTA */}
        <Button
          variant="primary"
          onClick={() => handleNav(navItems.find((i) => i.id === "contact")!)}
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
}
