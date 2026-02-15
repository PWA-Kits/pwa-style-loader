# pwa-kit-style-loader 🌩️

Enable vanilla CSS 🍦 support in Salesforce PWA Kit — instantly.

`pwa-kit-style-loader` is a lightweight CLI that adds global CSS capability to Salesforce PWA Kit projects safely and quickly.

Built for simplicity and enterprise environments.

## Why?

Salesforce PWA Kit does not support global CSS imports out of the box.

Instead of manually configuring build files and risking setup issues, this CLI enables CSS support in one command.

## ⚡ Usage

```bash
npm install pwa-kit-style-loader
npx pwa-kit-style-loader
```

## 🛠 What It Does

- Detects if you're inside a Salesforce PWA Kit project
- Sets up required configuration for global CSS usage
- Prompts before modifying existing files
- Makes no silent changes

## ⚠️ Important Note

This tool is intended **only for projects using Salesforce B2C Commerce (SFCC) PWA Kit with the extensibility / override architecture enabled**.

It will not work in:

- Standard React projects
- Non-PWA Kit applications
- Projects that do not extend `@salesforce/retail-react-app`

Please ensure your project follows the official PWA Kit extensibility structure before running this CLI.

## Designed For

- Enterprise teams
- Safe configuration workflows
- Repeatable setup
- Clean project structure

## Roadmap

- SCSS / SASS support
- Tailwind preset

## Maintainer

Abhisek Maiti  
SFCC / PWA Kit Developer

- GitHub: [https://github.com/abhisekmaiti19](https://github.com/abhisekmaiti19)
- LinkedIn: [https://linkedin.com/in/abhisekmaiti19](https://linkedin.com/in/abhisekmaiti19)

## 📄 License

MIT
