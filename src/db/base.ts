import {
    timestamp,
    uuid
} from 'drizzle-orm/pg-core'
import { uuidv7 } from "uuidv7";

export const baseColumns = {
  id: uuid("id").primaryKey().$defaultFn(() => uuidv7()),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at"),
};
