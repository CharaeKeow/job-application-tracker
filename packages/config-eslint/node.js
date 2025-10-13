// @ts-check

import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';

export default defineConfig([
  ...baseConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off', // Console is okay in Node.js
    },
  },
]);
