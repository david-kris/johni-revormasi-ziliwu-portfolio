"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setIsVisible(v > 0.01);
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress bar di atas */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f47c20] via-[#ff9a4a] to-[#f47c20] z-[9998] origin-left"
        style={{ scaleX }}
      />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-32 right-8 z-[9997] w-11 h-11 rounded-full bg-[#f47c20] text-white flex items-center justify-center shadow-lg shadow-[#f47c20]/30 hover:bg-[#d96a10] transition-colors"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          scale: isVisible ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
      >
        ↑
      </motion.button>
    </>
  );
}
