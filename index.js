module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-alphabetical',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin',
    'perfectionist',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Custom
    'max-len': 0,
    'no-var-requires': 0,
    'no-unused-vars': 0,
    // React
    'react/prop-types': 0,
    'react/display-name': 0,
    // Typescript
    '@typescript-eslint/explicit-module-boundary-types': 0,
    /**
     * @see https://eslint-plugin-perfectionist.azat.io/rules/
     */
    'perfectionist/sort-imports': [
    'error',
      {
        'type': 'natural',
        'order': 'asc',
        'groups': [
          'side-effect',
          'type',
          ['builtin', 'external', 'seolhun'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'style',
          'object',
          'unknown'
        ],
        'custom-groups': {
          'value': {
            'seolhun': '@seolhun/**'
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [
          '~/**',
        ],
        'read-tsconfig': false
      }
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        'type': 'natural',
        'order': 'asc',
      },
    ],
    'perfectionist/sort-classes': [
      'error',
      {
        'type': 'natural',
        'order': 'asc',
        'groups': [
          'static-property',
          'private-property',
          'property',
          'constructor',
          'static-method',
          'private-method',
          'method'
        ]
      }
    ],
    /**
     * @see https://perfectionist.dev/rules/sort-objects
     */
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'alphabetical',
        order: 'asc',
        partitionByComment: false,
        partitionByNewLine: false,
        styledComponents: true,
        groups: [
          'ids',
          'keys',
          'types',
          'variants',
          'scales',
          'intents',
        ],
        customGroups: {
          react: ['children', 'className', 'ref'],
          keys: ['key', 'queryKey', 'mutationKey'],
          ids: ['id', '_id'],
          types: ['type'],
          variants: ['scales', 'intents'],
          scales: ['xl', 'lg', 'md', 'sm', 'xs'],
          intents: [
            'primary',
            'secondary',
            'neutral',
            'accent',
            'info',
            'success',
            'warning',
            'danger',
          ]
        },
        'partition-by-comment': 'Part:**',
      },
		],
    'perfectionist/sort-enums': [
      'error',
      {
        'type': 'natural',
        'order': 'asc',
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
    },
  }
}
