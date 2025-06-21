import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        Buffer: 'readonly',
        console: 'readonly',
        describe: 'readonly',
        document: 'readonly',
        expect: 'readonly',
        exports: 'writable',
        fetch: 'readonly',
        global: 'readonly',
        it: 'readonly',
        jest: 'readonly',
        module: 'writable',
        navigator: 'readonly',
        process: 'readonly',
        require: 'readonly',
        test: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        window: 'readonly',
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'eslint-plugin': eslintPluginPlugin,
      'jsx-a11y': jsxA11yPlugin,
      perfectionist: perfectionistPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs['eslint-recommended'].overrides?.[0]?.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,

      // Typescript
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        },
      ],

      'react/prop-types': 0,
      // Javascript
      'max-len': 0,
      'no-unused-vars': 0,
      'no-var-requires': 0,
      // Perfectionist
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'natural',
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
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          customGroups: {
            value: {
              seolhun: '@seolhun/.+',
            },
          },
          environment: 'node',
          groups: [
            'type',
            ['builtin', 'external', 'seolhun'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'style',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['~/.+'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          customGroups: {
            ids: ['id', '_id'],
            keys: ['key', 'queryKey', 'mutationKey'],
            types: ['type'],
            intents: ['primary', 'secondary', 'neutral', 'faint', 'accent', 'info', 'success', 'warning', 'danger'],
            scales: ['xl', 'lg', 'md', 'sm', 'xs'],
            react: ['children', 'className', 'ref'],
            variants: ['scales', 'intents'],
          },
          groups: ['react', 'ids', 'keys', 'types', 'variants', 'scales', 'intents'],
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          styledComponents: true,
        },
      ],
      // Prettier
      'prettier/prettier': 'error',
      // React
      'react/display-name': 0,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
      react: {
        version: 'detect',
      },
    },
  },
];
