import React from "react";
import type { ISVGProps } from "@/types/index";

function IconMenu({ size = 28, ...props }: ISVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h16M4 16h16"
      />
    </svg>
  );
}

export default IconMenu;
