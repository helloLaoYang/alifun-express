
const path = require('path')
const ProgressBar = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  target: 'node12',
  mode: 'production',
  entry: path.resolve(__dirname, '..', 'src'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'output'),
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
  resolve: {
    modules: [
      path.resolve(__dirname, '..', 'node_modules'),
    ]
  },
}
