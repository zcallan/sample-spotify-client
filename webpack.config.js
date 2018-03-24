const { join } = require( 'path' );
const HtmlWebPackPlugin = require("html-webpack-plugin");

const dist = join( __dirname, '../dist' );

module.exports = {
  entry: {
    app: './client/Root.jsx',
  },
  output: {
    path: dist,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
  devServer: {
    contentBase: dist,
    port: process.env.PORT || 3000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
    }),
  ]
};
