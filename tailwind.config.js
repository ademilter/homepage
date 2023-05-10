const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // "class",
  content: [
    "./src/app/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  safelist: [
    {
      pattern: /grid-cols-(2|3|4|5|6)/, // this config for blog post photo grid
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
