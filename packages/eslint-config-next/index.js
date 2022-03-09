"use strict";

module.exports = {
  plugins: ["@next/next"],
  rules: {
    "@next/next/no-css-tags": "error",
    "@next/next/no-sync-scripts": "error",
    "@next/next/no-unwanted-polyfillio": "error",
    "@next/next/no-page-custom-font": "error",
    "@next/next/google-font-display": "error",
    "@next/next/google-font-preconnect": "error",
    "@next/next/no-document-import-in-page": "error",
    "@next/next/no-head-import-in-document": "error",
    "@next/next/no-title-in-document-head": "error",
    "@next/next/no-duplicate-head": "error",
    "@next/next/no-typos": "error",
    "@next/next/inline-script-id": "error",
    "@next/next/next-script-for-ga": "error",
    "@next/next/next-script-for-ga": "error",
    "@next/next/no-head-element": "error",
    "@next/next/no-script-component-in-head-component": "error",
    "@next/next/no-server-import-in-page": "error",

    "@next/next/no-img-element": "warn",

    // can be useful for a full page refresh
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/link-passhref": "off",
  },
};
