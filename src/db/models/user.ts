import {
    pgTable,
    varchar,
} from 'drizzle-orm/pg-core'
import { baseColumns } from '../base'


export const user = pgTable(
    'user',
    {
        ...baseColumns,
        name: varchar('name').notNull().unique(),
        email: varchar('email').notNull().unique(),
        password: varchar('password').notNull(),
    }
)
