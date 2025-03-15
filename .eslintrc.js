const eslintConfig = require('./index.js');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
