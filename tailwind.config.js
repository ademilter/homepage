const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
  darkMode: 'media',
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
