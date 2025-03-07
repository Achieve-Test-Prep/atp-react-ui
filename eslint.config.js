import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...compat.config({
    extends: ['plugin:storybook/recommended'],
  }),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',  // Add this line to point to your tsconfig
        tsconfigRootDir: __dirname,  // Add this to set the root directory
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'unused-imports': unusedImports,
      prettier: prettierPlugin,
      storybook: storybookPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "no-underscore-dangle": 0,
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", {}, { "usePrettierrc": true }], // Use our .prettierrc file as source
      "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "no-console": "off",
      "react/prop-types": 0,
      "react/forbid-prop-types": [0, { "forbid": ["any"] }],
      "no-plusplus": "off",
      "react/jsx-props-no-spreading": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "vars": "local", "args": "none", "ignoreRestSiblings": false }],
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": ["error", { "vars": "local", "args": "none", "ignoreRestSiblings": false }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          "devDependencies": [
            "examples/**",
            "examples-native/**",
            "**/example/**",
            "*.js",
            "**/*.test.js",
            "**/*.stories.*",
            "**/scripts/*.js",
            "**/stories/**/*.js",
            "**/__tests__/**/*.js",
            "**/__stories__/**/*.*",
            "**/__tests__/**/*.*"
          ],
          "peerDependencies": true
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "variable",
          "modifiers": ["destructured"],
          "format": null
        }
      ],
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling"],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": ["react"],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
    rules: {
      // Storybook-specific rules
      'import/no-anonymous-default-export': 'off',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**', 'storybook-static/**'],
  },
];
