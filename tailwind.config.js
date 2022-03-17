const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      keyframes: false,
    },
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
};
