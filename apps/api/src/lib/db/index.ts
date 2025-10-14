import { drizzle } from 'drizzle-orm/libsql';

import { serverEnv } from '../env/server';

export const db = drizzle({
  connection: {
    url: serverEnv.DATABASE_URL,
    authToken: serverEnv.DATABASE_AUTH_TOKEN,
  },
});
