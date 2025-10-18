import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient({});

export const { signIn, signOut, signUp, useSession } = authClient;

// Reference: https://catalins.tech/better-auth-with-hono-bun-typescript-react-vite/
export type Session = typeof authClient.$Infer.Session;
export type User = Session['user'];
