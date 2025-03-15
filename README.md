# ESLint Configuration

This is an enhanced ESLint configuration package that you can use in your JavaScript or TypeScript projects, with a focus on React development best practices.

## Features

- TypeScript support with strict type checking
- React and React Hooks best practices
- Accessibility (a11y) rules
- Import sorting and organization
- Code formatting with Prettier
- Modern JavaScript features (ES2022)
- Consistent code style enforcement

## Installation

To install this package, run the following command:

```sh
# Using npm
npm install --save-dev @seolhun/eslint-config

# Using yarn
yarn add --dev @seolhun/eslint-config

# Using pnpm
pnpm add --save-dev @seolhun/eslint-config
```

This package has peer dependencies that you'll need to install:

```sh
npm install --save-dev eslint@^8 prettier@^3 typescript@^5

# pnpm
pnpm add --save-dev eslint@^8 prettier@^3 typescript@^5
```

### Using the ESLint Configuration

To use this configuration, create an `.eslintrc.js` file in the root directory of your project, if you haven't already. Then, extend this configuration in the `.eslintrc` file, like so:

```js
// .eslintrc.js
module.exports = {
  "extends": [
    "@seolhun/eslint-config",
  ],
  // Optional: Override rules that don't work for your project
  "rules": {
    // Your rule overrides here
  }
}
```

### Using the Prettier Configuration

This package also includes a Prettier configuration that you can use in your project. To use it, create a `prettier.config.js` file in the root directory of your project and extend this configuration, like so:

```js
module.exports = require('@seolhun/eslint-config/prettier.config')
// or
module.exports = Object.assign(require('@seolhun/eslint-config/prettier.config'), {
 // Your prettier config
})
```

### Using the TypeScript Configuration

If you are using TypeScript in your project, you can extend your `tsconfig.eslint.json` file from your `tsconfig.json` file and customize it as necessary. Here is an example `tsconfig.eslint.json` file:

```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  "exclude": ["node_modules"]
}
```

Then, update your `.eslintrc.js` file to use this TypeScript configuration:

```js
// .eslintrc.js
module.exports = {
  "extends": [
    "@seolhun/eslint-config",
  ],
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "tsconfigRootDir": __dirname,
  }
}
```

## Testing Before Publishing

This package includes a testing setup to ensure the ESLint configuration works correctly before publishing. The tests validate that the rules correctly identify both good and bad code patterns.

### Running Tests

To run the tests:

```sh
npm test
```

This will run the test script that lints the test fixtures in the `test/fixtures` directory. The test fixtures include:

- `good-*.ts/tsx` - Files that should pass linting with no errors
- `bad-*.ts/tsx` - Files that should intentionally fail linting to verify rules are working

### Adding New Tests

To add new test cases:

1. Create a new file in the `test/fixtures` directory
2. Name it `good-*.ts/tsx` for code that should pass linting, or `bad-*.ts/tsx` for code that should fail
3. Run `npm test` to verify the test works as expected

### Pre-publish Testing

The package is configured to automatically run tests before publishing using the `prepublishOnly` script. This ensures that the ESLint configuration is working correctly before it's published.

## Included Rules and Plugins

This configuration includes the following ESLint plugins and configurations:

- `eslint:recommended` - ESLint's recommended rules
- `@typescript-eslint/recommended` - TypeScript ESLint recommended rules
- `@typescript-eslint/recommended-requiring-type-checking` - TypeScript ESLint rules that require type information
- `plugin:import/recommended` and `plugin:import/typescript` - Import rules
- `plugin:react/recommended` and `plugin:react/jsx-runtime` - React rules
- `plugin:react-hooks/recommended` - React Hooks rules
- `plugin:jsx-a11y/recommended` - Accessibility rules
- `plugin:prettier/recommended` - Prettier integration

## Scripts

Add these scripts to your `package.json` file for easy linting:

```json
"scripts": {
  "lint": "eslint --ext .js,.jsx,.ts,.tsx ./src",
  "lint:fix": "eslint --ext .js,.jsx,.ts,.tsx ./src --fix",
  "format": "prettier --write './**/*.{ts,tsx,js,jsx,json,md}'"
}
```

## License

MIT
