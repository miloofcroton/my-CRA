/* eslint-disable */

const { override, useEslintRc } = require('customize-cra');
const path = require('path');

module.exports = override(
  // reminding myself because I might need this:
  // addDecoratorsLegacy(),

  useEslintRc(path.resolve(__dirname, '.eslintrc'))
);
