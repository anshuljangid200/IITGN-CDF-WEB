# IITGN CDF Platform

A full-stack web experience for IIT Gandhinagar’s Continuing Development Framework (CDF). The repository contains a Vite/React frontend and a Fastify/TypeScript backend powered by Neon Postgres and Drizzle ORM.

---

## Table of contents
1. [Tech stack](#tech-stack)
2. [Repository layout](#repository-layout)
3. [Prerequisites](#prerequisites)
4. [Environment variables](#environment-variables)
5. [Database (Neon + Drizzle)](#database-neon--drizzle)
6. [Backend](#backend)
7. [Frontend](#frontend)
8. [Running locally](#running-locally)
9. [Deployment](#deployment)
10. [Testing & linting](#testing--linting)
11. [Troubleshooting](#troubleshooting)

---

## Tech stack
- **Frontend**: React 18, TypeScript, Vite, TailwindCSS + custom components
- **Backend**: Fastify 4, TypeScript, Zod validation, @fastify/rate-limit & helmet
- **Database**: Neon Postgres with Drizzle ORM and Neon Connect VS Code integration
- **Tooling**: pnpm/npm, TypeScript project references, Pino logging

---

## Repository layout
```
├── backend/               # Fastify API
│   ├── src/
│   │   ├── routes/        # form + admin endpoints
│   │   ├── schemas/       # Zod validators
│   │   ├── plugins/       # Fastify plugins (DB, security, rate limit)
│   │   ├── services/      # spam guard, notifications, etc.
│   │   ├── db/            # Drizzle schema + client
│   │   └── utils/
│   ├── drizzle/           # SQL migrations + meta journal
│   └── env.template
├── src/                   # React frontend
│   ├── components/        # Shared UI widgets
│   ├── pages/             # Route-level screens
│   ├── data/, hooks/, lib/
│   └── main.tsx           # App bootstrap
├── public/                # Static assets
├── README.md              # ← you are here
└── BACKEND_SETUP.md       # Detailed backend-only guide
```

---

## Prerequisites
- Node.js 18+ and npm (or pnpm). Fastify backend targets ESM.
- Neon.tech account + Neon Connect VS Code extension for effortless DB provisioning.
- Git (optional but recommended).

---

## Environment variables
Create `backend/.env` using `backend/env.template`:
```
NEON_DATABASE_URL=postgres://...
ADMIN_API_KEY=super_secure_random_string_at_least_32_chars
RATE_LIMIT_MAX=60
RATE_LIMIT_WINDOW=60
NODE_ENV=development
```
Frontend can optionally consume `VITE_API_URL` in a root-level `.env` or `.env.local` file to point to the backend (`http://localhost:3333` in dev).

Never commit real secrets—use deploy platform dashboards or secret managers.

---

## Database (Neon + Drizzle)
- Schema is defined in `backend/src/db/schema.ts` (tables: `contact_messages`, `campus_visits`, `admin_audit_log`).
- SQL migrations live in `backend/drizzle/`. Apply them with:
  ```bash
  cd backend
  npm run drizzle:push   # or drizzle:migrate for versioned migrations
  ```
- Data lives in Neon Postgres. Use the Neon dashboard, `psql`, or Drizzle queries to inspect:
  ```sql
  SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 50;
  SELECT * FROM campus_visits ORDER BY created_at DESC LIMIT 50;
  ```
- Every submission stores IP, user agent, spam flag, and timestamps.

---

## Backend
- Entry point: `backend/src/server.ts` bootstraps Fastify via `buildApp()` (`src/app.ts`).
- Key plugins:
  - `plugins/security.ts` → CORS + helmet tightening
  - `plugins/rate-limit.ts` → request throttling (configurable by env)
  - `plugins/db.ts` → attaches Drizzle client
- Validation via Zod (`src/schemas`). Spam heuristics + honeypot handled by `services/spamGuard.ts`.
- Routes:
  - `POST /api/forms/contact` → “Get in Touch” form
  - `POST /api/forms/visit` → “Schedule a Campus Visit” form
  - `GET /api/health` → uptime probe
  - `GET /api/admin/dashboard|contact|visits` → admin endpoints (require `x-admin-key` header)
- Responses are JSON with status metadata, spam state, and inserted IDs.
- Detailed operations & fetch snippets live in `BACKEND_SETUP.md`.

---

## Frontend
- Vite-powered SPA located under `src/`. Key directories:
  - `pages/` for top-level routes (About, Programs, CampusLife, etc.)
  - `components/` for UI blocks (Carousel, FAQ accordion, forms, etc.)
  - `hooks/` for shared logic like responsive helpers and toast notifications
- Styling via CSS modules, Tailwind config, and global `index.css`/`App.css`.
- To wire forms to the backend, see helper examples near the bottom of `BACKEND_SETUP.md` or create fetch hooks in `src/hooks/`.

---

## Running locally
```bash
# Frontend
npm install            # from repo root
npm run dev            # serves Vite app on http://localhost:5173

# Backend (in a separate terminal)
cd backend
npm install            # already run once after cloning
npm run dev            # Fastify on http://localhost:3333
```
Ensure the backend `.env` is filled and Drizzle migrations are applied before submitting forms.

---

## Deployment
1. **Database**: Neon project provisioned through Neon Connect; migrations pushed via CI or manually with `npm run drizzle:push`.
2. **Backend**: `npm run build` then serve `dist/server.js` on Node 18+ (Render, Railway, Fly.io, etc.). Set environment variables in the hosting platform.
3. **Frontend**: `npm run build` at repo root, deploy the `dist/` folder (Vercel, Netlify, static hosting). Set `VITE_API_URL` to the deployed backend URL.
4. Enforce HTTPS, rotate the admin API key periodically, and secure any admin-facing dashboards.

---

## Testing & linting
- Backend type-check: `cd backend && npm run check`
- Linting is configured via `eslint.config.js` at the root (run `npx eslint .` for the frontend if desired).

---

## Troubleshooting
- **No DB connection**: confirm Neon environment, IP allowlists, and `NEON_DATABASE_URL` value. Run Neon’s “Test connection” command in VS Code.
- **Migrations out of sync**: delete the drifted migration, regenerate via `npm run drizzle:generate`, then push.
- **Admin endpoints return 401**: make sure requests include `x-admin-key` header that matches `ADMIN_API_KEY` in backend `.env`.
- **CORS issues**: adjust allowed origins in `backend/src/plugins/security.ts` for production domains.
- **Spam false positives**: tweak heuristics in `services/spamGuard.ts` and redeploy.

For backend-specific actions, refer to `BACKEND_SETUP.md`. For further enhancements (email notifications, Captcha, dashboards), layer additional routes/services under `backend/src` following the existing structure.

