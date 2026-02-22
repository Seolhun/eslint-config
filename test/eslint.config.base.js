// Test ESLint config file using base-only config (no React)
import baseConfig from '../base.js';

export default [
  ...baseConfig,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
