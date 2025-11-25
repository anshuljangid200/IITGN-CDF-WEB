import { FastifyPluginAsync } from "fastify";
import { visitPayloadSchema } from "../schemas/visit.ts";
import { campusVisits } from "../db/schema.ts";
import { getClientMetadata } from "../utils/request.ts";
import { evaluateSpam } from "../services/spamGuard.ts";
import { notifySubmission } from "../services/notification.ts";

export const visitRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/forms/visit", async (request, reply) => {
    const payload = visitPayloadSchema.parse(request.body);
    const client = getClientMetadata(request);
    const spamResult = evaluateSpam({
      message: payload.notes,
      ipAddress: client.ipAddress,
      userAgent: client.userAgent,
      honeypot: payload.honeypot,
    });

    const insertPayload = {
      visitorName: payload.visitorName,
      organization: payload.organization ?? null,
      email: payload.email,
      phone: payload.phone,
      preferredDate: payload.preferredDate,
      participants: payload.participants,
      notes: payload.notes ?? null,
      ipAddress: client.ipAddress,
      userAgent: client.userAgent,
      isSpam: spamResult.isSpam,
    } as typeof campusVisits.$inferInsert;

    const [record] = await fastify.db
      .insert(campusVisits)
      .values(insertPayload)
      .returning();

    await notifySubmission("visit", {
      id: record.id,
      spamScore: spamResult.score,
    });

    return reply.status(201).send({
      id: record.id,
      status: spamResult.isSpam ? "queued_for_review" : "scheduled",
    });
  });
};

