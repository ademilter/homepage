const colors = require('tailwindcss/colors')
const config = require('tailwindcss/defaultConfig')

module.exports = {
  purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
  darkMode: 'media',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...config.theme.fontFamily.sans]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
