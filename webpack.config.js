var webpack = require('webpack');
var path = require("path");

module.exports = {

  entry: {
    app: './app.ts',
  },

  resolve: {
    root: [path.join(__dirname, "bower_components")],
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      "react/addons": "react/dist/react-with-addons.js",
      "react": "react/dist/react-with-addons.js",
    }
  },

  output:{
    path: './dist',
    filename: '[name].js',
  },

  node: {
    fs: "empty"
  },

  // Source maps support (or 'inline-source-map' also works)
  devtool: 'source-map',

  // Add loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader?showRecompileReason=true&sync=true'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }

};
