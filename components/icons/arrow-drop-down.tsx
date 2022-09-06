import React from "react";
import type { ISVGProps } from "@/types/index";

export default function IconArrowDropDown({ size = 24, ...props }: ISVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      {...props}
    >
      <path d="M22.95 28.95 16.6 22.6q-.7-.7-.325-1.625.375-.925 1.375-.925h12.7q1 0 1.375.925T31.4 22.6l-6.35 6.35q-.25.25-.5.35-.25.1-.55.1-.3 0-.55-.1-.25-.1-.5-.35Z" />
    </svg>
  );
}
