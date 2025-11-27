import { FastifyPluginAsync } from "fastify";
import { visitPayloadSchema } from "../schemas/visit.ts";
import { campusVisits } from "../db/schema.ts";
import { getClientMetadata } from "../utils/request.ts";
import { evaluateSpam } from "../services/spamGuard.ts";
import { notifySubmission } from "../services/notification.ts";

const normalizeVisitPayload = (body: unknown) => {
  if (!body || typeof body !== "object") return {};

  const raw = body as Record<string, unknown>;

  return {
    visitorName:
      typeof raw.visitorName === "string"
        ? raw.visitorName
        : typeof raw.name === "string"
          ? raw.name
          : undefined,
    organization:
      typeof raw.organization === "string"
        ? raw.organization
        : typeof raw.company === "string"
          ? raw.company
          : undefined,
    email: typeof raw.email === "string" ? raw.email : undefined,
    phone: typeof raw.phone === "string" ? raw.phone : undefined,
    preferredDate:
      typeof raw.preferredDate === "string"
        ? raw.preferredDate
        : typeof raw.visitDate === "string"
          ? raw.visitDate
          : undefined,
    participants:
      typeof raw.participants === "number" || typeof raw.participants === "string"
        ? raw.participants
        : undefined,
    notes:
      typeof raw.notes === "string"
        ? raw.notes
        : typeof raw.message === "string"
          ? raw.message
          : undefined,
    honeypot: typeof raw.honeypot === "string" ? raw.honeypot : undefined,
  };
};

export const visitRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/forms/visit", async (request, reply) => {
    const payload = visitPayloadSchema.parse(normalizeVisitPayload(request.body));
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

    const createdAt =
      (record.createdAt instanceof Date ? record.createdAt : undefined) ??
      new Date();

    return reply.status(201).send({
      success: true,
      id: record.id,
      status: spamResult.isSpam ? "queued_for_review" : "scheduled",
      receivedAt: createdAt.toISOString(),
    });
  });
};

