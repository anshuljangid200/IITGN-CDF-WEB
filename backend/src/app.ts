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

export const buildApp = () => {
  const app = Fastify({
    logger: {
      level: env.NODE_ENV === "development" ? "debug" : "info",
    },
  });

  app.addHook("onRequest", async (request) => {
    request.headers["x-request-id"] =
      request.headers["x-request-id"] ?? randomUUID();
  });

  app.register(securityPlugin);
  app.register(rateLimitPlugin);
  app.register(dbPlugin);

  app.register(healthRoutes, { prefix: "/api" });
  app.register(contactRoutes, { prefix: "/api" });
  app.register(visitRoutes, { prefix: "/api" });
  app.register(partnerRoutes, { prefix: "/api" });
  app.register(adminRoutes, { prefix: "/api" });

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

