const path = require('path')
const rimraf = require('rimraf')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

rimraf(
  path.resolve(__dirname, '../output/*'),
  () => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        throw err
      }

      if (stats.hasErrors()) {
        console.log('  Build failed with errors.\n')
      }

      process.stdout.write(`${ stats.toString({
        colors: true,
        modules: false,
        children: false, // if you are using ts-loader, setting this to true will make typescript errors show up during build
        chunks: false,
        chunkModules: false,
      }) }\n\n`)

    })
  }
)
