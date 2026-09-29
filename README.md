# Tegel React demo

NOTE: This repository is under construction and is currently used for testing.

This repository contains a demo page that are built using [@scania/tegel](https://www.npmjs.com/package/@scania/tegel) components and React. This is currently under development.

https://react-demo.tegel.scania.com/

## Testing a local version of Tegel

To test local versions of `@scania/tegel` and `@scania/tegel-react` in this repository:

1. In the **Tegel** repository, pack both packages:

```shell
pnpm pack:core
pnpm pack:react
```

2. Copy the paths to the generated `.tgz` files. By default, they should be generated in:

- `packages/core` for `@scania/tegel`
- `packages/react` for `@scania/tegel-react`

3. In this repository, add overrides for both packages to `pnpm-workspace.yaml`, pointing to the generated `.tgz` files:

```yaml
overrides:
  '@scania/tegel': 'file:/path/to/tegel/packages/core/scania-tegel-<version>.tgz'
  '@scania/tegel-react': 'file:/path/to/tegel/packages/react/scania-tegel-react-<version>.tgz'
```

4. Run the installation again so that pnpm resolves the dependencies using the local packages:

```shell
pnpm install
```

You can now test the application using the locally packed versions of Tegel.

> **Important:** The changes to `pnpm-workspace.yaml` and `pnpm-lock.yaml` are only for local testing. Do not commit these changes.
