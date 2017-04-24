CREATE TABLE IF NOT EXISTS "csr" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "name" text
);

CREATE UNIQUE INDEX IF NOT EXISTS csr_id_uindex ON "csr" ("id");

CREATE TABLE IF NOT EXISTS "customers" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "email" text
);

CREATE UNIQUE INDEX IF NOT EXISTS customers_id_uindex ON "customers" ("id");

CREATE TABLE IF NOT EXISTS "priorities" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "description" text
);

CREATE UNIQUE INDEX IF NOT EXISTS priorities_id_uindex ON "priorities" ("id");

CREATE TABLE IF NOT EXISTS "steps" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "step" text,
  "priority" int
);

CREATE UNIQUE INDEX IF NOT EXISTS steps_id_uindex ON "steps" ("id");

CREATE TABLE IF NOT EXISTS "tracking" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "csr" text,
  "customer_id" integer,
  "step" integer,
  "mod_date" text,
  "date" text
);