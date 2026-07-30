import { clsx } from "clsx";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-solar-600 text-white hover:bg-solar-700 shadow-md shadow-solar-600/20",
  secondary: "bg-navy-800 text-white hover:bg-navy-900",
  outline: "border-2 border-solar-600 text-solar-700 hover:bg-solar-50",
  white: "bg-white text-solar-700 hover:bg-gray-50 shadow-md",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={props.disabled} {...props}>
      {children}
    </button>
  );
}
