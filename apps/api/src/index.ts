import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import authRoute from './routes/auth';

const app = new Hono();

const routes = [authRoute] as const;

routes.forEach((route) => {
  app.basePath('/api').route('/', route);
});

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

serve(
  {
    fetch: app.fetch,
    port: Number(process.env.PORT) || 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
