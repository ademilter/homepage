module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-each': {},
    'postcss-custom-media': {
      importFrom: ['./src/styles/viewport.css']
    }
  }
}
