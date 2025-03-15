#!/usr/bin/env node

/**
 * This script creates a proper TypeScript configuration for ESLint
 * to fix the "You have used a rule which requires type information" error.
 */

const fs = require('fs');
const path = require('path');

// Check if tsconfig.json exists
if (!fs.existsSync('tsconfig.json')) {
  console.log('Creating tsconfig.json...');
  const tsconfig = {
    compilerOptions: {
      declaration: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      jsx: 'react',
      lib: ['dom', 'dom.iterable', 'esnext'],
      module: 'commonjs',
      moduleResolution: 'node',
      outDir: './dist',
      rootDir: './src',
      skipLibCheck: true,
      strict: true,
      target: 'es2022',
    },
    exclude: ['node_modules', 'dist'],
    include: ['src/**/*'],
  };

  fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));
}

// Create or update tsconfig.eslint.json
console.log('Creating/updating tsconfig.eslint.json...');
const tsconfigEslint = {
  exclude: ['node_modules', 'dist'],
  extends: './tsconfig.json',
  include: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '.eslintrc.js'],
};

fs.writeFileSync('tsconfig.eslint.json', JSON.stringify(tsconfigEslint, null, 2));

// Update .eslintrc.js
console.log('Updating .eslintrc.js...');
const eslintrcPath = '.eslintrc.js';
let eslintrcContent = fs.readFileSync(eslintrcPath, 'utf8');

// Check if parserOptions.project is already set
if (!eslintrcContent.includes('project:')) {
  // Find the parserOptions section
  if (eslintrcContent.includes('parserOptions:')) {
    // Add project and tsconfigRootDir to existing parserOptions
    eslintrcContent = eslintrcContent.replace(
      /parserOptions:\s*{([^}]*)}/,
      "parserOptions: {$1  project: './tsconfig.eslint.json',\n  tsconfigRootDir: __dirname,\n}",
    );
  } else {
    // Add new parserOptions section
    eslintrcContent = eslintrcContent.replace(
      /module\.exports\s*=\s*{/,
      "module.exports = {\n  parserOptions: {\n    project: './tsconfig.eslint.json',\n    tsconfigRootDir: __dirname,\n  },",
    );
  }

  fs.writeFileSync(eslintrcPath, eslintrcContent);
}

console.log('Done! Your ESLint configuration should now work with TypeScript type checking.');
console.log('Try running: npm run lint:fix');
