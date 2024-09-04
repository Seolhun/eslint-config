const eslintConfig = require('./index.js');

module.exports = Object.assign(eslintConfig, {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
})
