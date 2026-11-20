---
"@collana-solutions/eslint-config": patch
---

The package is now published as `@collana-solutions/eslint-config`, from version 3.1.0 on. The rules and the exports (`configs.flat.*`, `getConfig`, `defaults`) are unchanged. To migrate, replace the old package with the new one:

```sh
npm uninstall @neolution-ch/eslint-config-neolution
npm install --save-dev @collana-solutions/eslint-config
```

Then change the import in `eslint.config.mjs`. Before:

```js
import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";

export default [...neolutionEslintConfig.configs.flat.nextjs];
```

After:

```js
import collanaEslintConfig from "@collana-solutions/eslint-config";

export default [...collanaEslintConfig.configs.flat.nextjs];
```

The config objects are named `@collana-solutions/...` instead of `neolution/...`, for example `@collana-solutions/typescript`. The names only show up in `@eslint/config-inspector` and in ESLint's messages, so this matters only to a config that looks up these objects by name.

`@neolution-ch/eslint-config-neolution` gets deprecated and receives no further releases.
