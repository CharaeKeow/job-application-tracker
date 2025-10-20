import { createEnv } from '@t3-oss/env-core';

import 'dotenv/config';

import { z } from 'zod';

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string(),
  },
  runtimeEnv: process.env,
});
