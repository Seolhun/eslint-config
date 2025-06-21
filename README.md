# ESLint Configuration

This is an ESLint configuration package with ESLint v9+ flat config support for JavaScript, TypeScript, and React projects with Prettier integration.

## Features

- ✨ ESLint v9+ flat config format
- 📦 ES modules support
- 🎯 TypeScript support with @typescript-eslint
- ⚛️ React and React Hooks support
- 💅 Prettier integration
- 🎨 Perfectionist plugin for consistent code sorting
- 📱 JSX accessibility checks

## Requirements

- Node.js >= 18
- ESLint >= 9.0.0
- TypeScript >= 5.0.0 (if using TypeScript)

## Installation

### Using pnpm (recommended)

```sh
pnpm add -D @seolhun/eslint-config
```

### Using npm

```sh
npm install --save-dev @seolhun/eslint-config
```

### Using yarn

```sh
yarn add -D @seolhun/eslint-config
```

### Install with peer dependencies

If you need to install all peer dependencies:

```sh
pnpm add -D @seolhun/eslint-config eslint@^9.29.0 prettier@^3.3.3 typescript@^5.0.0
```

## Configuration

### 1. ESLint Configuration

Create an `eslint.config.js` file in your project root:

```js
// eslint.config.js
import sharedConfig from '@seolhun/eslint-config';

export default [
  ...sharedConfig,
  {
    // Your custom rules and overrides
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
```

### 2. Prettier Configuration

Create a `prettier.config.js` file in your project root:

```js
// prettier.config.js
import prettierConfig from '@seolhun/eslint-config/prettier';

export default {
  ...prettierConfig,
  // Your custom prettier config
};
```

Or use it directly without modifications:

```js
// prettier.config.js
export { default } from '@seolhun/eslint-config/prettier';
```

### 3. Package.json Setup

Add `"type": "module"` to your `package.json` for ES modules support:

```json
{
  "type": "module",
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit"
  }
}
```

### 4. TypeScript Configuration (if using TypeScript)

Create or update your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src/**/*", "*.js", "*.ts"],
  "exclude": ["node_modules", "dist", "build"]
}
```

### 5. VSCode Integration (optional)

Create `.vscode/settings.json` for automatic formatting:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.experimental.useFlatConfig": true
}
```

## Included Plugins and Rules

### Plugins

- `@typescript-eslint` - TypeScript linting rules
- `eslint-plugin-react` - React specific linting rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-jsx-a11y` - Accessibility rules for JSX
- `eslint-plugin-perfectionist` - Sorting and organizing code
- `eslint-plugin-prettier` - Prettier integration

### Key Rules

#### Perfectionist Sorting

- **Imports**: Sorted by type, builtin/external, internal
- **Objects**: Sorted with custom groups (id, type, scales, intents)
- **Classes**: Members sorted by static/private/public and properties/methods
- **Enums**: Alphabetically sorted
- **Exports**: Alphabetically sorted

#### Disabled Rules

- `@typescript-eslint/explicit-module-boundary-types`: Disabled
- `no-unused-vars`: Disabled (use TypeScript's check instead)
- `react/prop-types`: Disabled (use TypeScript interfaces)
- `react/display-name`: Disabled

## Usage Example

### Basic JavaScript/TypeScript file

```typescript
// Imports are automatically sorted
import type { FC } from 'react';

import React, { useState } from 'react';

import { Button } from '@seolhun/ui';

import type { LocalType } from './types';

// Objects are sorted according to custom groups
const config = {
  id: '123',        // ids group
  type: 'primary',  // types group
  scale: 'md',      // scales group
  intent: 'info',   // intents group
  name: 'Button',   // other properties
};

// Class members are sorted
class Service {
  static API_URL = '/api';     // static properties first

  private key: string;         // private properties

  public timeout: number;      // public properties

  constructor() {}             // constructor

  static create() {}           // static methods

  private validate() {}        // private methods

  public fetch() {}            // public methods
}
```

### React Component Example

```tsx
import type { FC, ReactNode } from 'react';

import React from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  id: string;
  type: 'button' | 'submit';
  scale: 'lg' | 'md' | 'sm';
  intent: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  ref,
  id,
  type,
  scale,
  intent,
  onClick,
  disabled,
}) => {
  return (
    <button
      ref={ref}
      id={id}
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

## Troubleshooting

### ESLint not working

Make sure you're using ESLint v9+ and have created `eslint.config.js` (not `.eslintrc.js`).

### TypeScript errors

If you see TypeScript errors about missing types, ensure `skipLibCheck` is set to `true` in your `tsconfig.json`.

### Import sorting not working

Check that your imports match the patterns defined in the configuration. The default pattern for internal imports is `~/.+`.

## Migration from v8 to v9

If you're migrating from ESLint v8:

1. Remove old config files (`.eslintrc.js`, `.eslintrc.json`, etc.)
2. Create new `eslint.config.js` with flat config format
3. Update all ESLint-related packages to versions that support v9
4. Update your scripts in `package.json`
5. Add `"type": "module"` to `package.json`

## Contributing

Issues and pull requests are welcome at [https://github.com/seolhun/eslint-config](https://github.com/seolhun/eslint-config)

## License

MIT
