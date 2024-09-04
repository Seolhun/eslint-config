module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'eslint-plugin', 'perfectionist'],
  root: true,
  rules: {
    // Typescript
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // Javascript
    'max-len': 0,
    'no-unused-vars': 0,
    'no-var-requires': 0,
    // Perfectionist
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
        order: 'asc',
      },
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
      },
    ],
    /**
     * @see https://eslint-plugin-perfectionist.azat.io/rules/
     */
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'alphabetical',
        customGroups: {
          value: {
            seolhun: '@seolhun/**',
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
    // React
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    react: {
      version: 'detect',
    },
  },
};
