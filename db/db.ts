import { Pool } from 'pg'
// or `import * as Cursor from 'pg-cursor'` depending on your tsconfig
import { Kysely, PostgresDialect } from 'kysely'
import Cursor from 'pg-cursor'
import { DB } from './types'

export const db = new Kysely<DB>({
    // PostgresDialect requires the Cursor dependency
    dialect: new PostgresDialect({
      pool: new Pool({
        host: 'localhost',
        user: "postgres",
        password: "postgres",
        database: 'postgres'
      }),
      cursor: Cursor
    }),
})