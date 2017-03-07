var path = require('path');

module.exports = {
  entry: './js-ticker.js',
  output: {
    libraryTarget: "var",
    library: "JSTicker",
    filename: 'js-ticker.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    }]
  }
};
