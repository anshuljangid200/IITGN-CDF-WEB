import { FastifyPluginAsync } from "fastify";
import { contactPayloadSchema } from "../schemas/contact.js";
import { contactMessages } from "../db/schema.js";
import { getClientMetadata } from "../utils/request.js";
import { evaluateSpam } from "../services/spamGuard.js";
import { notifySubmission } from "../services/notification.js";

const pickString = (value: unknown) =>
  typeof value === "string" ? value.trim() || undefined : undefined;

const normalizePhone = (value?: string) => {
  if (!value) return undefined;
  const digits = value.replace(/[^\d+]/g, "");
  if (!digits) return undefined;
  return digits.startsWith("+") ? digits : `+${digits}`;
};

const normalizeContactPayload = (body: unknown) => {
  if (!body || typeof body !== "object") return {};

  const raw = body as Record<string, unknown>;
  const phoneCandidate =
    pickString(raw.phone) ??
    pickString(raw.mobile) ??
    pickString(raw.phoneNumber);

  return {
    fullName: pickString(raw.fullName) ?? pickString(raw.name),
    email: pickString(raw.email),
    phone: normalizePhone(phoneCandidate),
    organization: pickString(raw.organization) ?? pickString(raw.company),
    programInterest:
      pickString(raw.programInterest) ?? pickString(raw.subject) ?? pickString(raw.track),
    message: pickString(raw.message) ?? pickString(raw.notes),
    honeypot:
      pickString(raw.honeypot) ?? pickString(raw.website) ?? pickString(raw.botField),
  };
};

export const contactRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/forms/contact", async (request, reply) => {
    fastify.log.info("Contact form submission received");
    const payload = contactPayloadSchema.parse(
      normalizeContactPayload(request.body),
    );
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

    const createdAt =
      (record.createdAt instanceof Date ? record.createdAt : undefined) ??
      new Date();

    return reply.status(201).send({
      success: true,
      id: record.id,
      status: spamResult.isSpam ? "queued_for_review" : "accepted",
      receivedAt: createdAt.toISOString(),
    });
  });
};

