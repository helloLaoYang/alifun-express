
const path = require('path')
const ProgressBar = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: path.resolve(__dirname, 'entry', 'fun.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  plugins: [
    new ProgressBar(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
  },
}
