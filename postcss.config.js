module.exports = {
    plugins: [
      // require('postcss-nested'),
      require('postcss-cssnext'),
      // require('autoprefixer'),
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      })
    ]
  }