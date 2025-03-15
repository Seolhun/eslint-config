module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin', 'perfectionist', 'import', 'jsx-a11y'],
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        minimumDescriptionLength: 10,
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    // TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // JavaScript
    'max-len': 0,
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 0, // Using TypeScript version instead
    'no-var-requires': 0,
    'prefer-const': 'error',

    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'warn',
    // Import
    'import/order': 0, // Using perfectionist/sort-imports instead

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
    /**
     * @see https://eslint-plugin-perfectionist.azat.io/rules/
     */
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
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
        newlinesBetween: 'always',
        order: 'asc',
      },
    ],
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'natural',
        customGroups: {
          intents: ['primary', 'secondary', 'neutral', 'faint', 'accent', 'info', 'success', 'warning', 'danger'],
          scales: ['xl', 'lg', 'md', 'sm', 'xs'],
          variants: ['variants', 'intents', 'scales', 'sizes', 'states'],
          ids: ['id', '_id'],
          keys: ['key', 'queryKey', 'mutationKey'],
          react: ['children', 'ref', 'className'],
          types: ['type'],
        },
        groups: ['react', 'ids', 'keys', 'types', 'variants', 'scales', 'intents'],
        order: 'asc',
        partitionByNewLine: true,
        styledComponents: true,
      },
    ],

    // React
    'react/display-name': 0,
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',

    // Accessibility
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
