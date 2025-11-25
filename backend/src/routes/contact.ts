import { FastifyPluginAsync } from "fastify";
import { contactPayloadSchema } from "../schemas/contact.ts";
import { contactMessages } from "../db/schema.ts";
import { getClientMetadata } from "../utils/request.ts";
import { evaluateSpam } from "../services/spamGuard.ts";
import { notifySubmission } from "../services/notification.ts";

export const contactRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/forms/contact", async (request, reply) => {
    const payload = contactPayloadSchema.parse(request.body);
    const client = getClientMetadata(request);
    const spamResult = evaluateSpam({
      message: payload.message,
      ipAddress: client.ipAddress,
      userAgent: client.userAgent,
      honeypot: payload.honeypot,
    });

    const insertPayload = {
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone ?? null,
      organization: payload.organization ?? null,
      programInterest: payload.programInterest ?? null,
      message: payload.message,
      ipAddress: client.ipAddress,
      userAgent: client.userAgent,
      isSpam: spamResult.isSpam,
    } as typeof contactMessages.$inferInsert;

    const [record] = await fastify.db
      .insert(contactMessages)
      .values(insertPayload)
      .returning();

    await notifySubmission("contact", {
      id: record.id,
      spamScore: spamResult.score,
    });

    return reply.status(201).send({
      id: record.id,
      status: spamResult.isSpam ? "queued_for_review" : "accepted",
    });
  });
};

