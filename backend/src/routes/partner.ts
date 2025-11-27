import { FastifyPluginAsync } from "fastify";
import { partnerApplicationSchema } from "../schemas/partner.ts";
import { partnerApplications } from "../db/schema.ts";
import { getClientMetadata } from "../utils/request.ts";
import { evaluateSpam } from "../services/spamGuard.ts";
import { notifySubmission } from "../services/notification.ts";

export const partnerRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/forms/partner", async (request, reply) => {
    const payload = partnerApplicationSchema.parse(request.body);
    const client = getClientMetadata(request);
    const spamResult = evaluateSpam({
      message: payload.message,
      ipAddress: client.ipAddress,
      userAgent: client.userAgent,
    });

    const [record] = await fastify.db
      .insert(partnerApplications)
      .values({
        fullName: payload.fullName,
        email: payload.email,
        expertise: payload.expertise ?? null,
        linkedinUrl: payload.linkedinUrl,
        message: payload.message,
      })
      .returning();

    await notifySubmission("partner", {
      id: record.id,
      expertise: record.expertise,
    });

    const createdAt =
      record.createdAt instanceof Date ? record.createdAt : new Date();

    return reply.status(201).send({
      success: true,
      id: record.id,
      status: spamResult.isSpam ? "queued_for_review" : "received",
      receivedAt: createdAt.toISOString(),
    });
  });
};
