import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import * as schema from '@/lib/db/schema/auth-schema';
import { db } from '../db';
import { serverEnv } from '../env/server';

export const auth = betterAuth({
  trustedOrigins: [serverEnv.FRONTEND_URL],
  database: drizzleAdapter(db, {
    provider: 'sqlite',
    schema: { ...schema },
  }),
  emailAndPassword: {
    enabled: true,
  },
  // TODO: Add Google
});
