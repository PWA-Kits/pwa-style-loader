# 🚀 pwa-style-loader

Enable vanilla CSS + PostCSS support in Salesforce PWA Kit — instantly.

`pwa-style-loader` is a lightweight CLI that adds global CSS support to Salesforce PWA Kit projects without manually modifying webpack internals.

Built for simplicity, safety, and enterprise use.

---

## ✨ Why?

Salesforce PWA Kit does not support global CSS imports out of the box.

To enable it manually, developers typically need to:

- Modify webpack configuration
- Add `style-loader`, `css-loader`, `postcss-loader`
- Configure PostCSS
- Risk breaking existing setup

This CLI removes that friction — safely.

---

## ⚡ Usage

No installation required.

```bash
npm install pwa-style-loader
npx pwa-style-loader
```

---

## 🛠 What It Does

- Validates you're inside a Salesforce PWA Kit project
- Creates:
  - `webpack.config.js`
  - `postcss.config.js`
- Adds:
  - `style-loader`
  - `css-loader`
  - `postcss-loader`
  - `autoprefixer`
- Asks before replacing existing files
- Never mutates configs silently

---

## 🔍 Project Detection

Ensures your project contains:

```json
"ccExtensibility": {
  "extends": "@salesforce/retail-react-app"
}
```

If not detected, it exits safely with a helpful message.

---

## 🛡 Safety Principles

- No silent overwrites
- No forced dependency changes
- Explicit user confirmation
- Repeatable and reversible setup

---

## 🧩 Roadmap

- SCSS / SASS support
- Tailwind preset
- CI mode (`--yes`)
- Monorepo support
- Version compatibility checks

---

## 👤 Maintainer

Abhisek Maiti  
SFCC / PWA Kit Developer

- GitHub: https://github.com/abhisekmaiti19
- LinkedIn: https://linkedin.com/in/abhisekmaiti19

---

## 📄 License

MIT
