import { z } from "zod";

export const visitPayloadSchema = z
  .object({
    visitorName: z.string().min(2).max(120),
    organization: z.string().max(160).optional(),
    email: z.string().email().max(160),
    phone: z
      .string()
      .regex(/^[\d+()\-\s]{7,40}$/)
      .max(40),
    preferredDate: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
      message: "preferredDate must be a valid ISO date",
    }),
    participants: z.coerce.number().int().min(1).max(30).default(1),
    notes: z.string().max(4000).optional(),
    honeypot: z.string().optional(),
  })
  .strict();

export type VisitPayload = z.infer<typeof visitPayloadSchema>;

