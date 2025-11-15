import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(2).max(32),
    email: z.email(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(128),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(128),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
