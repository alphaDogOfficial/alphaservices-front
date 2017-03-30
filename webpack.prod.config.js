var config = require('./webpack.config.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      npm_lifecycle_event: JSON.stringify('build')
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = config;
// "webpack-dev-server --history-api-fallback --inline --progress --port 4000"
// "node server.js"
// NODE_ENV='production' webpack -p --config webpack.prod.config.js