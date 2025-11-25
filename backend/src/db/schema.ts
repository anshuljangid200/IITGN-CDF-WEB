import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
  date,
} from "drizzle-orm/pg-core";

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  organization: varchar("organization", { length: 160 }),
  programInterest: varchar("program_interest", { length: 160 }),
  message: text("message").notNull(),
  ipAddress: varchar("ip_address", { length: 64 }).notNull(),
  userAgent: text("user_agent").notNull(),
  isSpam: boolean("is_spam").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

export const campusVisits = pgTable("campus_visits", {
  id: uuid("id").defaultRandom().primaryKey(),
  visitorName: varchar("visitor_name", { length: 120 }).notNull(),
  organization: varchar("organization", { length: 160 }),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull(),
  preferredDate: date("preferred_date").notNull(),
  participants: integer("participants").notNull().default(1),
  notes: text("notes"),
  ipAddress: varchar("ip_address", { length: 64 }).notNull(),
  userAgent: text("user_agent").notNull(),
  isSpam: boolean("is_spam").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

export const adminAuditLog = pgTable("admin_audit_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  actor: varchar("actor", { length: 120 }).notNull(),
  action: varchar("action", { length: 80 }).notNull(),
  entity: varchar("entity", { length: 80 }).notNull(),
  entityId: uuid("entity_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .default(sql`now()`),
});

