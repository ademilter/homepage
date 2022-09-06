import React from "react";
import type { ISVGProps } from "@/types/index";

export default function IconPlay({ size = 22, ...props }: ISVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      {...props}
    >
      <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm36.4,110.7-48,32A8.7,8.7,0,0,1,112,168a8.5,8.5,0,0,1-3.8-.9A8,8,0,0,1,104,160V96a8,8,0,0,1,4.2-7.1,8.3,8.3,0,0,1,8.2.4l48,32a8,8,0,0,1,0,13.4Z" />
    </svg>
  );
}
