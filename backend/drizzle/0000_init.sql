CREATE TABLE IF NOT EXISTS "contact_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"full_name" varchar(120) NOT NULL,
	"email" varchar(160) NOT NULL,
	"phone" varchar(40),
	"organization" varchar(160),
	"program_interest" varchar(160),
	"message" text NOT NULL,
	"ip_address" varchar(64) NOT NULL,
	"user_agent" text NOT NULL,
	"is_spam" boolean DEFAULT false NOT NULL,
	"created_at" timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "campus_visits" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"visitor_name" varchar(120) NOT NULL,
	"organization" varchar(160),
	"email" varchar(160) NOT NULL,
	"phone" varchar(40) NOT NULL,
	"preferred_date" date NOT NULL,
	"participants" integer DEFAULT 1 NOT NULL,
	"notes" text,
	"ip_address" varchar(64) NOT NULL,
	"user_agent" text NOT NULL,
	"is_spam" boolean DEFAULT false NOT NULL,
	"created_at" timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "admin_audit_log" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"actor" varchar(120) NOT NULL,
	"action" varchar(80) NOT NULL,
	"entity" varchar(80) NOT NULL,
	"entity_id" uuid,
	"created_at" timestamptz DEFAULT now() NOT NULL
);

