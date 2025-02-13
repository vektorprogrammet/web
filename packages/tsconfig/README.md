# TypeScript Configuration

For the best config with the least amount of effort we extend the existing well-maintained [tsconfig bases](https://github.com/tsconfig/bases) recommended by the official TypeScript [handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#tsconfig-bases)

To learn more about the configuration options:

- check the official reference at <https://www.typescriptlang.org/tsconfig/>
- or initialize the tsconfig file yourself
  - with `tsc --init` in your favorite package manager
  - or run `tsconfig:init` added in this package.json

## Why do I need to use TypeScript version 5 or more?

To support combined configs `extends: [""]` TypeScript v5.0.0 or more is needed (<https://github.com/tsconfig/bases?tab=readme-ov-file#what-about-combined-configs>)
