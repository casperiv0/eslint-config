"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-deprecated": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",
    "react/jsx-curly-spacing": ["error", { when: "never" }],
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": "error",
    "react/no-string-refs": "error",
    "react/self-closing-comp": "error",
    "react/require-render-return": "error",
    "react/prefer-stateless-function": "error",

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",

    // jsx-a11y
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/no-onchange": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
