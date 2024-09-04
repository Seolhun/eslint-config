import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginRectHook from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const files = ['**/*.{js,jsx,ts,tsx,mjs,cjs}'];
const languageOptions = {
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.jest,
    ...globals.es2021,
  },
  parserOptions: {
    parser: tseslint.parser,
    projectService: {
      defaultProject: 'tsconfig.eslint.json',
    },
  },
};

export default [
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files,
    languageOptions,
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'prettier': eslintPluginPrettier.configs.recommended,
      'react': eslintPluginReact.configs.recommended,
      'react-hooks': eslintPluginRectHook,
    },
    rules: {
      // Typescript
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // Custom
      'max-len': 'off',
      'no-unused-vars': 'off',
      'no-var-requires': 'off',
      'react/display-name': 'off',
      // React
      'react/prop-types': 'off',
    },
  },
  {
    files,
    languageOptions,
    plugins: {
      perfectionist: eslintPluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'alphabetical',
          groups: [
            'static-property',
            'private-property',
            'property',
            'constructor',
            'static-method',
            'private-method',
            'method',
          ],
          order: 'asc',
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          type: 'alphabetical',
          ignoreCase: true,
          order: 'asc',
          partitionByComment: false,
          sortByValue: false,
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          customGroups: {
            value: {
              seolhun: '@seolhun/**',
            },
          },
          groups: [
            'side-effect',
            'type',
            ['builtin', 'external', 'seolhun'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'style',
            'object',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['~/**'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'alphabetical',
          customGroups: {
            intents: ['primary', 'secondary', 'neutral', 'accent', 'info', 'success', 'warning', 'danger'],
            scales: ['xl', 'lg', 'md', 'sm', 'xs'],
            ids: ['id', '_id'],
            keys: ['key', 'queryKey', 'mutationKey'],
            react: ['children', 'className', 'ref'],
            types: ['type'],
            variants: ['scales', 'intents'],
          },
          groups: ['react', 'ids', 'keys', 'types', 'variants', 'scales', 'intents'],
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          styledComponents: true,
        },
      ],
    },
  },
];
