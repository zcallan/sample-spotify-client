const { join } = require( 'path' );
const HtmlWebPackPlugin = require("html-webpack-plugin");

const dist = join( __dirname, './dist' );
const client = join( __dirname, './client' );

module.exports = {
  context: client,
  entry: client,
  output: {
    path: dist,
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[path][local]_[hash:base64:4]',
            },
          },
          'sass-loader',
          'postcss-loader'
        ],
      }
    ],
  },
  devServer: {
    contentBase: dist,
    port: process.env.PORT || 3000,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
  ]
};
