import { user } from "./models/user"

export const table = {
	user
} as const

export type Table = typeof table
