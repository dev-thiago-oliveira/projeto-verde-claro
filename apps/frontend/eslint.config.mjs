import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'jsx-quotes': ['error', 'prefer-single'],
      'function-paren-newline': ['error', 'multiline'],
      'space-infix-ops': 'error',
      'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
      'react/jsx-wrap-multilines': [
        'error',
        {
          'declaration': 'parens',
          'assignment': 'parens',
          'return': 'parens',
        }
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }]
    },
  },
];