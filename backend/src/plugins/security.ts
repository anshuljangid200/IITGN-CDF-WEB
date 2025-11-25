import fp from "fastify-plugin";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

export const securityPlugin = fp(async (fastify) => {
  await fastify.register(cors, {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"],
  });

  await fastify.register(helmet, {
    global: true,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  });

  fastify.addHook("onRequest", async (req) => {
    req.headers["x-request-received"] = new Date().toISOString();
  });
});

