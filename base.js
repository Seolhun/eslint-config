import js from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import prettierPlugin from 'eslint-plugin-prettier';

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
      perfectionist: perfectionistPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs['eslint-recommended'].overrides?.[0]?.rules,
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
          customGroups: [
            {
              groupName: 'type-seolhun',
              elementNamePattern: '@seolhun/.+',
              modifiers: ['type'],
            },
            {
              groupName: 'seolhun',
              elementNamePattern: '@seolhun/.+',
            },
          ],
          environment: 'node',
          groups: [
            ['type-builtin', 'type-external', 'type-seolhun'],
            ['builtin', 'external', 'seolhun'],
            'type-internal',
            'internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['parent', 'sibling', 'index'],
            'style',
            'side-effect',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['^~/.+'],
          newlinesBetween: 1,
          order: 'asc',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          customGroups: [
            {
              groupName: 'react',
              elementNamePattern: '^(children|className|ref)$',
            },
            {
              groupName: 'ids',
              elementNamePattern: '^(id|_id)$',
            },
            {
              groupName: 'keys',
              elementNamePattern: '^(key|queryKey|mutationKey)$',
            },
            {
              groupName: 'types',
              elementNamePattern: '^type$',
            },
            {
              groupName: 'intents',
              elementNamePattern: '^(primary|secondary|neutral|faint|accent|info|success|warning|danger)$',
            },
            {
              groupName: 'scales',
              elementNamePattern: '^(xl|lg|md|sm|xs)$',
            },
            {
              groupName: 'variants',
              elementNamePattern: '^(scales|intents)$',
            },
          ],
          groups: ['react', 'ids', 'keys', 'types', 'variants', 'scales', 'intents'],
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          styledComponents: true,
        },
      ],

      // Prettier
      'prettier/prettier': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
];
