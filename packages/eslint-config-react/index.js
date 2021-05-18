"use strict";

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react"],
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
    "react/jsx-boolean-value": ["error", "never"],
    "react/jsx-closing-bracket-location": "error",
    "react/no-string-refs": "error",
    "react/self-closing-comp": "error",
    "react/require-render-return": "error",
    "react/prefer-stateless-function": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/no-unused-prop-types": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-curly-spacing": ["error", { when: "never", children: true }],

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
