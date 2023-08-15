# @casperiv/eslint-config

## Install

### Packages

- [`eslint-config`][config_url]: the base config
- [`eslint-config-react`][react_url]: the react config
- [`eslint-config-next`][nextjs_url]: the Next.js config

#### eslint-config

```bash
npm install @casperiv/eslint-config
```

#### eslint-config-react

```bash
npm install @casperiv/eslint-config @casperiv/eslint-config-react
```

#### eslint-config-next

```bash
npm install @casperiv/eslint-config @casperiv/eslint-config-react @casperiv/eslint-config-next
```

## Usage

Use `extends` in your ESLint config

```json
{
  "extends": ["@casperiv/eslint-config"]
}
```

### With react

```json
{
  "extends": ["@casperiv/eslint-config", "@casperiv/eslint-config-react"]
}
```

### With Next.js

```json
{
  "extends": ["@casperiv/eslint-config", "@casperiv/eslint-config-react", "@casperiv/eslint-config-next"]
}
```

## License

[Dev-CasperTheGhost MIT](./LICENSE)

[config_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config
[react_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config-react
[nextjs_url]: https://github.com/Dev-CasperTheGhost/eslint-config/tree/main/packages/eslint-config-next
