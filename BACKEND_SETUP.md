# Backend Setup (Fastify + Neon + Drizzle)

This repository now ships with a fully modern Fastify backend dedicated to handling:

- Get in Touch submissions
- Schedule a Campus Visit submissions
- Admin dashboards for reviewing submissions

All persistence is managed through Neon Postgres via the Neon Connect VS Code extension, Drizzle ORM, and checked-in migrations.

---

## 1. Install & configure

```bash
cd backend
npm install
```

Create `backend/.env` (or use the Neon Connect “Create .env” action) using `env.template` as a reference:

```ini
NEON_DATABASE_URL=postgres://...
ADMIN_API_KEY=generate_a_long_random_string
RATE_LIMIT_MAX=60
RATE_LIMIT_WINDOW=60
NODE_ENV=development
```

> Keep the file outside of version control. For production, set the same variables in your hosting provider.

---

## 2. Database via Neon Connect

1. Run the Neon Connect “Link Database” command to provision a project and inject the connection string into `.env`.
2. Execute `npm run drizzle:push` to apply the SQL in `drizzle/0000_init.sql`.
3. The Drizzle client auto-loads the `contact_messages`, `campus_visits`, and `admin_audit_log` tables from `src/db/schema.ts`.

You can inspect generated SQL in the `drizzle` directory at any time.

---

## 3. Develop & run

```bash
# Type-safe dev server with hot reload
npm run dev

# Production build
npm run build && npm start
```

The server listens on `http://localhost:3333` by default.

---

## 4. API overview

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/health` | GET | Readiness probe |
| `/api/forms/contact` | POST | “Get in Touch” submissions |
| `/api/forms/visit` | POST | “Schedule a Campus Visit” submissions |
| `/api/admin/dashboard` | GET | Aggregate stats (API key required) |
| `/api/admin/contact` | GET | Paginated contact entries (API key required) |
| `/api/admin/visits` | GET | Paginated visit entries (API key required) |

### Request bodies

```json
POST /api/forms/contact
{
  "fullName": "Aditi Sharma",
  "email": "aditi@example.com",
  "phone": "+91 98765 43210",
  "organization": "Acme Corp",
  "programInterest": "AI-ML",
  "message": "Share the detailed brochure please.",
  "honeypot": ""
}
```

```json
POST /api/forms/visit
{
  "visitorName": "Campus Outreach Team",
  "organization": "IITGN Alumni",
  "email": "team@example.com",
  "phone": "+1-555-123-9999",
  "preferredDate": "2025-01-10",
  "participants": 5,
  "notes": "Need projector and EV parking.",
  "honeypot": ""
}
```

Both endpoints automatically:

- Validate payloads via Zod
- Log IP address & user agent
- Score spam (honeypot + heuristics)
- Rate-limit requests
- Store in Neon Postgres
- Emit structured JSON responses

### Admin access

Supply `x-admin-key: <ADMIN_API_KEY>` header on every `/api/admin/*` request. Responses include pagination metadata and exclude spam unless `?includeSpam=true` is provided.

---

## 5. Frontend fetch helpers

```ts
// submit contact form
async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/forms/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// submit campus visit
async function scheduleVisit(payload: VisitPayload) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/forms/visit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// list submissions for admins
async function fetchContactAdmin(page = 1) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/admin/contact?page=${page}`,
    { headers: { "x-admin-key": import.meta.env.VITE_ADMIN_KEY } }
  );
  return res.json();
}
```

Keep admin keys outside the public bundle (e.g., supply them via a secure admin dashboard or server-side proxy).

---

## 6. Security, spam & observability

- `@fastify/rate-limit` defends against bursts (configurable via env).
- Honeypot + heuristic scoring marks suspicious submissions without discarding data.
- Helmet + CORS locked to GET/POST with credential support.
- Admin traffic logged into `admin_audit_log`.
- Structured logging through Fastify’s pino logger.

Add more controls (JWT, email notifications, reCAPTCHA, etc.) as needed.

---

## 7. Deployment checklist

1. Provision Neon project (done through Neon Connect).
2. Set env vars on the platform (Render, Fly, Railway, etc.).
3. `npm run build` and start with `node dist/server.js`.
4. Point the frontend `VITE_API_URL` to the deployed backend.
5. Rotate `ADMIN_API_KEY` periodically and deliver via secure channel.

You now have a production-ready backend tailored for IITGN’s forms. Extend `src/routes` with additional modules following the existing plugin pattern.

