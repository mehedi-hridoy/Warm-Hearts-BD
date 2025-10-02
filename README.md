# Warm Hearts BD

Modern humanitarian platform built with Vite + React to mobilise donations and volunteer efforts across Bangladesh.

> **Live site:** https://warmheartbd.firebaseapp.com/

<details>
<summary>Table of Contents</summary>

- [Overview](#overview)
- [Feature Highlights](#feature-highlights)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Styling System](#styling-system)
- [Authentication](#authentication)
- [Data Sources](#data-sources)
- [Quality Gates](#quality-gates)
- [Deployment](#deployment)
- [Maintenance Notes](#maintenance-notes)
- [Contributing](#contributing)

</details>

## Overview

Warm Hearts BD delivers a pixel-perfect, responsive landing and dashboard experience for a national winter relief movement. The site showcases mission impact, enables donation coordination, and provides volunteers with a modern interface anchored by Firebase authentication.

## Feature Highlights

- 🌐 **Immersive landing experience** — Hero carousel, operational highlights, success stories, and CTA sections with scroll-triggered animations.
- 📱 **Responsive by design** — Tailwind utilities + custom layout tokens ensure consistent spacing on all breakpoints.
- 🔐 **Firebase-backed auth** — Email/password and Google sign-in flows with context-based session handling.
- 📊 **Campaign storytelling** — Structured sections fed by curated content (`public/donation.json`, static assets) to communicate reach and urgency.
- 🎞️ **Swiper gallery** — High-impact imagery slider using `swiper` with autoplay, pagination, and motion effects.
- 🧩 **Modular component library** — Reusable cards, layouts, and glassmorphism utilities for rapid iteration.

## Tech Stack

- **Frontend:** React 18, Vite, React Router
- **Styling:** Tailwind CSS, DaisyUI, custom design tokens (`src/index.css`), Animate.css, AOS
- **State/Auth:** React Context (`AuthProvider.jsx`), Firebase Authentication SDK
- **Carousel/Icons:** Swiper, React Icons
- **Hosting:** Firebase Hosting

## Architecture

- **Entry point:** `src/main.jsx` wires global styles, animations, and router.
- **Routing:** Declared in `src/routes/Router.jsx` with layout wrappers.
- **Layouts:** `src/layouts/MainLayout.jsx` (public shell), additional layout components for auth/dashboard flows.
- **Pages:** Located in `src/pages/`, e.g., `Home.jsx`, `Donation.jsx`, `Login.jsx`.
- **Components:** `src/components/` holds shared UI (hero, slider, footer, etc.).
- **Auth Context:** `src/Provider/AuthProvider.jsx` exposes login/register/logout and guards Firebase availability.
- **Firebase config:** `src/firebase/Firebase.config.js` and `src/firebase/firebase.js` initialise the app from environment variables.

## Getting Started

### Prerequisites

- Node.js ≥ 18.x (LTS recommended)
- npm ≥ 9.x (bundled with Node)
- Firebase CLI (`npm install -g firebase-tools`) for deployments

### Installation

```bash
git clone https://github.com/mehedi-hridoy/Warm-Hearts-BD.git
cd Warm-Hearts-BD
npm install
```

### Local Development

```bash
npm run dev
```

The dev server runs on Vite defaults (http://localhost:5173). Hot Module Replacement (HMR) is enabled.

### Environment Variables

Firebase credentials must live in a local `.env` file that is **not** committed to version control:

```bash
cp .env.example .env
```

Fill in the Firebase Web App configuration values:

```ini
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

> 🔒 **Security tip:** If a key is ever exposed, regenerate it in the Firebase console and update your `.env` before the next build.

## Project Structure

```text
src/
├── App.jsx
├── Provider/
│   ├── AuthContext.js
│   └── AuthProvider.jsx
├── components/
│   ├── Hero.jsx
│   ├── GallerySlider.jsx
│   ├── SuccessStories.jsx
│   └── ...
├── firebase/
│   ├── Firebase.config.js
│   └── firebase.js
├── layouts/
├── pages/
│   ├── Home.jsx
│   ├── Donation.jsx
│   ├── Login.jsx
│   └── Registration.jsx
└── routes/
	 └── Router.jsx
```

Static assets live under `src/assets/` and `public/`. Donation seed data resides in `public/donation.json`.

## Styling System

- Tailwind CSS is the primary utility framework.
- `src/index.css` defines design tokens (`--brand-primary`, spacing utilities) and shared component classes (`.app-container`, `.brand-button`).
- DaisyUI augments Tailwind with component presets.
- Animations leverage Animate.css and AOS (initialised in `main.jsx`).

## Authentication

`AuthProvider` conditionally enables Firebase auth:

- If all `VITE_FIREBASE_*` values are present, email/password + Google sign-in are active.
- If values are missing, auth is gracefully disabled with console warnings instead of crashing the app.

## Data Sources

- `public/donation.json` — current donation campaigns and metadata consumed by the app.
- `src/components` — slider and section copy is stored inline for storytelling clarity; update here for content edits.

## Quality Gates

- **Build:** `npm run build`
- **Linting/Tests:** Not configured yet; consider adding ESLint/Prettier or Vitest for regression coverage.

## Deployment

Firebase Hosting is configured via `firebase.json` and `.firebaserc`.

1. Ensure `dist/` is up to date:
	```bash
	npm run build
	```
2. Deploy hosting only:
	```bash
	firebase deploy --only hosting
	```

> Hosting serves the compiled content from `dist/`. The live production site is currently running at **https://warmheartbd.firebaseapp.com/**.

## Maintenance Notes

- Regenerate Firebase API keys if they were ever committed and update `.env` before building.
- Monitor Firebase Hosting quotas and upgrade plan if traffic increases.
- Optimise large assets (`src/assets/1.png`, `2.png`, `3.png`) to reduce bundle size and improve Lighthouse scores.
- Consider introducing automated tests and lint workflow for future contributions.

## Contributing

1. Fork and clone the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit with descriptive messages.
4. Open a pull request describing the change, screenshots, and any verification steps.

For any design updates, stay aligned with the existing design tokens and reusable classes to preserve visual consistency.
