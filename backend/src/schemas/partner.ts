import { z } from "zod";

export const partnerApplicationSchema = z
  .object({
    fullName: z.string().min(2).max(120),
    email: z.string().email().max(160),
    expertise: z.string().max(120).optional(),
    linkedinUrl: z.string().url().max(320),
    message: z.string().min(20).max(4000),
  })
  .strict();

export type PartnerApplicationPayload = z.infer<typeof partnerApplicationSchema>;

