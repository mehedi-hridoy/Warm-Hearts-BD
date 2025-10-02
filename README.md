# Warm Hearts BD

Modern Vite + React experience for the Warm Hearts BD initiative, complete with responsive UI, scroll animations, and Firebase-backed authentication.

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Firebase credentials must live in a local `.env` file that is **not** committed to version control.

1. Duplicate `.env.example` to `.env` in the project root.
2. Replace each value with your Firebase configuration values.

```bash
cp .env.example .env
```

Never commit the populated `.env` file—`.gitignore` already excludes it.

## Production Build

```bash
npm run build
```
