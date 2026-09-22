import {
    pgTable,
    varchar,
} from 'drizzle-orm/pg-core'
import { baseColumns } from '../base'


export const user = pgTable(
    'user',
    {
        ...baseColumns,
        username: varchar('username').notNull().unique(),
        password: varchar('password').notNull(),
        email: varchar('email').notNull().unique(),
    }
)
