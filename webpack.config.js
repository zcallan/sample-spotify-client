const { join } = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

const dist = join( __dirname, './dist' );
const client = join( __dirname, './client' );

module.exports = env => {
  const isProd = env === 'prod';

  const plugins = [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: isProd && {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isProd ? 'production' : 'development',
      DEBUG: false,
    }),
  ];

  if ( isProd ) {
    plugins.push(
      new CleanWebpackPlugin( [dist] ),
    );
  }

  return {
    context: client,
    entry: client,
    output: {
      path: dist,
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    resolve: {
      modules: [
        client,
        'node_modules',
      ],
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
            'postcss-loader',
          ],
        },
      ],
    },
    node: {
      constants: false, // Fix bug where importing `constants` returns node constants
    },
    devServer: {
      contentBase: dist,
      port: process.env.PORT || 3000,
      historyApiFallback: true,
    },
    devtool: !isProd && 'inline-source-map',
    plugins,
    optimization: {
      minimize: isProd,
      minimizer: [
        new UglifyJSPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
            compress: {
              dead_code: true,
            },
          },
        }),
      ],
    },
  };
};
