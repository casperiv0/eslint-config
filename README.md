# @casper124578/eslint-config

## Install

### Packages

- [`eslint-config`][config_url]: the base config
- [`eslint-config-react`][react_url]: the react config
- [`eslint-config-next`][nextjs_url]: the Next.js config

#### eslint-config

```bash
npm install @casper124578/eslint-config
```

#### eslint-config-react

```bash
npm install @casper124578/eslint-config @casper124578/eslint-config-react
```

#### eslint-config-next

```bash
npm install @casper124578/eslint-config @casper124578/eslint-config-react @casper124578/eslint-config-next
```

## Usage

Use `extends` in your ESLint config

```json
{
  "extends": ["@casper124578/eslint-config"]
}
```

### With react

```json
{
  "extends": ["@casper124578/eslint-config", "@casper124578/eslint-config-react"]
}
```

### With Next.js

```json
{
  "extends": ["@casper124578/eslint-config", "@casper124578/eslint-config-react", "@casper124578/eslint-config-next"]
}
```

## License

[Dev-CasperTheGhost MIT](./LICENSE)

[config_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config
[react_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config-react
[nextjs_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config-next
