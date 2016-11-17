var webpack        = require('webpack')
  , path           = require('path')
  , UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
  , env            = process.env.WEBPACK_ENV
  ;

var libraryName = 'wtfetch'
  , outputFile  = ''
  , plugins     = []
  ;

// configure output for proper build type
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

module.exports = {
  entry: path.join(__dirname, 'src','index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}
