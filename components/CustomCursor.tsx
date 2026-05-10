"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hanya tampil di desktop
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Follower dengan delay
    let rafId: number;
    let fx = 0;
    let fy = 0;

    const animate = () => {
      fx += (position.x - fx) * 0.12;
      fy += (position.y - fy) * 0.12;
      setFollower({ x: fx, y: fy });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Hover detection
    const onHoverStart = () => setIsHovering(true);
    const onHoverEnd = () => setIsHovering(false);

    const interactables = document.querySelectorAll(
      "a, button, [role='button'], input, textarea"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart);
      el.addEventListener("mouseleave", onHoverEnd);
    });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
    };
  }, [position.x, position.y]);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0, ease: "linear" }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>

      {/* Follower ring */}
      <motion.div
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        animate={{
          x: follower.x - (isHovering ? 24 : 16),
          y: follower.y - (isHovering ? 24 : 16),
          scale: isClicking ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.div
          className="rounded-full border border-[#f47c20]"
          animate={{
            width:  isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering ? "#f47c20" : "rgba(244,124,32,0.5)",
            backgroundColor: isHovering ? "rgba(244,124,32,0.1)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}