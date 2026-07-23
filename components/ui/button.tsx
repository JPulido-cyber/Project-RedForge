import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib";

const buttonVariants = {
  primary:
    "border-transparent bg-brand text-brand-contrast hover:bg-brand-strong",
  secondary:
    "border-border bg-surface-raised text-text hover:bg-surface-subtle",
  ghost: "border-transparent bg-transparent text-text hover:bg-surface-subtle",
} as const;

const buttonSizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof buttonSizes;
  variant?: keyof typeof buttonVariants;
}

export function Button({
  className,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    />
  );
}
