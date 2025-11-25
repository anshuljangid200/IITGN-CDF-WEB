import fp from "fastify-plugin";
import rateLimit from "@fastify/rate-limit";
import { env } from "../env.ts";

export const rateLimitPlugin = fp(async (fastify) => {
  await fastify.register(rateLimit, {
    max: env.RATE_LIMIT_MAX,
    timeWindow: env.RATE_LIMIT_WINDOW * 1000,
    hook: "preHandler",
    allowList: (req) => req.headers["x-internal-cron"] === "true",
  });
});

