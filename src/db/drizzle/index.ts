import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTables } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqliteDatabase, {
  schema: {
    posts: postsTables,
  },
  logger: false,
});
