import type { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./post/**/*.mdx", "./public/**/*.svg"],
  safelist: [
    {
      pattern: /grid-cols-(2|3|4|5|6)/, // this config for blog post photo grid
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-display)"],
      },
    },
  },
} satisfies Config;
