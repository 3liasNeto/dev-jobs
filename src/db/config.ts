import { defineRelations } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import Elysia from "elysia";

const relations = defineRelations(schema);
const client = postgres(process.env.DATABASE_URL!, { max: 10 });

export const db = drizzle({ client, relations });

export type Connection = typeof db;
export const dbProvider = new Elysia({ name: "provider.db" }).decorate(
  "db",
  db,
);

export const closeDb = () => client.end({ timeout: 5 });
