"use client";

import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode | string;
  className?: string;
  disabled?: boolean;
  onClick: Function;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  variant,
  children,
  onClick,
  disabled = false,
  className = "w-40 h-12",
  type = "button",
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "bg-bit-sky shadow-primary group-active:shadow-primary-active text-white",
    secondary:
      "bg-bit-green shadow-secondary  group-active:shadow-secondary-active",
    danger: "bg-bit-orange shadow-danger  group-active:shadow-danger-active",
    ghost: "bg-white shadow-ghost  group-active:shadow-ghost-active",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : `cursor-pointer`;

  const styles = `${variantStyles[variant]} ${disabledStyles}`;

  return (
    <button
      type={type}
      disabled={disabled}
      className="relative group m-1 cursor-pointer"
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
    >
      <div className="absolute -left-1 -right-1 top-0 bottom-0 bg-gray-900"></div>
      <div className="absolute left-0 right-0 -top-1 -bottom-1 bg-gray-800"></div>
      <div
        className={`relative ${styles} z-10 ${className} flex items-center justify-center`}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
