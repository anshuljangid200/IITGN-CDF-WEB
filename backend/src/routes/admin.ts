import { FastifyPluginAsync } from "fastify";
import { desc, eq, sql } from "drizzle-orm";
import { env } from "../env.js";
import { adminAuditLog, campusVisits, contactMessages } from "../db/schema.js";

const DEFAULT_PAGE_SIZE = 20;

const requireAdminKey = (headerKey?: string) => {
  if (!headerKey || headerKey !== env.ADMIN_API_KEY) {
    const err = new Error("Unauthorized");
    err.name = "UnauthorizedError";
    throw err;
  }
};

type AdminQuery = {
  page?: string;
  pageSize?: string;
  includeSpam?: string;
};

export const adminRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async (request) => {
    requireAdminKey(request.headers["x-admin-key"] as string | undefined);
  });

  fastify.get("/admin/dashboard", async () => {
    const [contactStats] = await fastify.db
      .select({
        total: sql<number>`count(*)`,
        spam: sql<number>`sum(case when is_spam then 1 else 0 end)`,
      })
      .from(contactMessages);

    const [visitStats] = await fastify.db
      .select({
        total: sql<number>`count(*)`,
        spam: sql<number>`sum(case when is_spam then 1 else 0 end)`,
      })
      .from(campusVisits);

    return {
      contact: contactStats,
      visits: visitStats,
    };
  });

  fastify.get<{ Querystring: AdminQuery }>("/admin/contact", async (request) => {
    const page = Number(request.query.page ?? 1);
    const pageSize = Number(request.query.pageSize ?? DEFAULT_PAGE_SIZE);
    const includeSpam = request.query.includeSpam === "true";

    const filters = includeSpam ? undefined : eq(contactMessages.isSpam, false);

    const data = await fastify.db
      .select()
      .from(contactMessages)
      .where(filters)
      .orderBy(desc(contactMessages.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    await fastify.db.insert(adminAuditLog).values({
      actor: "api-key",
      action: "list",
      entity: "contact_messages",
    });

    return { data, page, pageSize };
  });

  fastify.get<{ Querystring: AdminQuery }>("/admin/visits", async (request) => {
    const page = Number(request.query.page ?? 1);
    const pageSize = Number(request.query.pageSize ?? DEFAULT_PAGE_SIZE);
    const includeSpam = request.query.includeSpam === "true";

    const filters = includeSpam ? undefined : eq(campusVisits.isSpam, false);

    const data = await fastify.db
      .select()
      .from(campusVisits)
      .where(filters)
      .orderBy(desc(campusVisits.createdAt))
      .limit(pageSize)
      .offset((page - 1) * pageSize);

    await fastify.db.insert(adminAuditLog).values({
      actor: "api-key",
      action: "list",
      entity: "campus_visits",
    });

    return { data, page, pageSize };
  });
};

