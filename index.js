"use strict";

module.exports = {
  rules: {
    curly: ["error", "multi-line"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    eqeqeq: "error",
    "no-empty-pattern": "error",
    "no-empty-function": "error",
    "no-iterator": "error",
    "no-multi-spaces": "error",
    "no-new-func": "error",
    "no-proto": "error",
    "no-return-await": "error",
    "no-useless-return": "error",
    "no-undef": ["error"],
    semi: "error",
    quotes: ["error", "double", { allowTemplateLiterals: false }],
    "quote-props": ["error", "as-needed"],
    "one-var": ["error", "never"],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "no-unneeded-ternary": "error",
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "new-cap": ["warn", { newIsCap: true }],
    "jsx-quotes": ["error", "prefer-double"],
    "func-call-spacing": ["error", "never"],
    "no-extra-parens": ["error", { ignoreJSX: "all" }],
    "no-promise-executor-return": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unsafe-optional-chaining": ["error"],
    "yield-star-spacing": ["error", "after"],
    "template-curly-spacing": "error",
    "semi-spacing": "error",
    "no-multi-spaces": "error",
    "no-duplicate-case": ["error"],
    "no-extra-semi": ["error"],
    "no-unreachable": ["error"],
    "no-useless-catch": ["warn"],

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
  },
  overrides: [
    {
      // react stuff
      files: ["**/*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
