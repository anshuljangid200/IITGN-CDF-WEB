import Fastify from "fastify";
import { randomUUID } from "node:crypto";
import { env } from "./env.js";
import { securityPlugin } from "./plugins/security.js";
import { rateLimitPlugin } from "./plugins/rate-limit.js";
import { dbPlugin } from "./plugins/db.js";
import { contactRoutes } from "./routes/contact.js";
import { visitRoutes } from "./routes/visit.js";
import { adminRoutes } from "./routes/admin.js";
import { healthRoutes } from "./routes/health.js";
import { partnerRoutes } from "./routes/partner.js";

export const buildApp = async () => {
  const app = Fastify({
    logger: {
      level: env.NODE_ENV === "development" ? "debug" : "info",
    },
  });

  app.addHook("onRequest", async (request) => {
    request.headers["x-request-id"] =
      request.headers["x-request-id"] ?? randomUUID();
  });

  await app.register(securityPlugin);
  await app.register(rateLimitPlugin);
  await app.register(dbPlugin);

  await app.register(healthRoutes, { prefix: "/api" });
  await app.register(contactRoutes, { prefix: "/api" });
  await app.register(visitRoutes, { prefix: "/api" });
  await app.register(partnerRoutes, { prefix: "/api" });
  await app.register(adminRoutes, { prefix: "/api" });
  
  app.log.info("Registered routes: /api/health, /api/forms/contact, /api/forms/visit");

  app.setNotFoundHandler((request, reply) => {
    reply.status(404).send({
      message: "Resource not found",
      path: request.url,
    });
  });

  app.setErrorHandler((error, _request, reply) => {
    if (error.name === "UnauthorizedError") {
      return reply.status(401).send({ message: "Unauthorized" });
    }

    if ("issues" in error) {
      return reply.status(400).send({
        message: "Validation failed",
        issues: error.issues,
      });
    }

    app.log.error(error);
    return reply.status(500).send({ message: "Unexpected error" });
  });

  return app;
};

