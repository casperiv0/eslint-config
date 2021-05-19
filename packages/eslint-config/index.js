"use strict";

const defaultPlugins = ["json", "promise"];
const defaultExtends = ["eslint:recommended", "plugin:promise/recommended", "plugin:json/recommended"];

const defaultRules = {
  curly: ["error", "multi-line"],
  "default-case": "error",
  "default-case-last": "error",
  eqeqeq: "error",
  "no-empty-pattern": "error",
  "no-empty-function": "error",
  "no-iterator": "error",
  "no-multi-spaces": "error",
  "no-new-func": "error",
  "no-proto": "error",
  "no-return-await": "error",
  "no-useless-return": "error",
  "no-undef": "error",
  semi: "error",
  quotes: ["error", "double", { allowTemplateLiterals: false }],
  "quote-props": ["error", "as-needed"],
  "one-var": ["error", "never"],
  "no-whitespace-before-property": "error",
  "object-curly-spacing": ["error", "always"],
  "no-unneeded-ternary": "error",
  "no-trailing-spaces": "error",
  "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
  "jsx-quotes": ["error", "prefer-double"],
  "func-call-spacing": ["error", "never"],
  "no-promise-executor-return": "error",
  "no-template-curly-in-string": "error",
  "no-unsafe-optional-chaining": "error",
  "yield-star-spacing": ["error", "after"],
  "template-curly-spacing": ["error", "never"],
  "semi-spacing": "error",
  "no-duplicate-case": "error",
  "no-extra-semi": "error",
  "no-unreachable": "error",
  "no-useless-catch": "warn",
  "no-new-object": "error",
  "no-new-wrappers": "error",
  "object-shorthand": ["error", "always", { avoidQuotes: true }],
  "no-array-constructor": "error",
  "prefer-destructuring": ["error", { object: false, array: true }],
  "prefer-template": "error",
  "prefer-arrow-callback": "error",
  "no-useless-concat": "error",
  "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
  "space-before-blocks": ["error", "always"],
  "keyword-spacing": ["error", { before: true, after: true }],
  "no-useless-constructor": "error",
  "no-multi-assign": "error",
  "no-else-return": "error",
  "spaced-comment": ["error", "always"],
  "padded-blocks": ["error", "never"],
  "space-in-parens": ["error", "never"],

  // turned off bc I mostly use TypeScript
  "no-unused-vars": "off",

  "capitalized-comments": ["error", "never"],

  "constructor-super": "error",
  "no-dupe-class-members": "error",
  "no-duplicate-imports": "error",
  "no-new-symbol": "error",
  "no-var": "error",
  "prefer-const": "error",
  "prefer-rest-params": "error",
  "rest-spread-spacing": ["error", "never"],
};

module.exports = {
  extends: defaultExtends,
  plugins: defaultPlugins,
  rules: defaultRules,
  overrides: [
    {
      // react stuff
      files: ["**/*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: [...defaultPlugins, "@typescript-eslint"],
      extends: [...defaultExtends, "plugin:@typescript-eslint/recommended"],
      rules: {
        ...defaultRules,

        // typescript rules
        "no-undef": "off",
        "no-unused-vars": "off",

        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      },
    },
  ],
};
