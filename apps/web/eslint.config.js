// @ts-check

import { tanstackConfig } from '@tanstack/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...tanstackConfig,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      // Relax some TanStack rules for generated files and framework code
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/require-await': 'warn',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
    },
  },
  {
    // Turn off strict rules for .nitro generated files
    files: ['.nitro/**/*.ts', '.nitro/**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'off',
      'import/newline-after-import': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    // Additional ignores for generated files
    ignores: [
      '**/.output/**',
      '**/*.gen.ts',
      '**/routeTree.gen.ts',
      '**/.react-router/**',
      '**/.vinxi/**',
      '**/.nitro/**',
      '**/eslint.config.js',
    ],
  },
]);
