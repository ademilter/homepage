const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media", // "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./app/**/*.tsx"],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
