// ESLint config for this project
import sharedConfig from './index.js';

export default [
  ...sharedConfig,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.changeset/**'],
  },
];
