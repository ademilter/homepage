const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media", // "class",
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./layouts/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Tiempos", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
