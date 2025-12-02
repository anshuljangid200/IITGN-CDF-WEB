import { buildApp } from "./app.js";
import { env } from "./env.js";

const port = Number(process.env.PORT ?? 3333);
const host = "0.0.0.0";

buildApp()
  .then((app) => {
    return app.listen({ port, host });
  })
  .then(() => {
    console.log(`Backend listening on http://${host}:${port}`);
    console.log(`API endpoints available at http://${host}:${port}/api`);
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });

