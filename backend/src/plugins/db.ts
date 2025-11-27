import fp from "fastify-plugin";
import { db } from "../db/client.js";

declare module "fastify" {
  interface FastifyInstance {
    db: typeof db;
  }
}

export const dbPlugin = fp(async (fastify) => {
  fastify.decorate("db", db);
});

