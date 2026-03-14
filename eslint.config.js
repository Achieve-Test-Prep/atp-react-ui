// ESLint core
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores([
    '!.storybook',
    'dist/**',
    'node_modules/**',
    '/dist/index.js',
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactRefresh.configs.recommended,
  importPlugin.flatConfigs.typescript,
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    // ignores: ['!.storybook', 'dist/**', 'node_modules/**', '/dist/index.js'],
    rules: {
      'no-plusplus': 'off',
      camelcase: 'off',
      'no-use-before-define': 'off',

      // TypeScript ESLint rules (replacing deprecated TSLint)
      '@typescript-eslint/no-use-before-define': 'off',
      // Prefer explicit `import type` and split type-only specifiers when auto-fixing
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          modifiers: ['destructured'],
          format: null,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/display-name': 'off',
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],

      // eslint-plugin-unused-imports
      'unused-imports/no-unused-imports': 'error',

      // eslint-plugin-import
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // External modules from node_modules (includes type imports)
            'internal', // Internal modules (aliases)
            'sibling', // Sibling/current directory imports (./)
            'parent', // Parent directory imports (../)
            'index', // Index imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'react-dom',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@root/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      // Enable sort-imports to sort members within import statements
      // This complements import/order which handles declaration ordering
      'sort-imports': [
        'error',
        {
          ignoreCase: true, // Match import/order's caseInsensitive setting
          ignoreDeclarationSort: true, // Let import/order handle declaration order
          ignoreMemberSort: false, // Sort members within imports
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
    },
  },
  {
    files: ['eslint.config.js'],
    rules: {
      // Editors often organize these imports differently than eslint-plugin-import.
      'import/order': 'off',
    },
  },

  eslintConfigPrettier
);
