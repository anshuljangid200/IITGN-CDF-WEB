import { z } from "zod";

export const contactPayloadSchema = z
  .object({
    fullName: z.string().min(2).max(120),
    email: z.string().email().max(160),
    phone: z.string().max(40).optional(),
    organization: z.string().max(160).optional(),
    programInterest: z.string().max(160).optional(),
    message: z.string().min(20).max(4000),
    honeypot: z.string().optional(),
  })
  .strict();

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

