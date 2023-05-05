# eslint-config

An eslint configuration

## Installation

```sh
npm install --dev @seolhun/eslint-config
```

### Eslint Config

Create `.eslintrc` file and extend this eslint configuration.

```js
module.exports = {
  "extends": [
    "@seolhun/eslint-config",
  ],
}
```

### Prettier Config

Create `prettier.config.js` file and extend this prettier configuration.

```js
module.exports = require('@seolhun/eslint-config/prettier.config')
```

### Typescript Config

Create `tsconfig.eslint.json` extended `tsconfig.json`.

```json
{
  "extends": "./tsconfig.json",
  // Customize file path to watch eslint
  // "include:" [],
  // "exclude": [],
}
```
