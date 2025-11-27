import { buildApp } from "./app.js";
import { env } from "./env.js";

const port = Number(process.env.PORT ?? 3333);
const host = "0.0.0.0";

const app = buildApp();

app
  .listen({ port, host })
  .then(() => {
    app.log.info(`Backend listening on http://${host}:${port}`);
  })
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });

