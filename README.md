# Vektor Web

[Turborepo](https://turbo.build/) [monorepo](https://monorepo.tools/) containing all of Vektors web code

New? Take a minute to learn about the [prerequisite](#prerequisite) knowledge about the project

## Scripts

### pnpm build

Builds all `turbo.json` specified projects in `apps` and `packages`

### pnpm dev

Runs all `turbo.json` specified projects in development mode

### pnpm lint

Reports code faults in ALL projects

### pnpm lint:fix

Fixes safe code faults in ALL projects

### pnpm format

Fixes code style issues in ALL projects

### pnpm format-and-lint

Reports code faults and code style issues in ALL projects

### pnpm format-and-lint:fix

Fixes safe code faults and code style issues in ALL projects

## Prerequisite

ALL code is in written in Typescript

The monorepo is maintained using [Turborepo](https://turbo.build/)

### Project Structure

- `apps/*`: deployed packages without sharing code
- `packages/*`: internal packages of shared code
- `turbo.json`: config for root scripts

We follow the Turborepo convention where `apps/` contain Application Packages and `packages/` contain Internal Packages.

Make sure you understand the difference by reading the official Turborepo [documentation](https://turbo.build/repo/docs/core-concepts/package-types)

### Packages

- `apps`
  - `api`: internal REST api for essential data
  - `cms`: Content Management System for managing `homepage` content
  - `dashboard`: dashboard app for internal members
  - `homepage`: landing website
- `packages`
  - `tsconfig`: shared TypeScript configuration files
    - [`README.md`](./packages/tsconfig/README.md)
  - `ui`: reusable React ui components
    - [`README.md`](./packages/ui/README.md)

To import internal packages, prefix the imports with `@vektor/{package_name}` for example `@vektor/ui`
