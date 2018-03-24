const { join } = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

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
  ];

  if ( isProd ) {
    plugins.concat(
      new CleanWebpackPlugin( ['dist'] ),
      new webpack.EnvironmentPlugin( ['NODE_ENV', 'DEBUG'] ),
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
            'postcss-loader'
          ],
        }
      ],
    },
    devServer: {
      contentBase: dist,
      port: process.env.PORT || 3000,
      historyApiFallback: true,
    },
    devtool: !isProd && 'inline-source-map',
    plugins,
  };
};
