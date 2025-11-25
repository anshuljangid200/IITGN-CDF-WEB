import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "../env.ts";

const neonClient = neon(env.NEON_DATABASE_URL);

export const db = drizzle(neonClient);

