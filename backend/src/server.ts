import { buildApp } from "./app.ts";
import { env } from "./env.ts";

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

