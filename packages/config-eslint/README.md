# @job-application-tracker/config-eslint

Shared ESLint configuration for the job-application-tracker monorepo.

## Configurations

### Base Config

Base TypeScript ESLint configuration with common rules for all projects.

**Features:**

- TypeScript support via `typescript-eslint`
- Recommended ESLint rules
- Unused variable warnings (with `_` prefix support)
- Explicit `any` type warnings
- Ignores common build directories and generated files

### React Config

Extends base config with React-specific rules for frontend applications.

**Features:**

- React plugin with recommended rules
- React Hooks rules
- React Refresh (HMR) support
- JSX runtime support (no need to import React)
- TypeScript prop validation (disables prop-types)

### Node Config

Extends base config with Node.js-specific rules for backend applications.

**Features:**

- Console statements allowed
- Node.js-specific environment

## Usage

### Installation

Add the config package to your app's `devDependencies`:

```json
{
  "devDependencies": {
    "@job-application-tracker/config-eslint": "workspace:^",
    "eslint": "^9.17.0"
  }
}
```

### React App (Frontend)

Create an `eslint.config.js` file:

```javascript
// @ts-check
import reactConfig from '@job-application-tracker/config-eslint/react';

export default reactConfig;
```

### Node App (Backend)

Create an `eslint.config.js` file:

```javascript
// @ts-check
import nodeConfig from '@job-application-tracker/config-eslint/node';

export default nodeConfig;
```

### Custom Overrides

You can extend the config with custom rules:

```javascript
// @ts-check
import reactConfig from '@job-application-tracker/config-eslint/react';
import tseslint from 'typescript-eslint';

export default tseslint.config(...reactConfig, {
  files: ['src/specific/**/*.tsx'],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
});
```

## Lint Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

## Root Level

From the monorepo root, you can lint all packages:

```bash
pnpm lint          # Lint all packages
pnpm lint:fix      # Auto-fix issues in all packages
```

## Ignored Patterns

The following patterns are automatically ignored:

- `**/dist/**`
- `**/node_modules/**`
- `**/.turbo/**`
- `**/build/**`
- `**/.output/**`
- `**/*.gen.ts`
- `**/.vinxi/**`
- `**/routeTree.gen.ts`
- `**/.react-router/**`
