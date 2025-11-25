import fp from "fastify-plugin";
import { db } from "../db/client.ts";

declare module "fastify" {
  interface FastifyInstance {
    db: typeof db;
  }
}

export const dbPlugin = fp(async (fastify) => {
  fastify.decorate("db", db);
});

