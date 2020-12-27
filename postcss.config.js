module.exports = {
  plugins: {
    "autoprefixer": {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(min-width: 768px)' }
        },
        {
          customMedia: { '--d': '(min-width: 992px)' }
        }
      ]
    }
  }
}
