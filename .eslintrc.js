const eslintConfig = require('./index.js');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
};
