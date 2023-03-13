module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    "plugin:react-hooks/recommended"
  ],
	plugins: [
		'react',
		'@typescript-eslint',
		'eslint-plugin',
    'import',
	],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Custom
    'max-len': 0,
    'no-var-requires': 0,
		'no-unused-vars': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern:
              '@(assets|components|containers|features|pages|models|constants|hooks|utils|vendors)/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'external'],
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // React
    'react/prop-types': 0,
		'react/display-name': 0,
    // Typescript
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  settings: {
    'prettier/prettier': 'error',
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect',
    }
  }
}
