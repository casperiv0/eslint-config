# [eslint-config](https://npm.im/@casper124578/eslint-config)

## Install

```bash
npm install -D @casper124578/eslint-config
```

## Usage

Use `extends` in your ESLint config

```json
{
  "extends": "@casper124578/eslint-config"
}
```

## Included plugins

- [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise)
- [`eslint-plugin-json`](https://www.npmjs.com/package/eslint-plugin-json)
- [`prettier`](https://www.npmjs.com/package/prettier)

## Prettier config

Add in your `package.json`

```json
 "prettier": {
    "semi": true,
    "trailingComma": "all",
    "singleQuote": false,
    "printWidth": 100,
    "tabWidth": 2
  }
```

## License

[Dev-CasperTheGhost MIT](../../LICENSE)
