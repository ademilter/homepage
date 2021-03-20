const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.gray
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
