import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "default", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition",
        variant === "default" && "bg-[var(--brand-primary)] text-white hover:opacity-90",
        variant === "outline" && "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
