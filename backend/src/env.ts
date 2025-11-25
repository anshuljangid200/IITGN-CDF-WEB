import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NEON_DATABASE_URL: z.string().url(),
  ADMIN_API_KEY: z.string().min(32),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(60),
  RATE_LIMIT_WINDOW: z.coerce.number().int().positive().default(60),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse(process.env);

