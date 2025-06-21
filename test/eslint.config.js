// Test ESLint config file using the shared config
import sharedConfig from '../index.js';

export default [
  ...sharedConfig,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
