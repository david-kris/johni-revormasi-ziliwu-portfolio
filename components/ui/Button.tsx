import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `
        px-6 py-3 rounded-full
        font-semibold
        transition-all duration-300
        cursor-pointer
        `,
        variant === "primary" &&
          `
          bg-[#f47c20]
          text-white
          hover:scale-105
          shadow-lg shadow-[#f47c20]/30
          `,
        variant === "outline" &&
          `
          border-2 border-[#f47c20]
          text-white/80
          hover:bg-[#f47c20]/10
          hover:text-white
          hover:scale-105
          `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}