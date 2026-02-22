# @seolhun/eslint-config

ESLint v9+ flat config for TypeScript, React, and Node.js projects with Prettier integration.

## Features

- ESLint v9+ flat config (ESM)
- Modular: `base` (TS/Node) + `react` (FE) 분리
- TypeScript support (@typescript-eslint)
- React / React Hooks / JSX A11y support
- Prettier integration
- Perfectionist plugin (v5) for consistent code sorting

## Requirements

- Node.js >= 20
- ESLint >= 9
- TypeScript >= 5

## Installation

```sh
pnpm add -D @seolhun/eslint-config eslint prettier typescript
```

FE (React) 프로젝트는 React 플러그인도 설치:

```sh
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

## Usage

### FE (Next.js / React) - 전체 config

```js
// eslint.config.js (or eslint.config.mjs for CJS projects)
import config from '@seolhun/eslint-config';

export default [
  ...config,
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**'],
  },
];
```

### BE (NestJS / Node.js) - base config만

React 플러그인 불필요. base만 사용:

```js
// eslint.config.js (or eslint.config.mjs for CJS projects)
import baseConfig from '@seolhun/eslint-config/base';

export default [
  ...baseConfig,
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
```

### Modular 사용 (base + react 명시적 합성)

```js
import baseConfig from '@seolhun/eslint-config/base';
import reactConfig from '@seolhun/eslint-config/react';

export default [
  ...baseConfig,
  ...reactConfig,
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
```

### Prettier

```js
// prettier.config.js
export { default } from '@seolhun/eslint-config/prettier';
```

### CJS 프로젝트 (type: "module" 없는 경우)

파일 확장자를 `.mjs`로 사용하면 ESM config 사용 가능:

```js
// eslint.config.mjs
import baseConfig from '@seolhun/eslint-config/base';

export default [
  ...baseConfig,
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
```

## Exports

| Export | Description | Use Case |
|--------|-------------|----------|
| `@seolhun/eslint-config` | base + react 합성 | FE 프로젝트 (기본) |
| `@seolhun/eslint-config/base` | TS + Prettier + Perfectionist | BE / 공통 라이브러리 |
| `@seolhun/eslint-config/react` | React + Hooks + JSX A11y | FE additive |
| `@seolhun/eslint-config/prettier` | Prettier config | Prettier 설정 |

## Included Plugins

### Base (`./base`)

- `@typescript-eslint` - TypeScript linting
- `eslint-plugin-perfectionist` (v5) - Code sorting
- `eslint-plugin-prettier` - Prettier integration
- `eslint-config-prettier` - Prettier conflict resolution

### React (`./react`)

- `eslint-plugin-react` - React rules
- `eslint-plugin-react-hooks` - Hooks rules
- `eslint-plugin-jsx-a11y` - Accessibility

## Key Rules

### Perfectionist Sorting

- **Imports**: type > builtin/external > internal > parent/sibling > style > side-effect
- **Objects**: Custom groups (react props, ids, keys, types, variants, scales, intents)
- **Classes**: static > private > public, properties > constructor > methods
- **Enums/Exports**: Natural alphabetical order

### TypeScript

- `consistent-type-imports`: Enforce `import type` with separate type imports
- `explicit-module-boundary-types`: Disabled

## Migration from v1 (ESLint 8)

1. Remove `.eslintrc.js` / `.eslintrc.cjs` / `.eslintignore`
2. Create `eslint.config.js` (or `.mjs`)
3. Update dependencies:
   ```sh
   pnpm add -D @seolhun/eslint-config@latest eslint@^9 prettier@^3
   ```
4. Add `"type": "module"` to `package.json` (or use `.mjs` extension)

## License

MIT
