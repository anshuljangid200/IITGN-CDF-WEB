import { FastifyPluginAsync } from "fastify";
import { partnerApplicationSchema } from "../schemas/partner.js";
import { partnerApplications } from "../db/schema.js";
import { getClientMetadata } from "../utils/request.js";
import { evaluateSpam } from "../services/spamGuard.js";
import { notifySubmission } from "../services/notification.js";

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
