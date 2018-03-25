const { join } = require( 'path' );

const client = join( __dirname, './client' );

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    [
      'react-css-modules', {
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
          },
        },
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: '[path][local]_[hash:base64:4]',
        context: client,
      },
    ],
  ],
};
