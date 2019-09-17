/* eslint-disable @typescript-eslint/no-var-requires */

const {
  override,
  useEslintRc,
  // addDecoratorsLegacy,
  addWebpackPlugin,
} = require('customize-cra');

const path = require('path');
const webpack = require('webpack');

// const addMyPlugin = config => {
//   config.plugins.push(new MyPlugin())
//   return config
// }

const BASE_URL = "'http://test.com'";

module.exports = override(

  // addMyPlugin,

  // reminding myself because I might need this:
  // addDecoratorsLegacy(),

  useEslintRc(path.resolve(__dirname, '.eslintrc')),

  addWebpackPlugin(new webpack.DefinePlugin({ __BASE__: BASE_URL }))
);
