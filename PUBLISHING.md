# Publishing Guidelines

## ⚠️ Important Difference

The publishing process for **Angular** is different from **React** and **Core**.

| Package | Command | Notes |
| :--- | :--- | :--- |
| **Angular** | `npm run pub` | Publishes from `dist` folder. **Do NOT run `npm publish` from root.** |
| **React** | `npm publish` | Publishes from root. |
| **Core** | `npm publish` | Publishes from root. |

## 1. Angular Package (`@jojovms/angular-offline-toast`)

The Angular package is built using `ng-packagr`.

- **Why different?**: `ng-packagr` generates a completely new, valid `package.json` inside the `dist` folder. The source `package.json` is partially for development and contains fields that should not be in the final distribution.
  - **How to publish**:
  1. **Version** (in `packages/offline-toast/angular`):
     ```bash
     npm version patch  # or minor/major
     ```
     *Do NOT run this inside `dist`. Version the source `package.json` first.*
  2. **Build**:
     ```bash
     npm run build
     ```
     *This copies the new version number into `dist/package.json`.*
  3. **Publish**:
     ```bash
     npm run pub
     ```

## 2. React & Core Packages

These packages use Vite/standard tooling.

- **Why different?**: The build process outputs files to `dist` but uses the root `package.json` for publishing configuration. The `dist` folder does not contain its own `package.json`.
- **How to publish**:
  1. **Version**:
     ```bash
     npm version patch
     ```
  2. **Build**:
     ```bash
     npm run build
     ```
  3. **Publish**:
     ```bash
     npm publish --access public
     ```
