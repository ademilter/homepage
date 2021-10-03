const colors = require('tailwindcss/colors');
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      keyframes: false,
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            'h2, h3, h4, h5': {
              'scroll-margin-top': spacing[32],
            },
            hr: {
              'border-color': colors.gray['200'],
            },
            '*': {
              color: 'inherit !important',
            },
          },
        },
        dark: {
          css: {
            // color: 'inherit'
            hr: {
              'border-color': colors.gray['700'],
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
