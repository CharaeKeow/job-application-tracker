import type { Config } from 'prettier';

const config: Config = {
  // Existing Prettier config
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // Import sorting configuration
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/.*)$', // @/ alias imports
    '^[.]', // relative imports
    '',
    '<TYPES>', // type imports
    '<TYPES>^(@/.*)$', // @/ alias type imports
    '<TYPES>^[.]', // relative type imports
  ],
  importOrderParserPlugins: ['typescript', 'jsx'],
};

export default config;
