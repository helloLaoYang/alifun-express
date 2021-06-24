
const path = require('path')
const ProgressBar = require('progress-bar-webpack-plugin')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.resolve(__dirname, 'entry', 'fun.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'umd',
  },
  devtool: 'inline-source-map',
  plugins: [
    new ProgressBar(),
  ],
}
