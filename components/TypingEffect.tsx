"use client";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Enthusiast",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="text-xl md:text-2xl font-semibold tracking-widest uppercase mt-2">
      <span className="text-white/70">{text}</span>
      <span className="animate-pulse text-[#f47c20] ml-0.5">|</span>
    </h2>
  );
}