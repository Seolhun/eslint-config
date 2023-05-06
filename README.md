# ESLint Configuration

This is an ESLint configuration package that you can use in your JavaScript or TypeScript projects.

## Installation

To install this package, run the following command:

```sh
npm install --save-dev @seolhun/eslint-config eslint-plugin-eslint-plugin eslint-plugin-prettier @typescript-eslint/eslint-plugin
```

### Using the ESLint Configuration

To use this configuration, create an `.eslintrc.js` file in the root directory of your project, if you haven't already. Then, extend this configuration in the `.eslintrc` file, like so:

```js
// .eslintrc.js
module.exports = {
  "extends": [
    "@seolhun/eslint-config",
  ],
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

Make sure to update the file paths to match the structure of your project.

I hope this helps! Let me know if you have any further questions.
