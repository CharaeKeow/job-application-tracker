import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { signUp } from '@/lib/auth/auth-client';

export const Route = createFileRoute('/(auth)/register')({
  component: RegisterComponent,
});

function RegisterComponent() {
  // Tanstack form this!
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    await signUp.email(
      { email, password, name },
      {
        onSuccess: () => {
          navigate({ to: '/' });
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 p-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-1 w-xl"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-1 w-xl"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-1 w-xl"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="outline-1 w-xl"
        />
        <button
          type="submit"
          className="bg-blue-800 w-fit rounded-md text-white font-semibold py-2 px-6"
        >
          Register
        </button>
      </form>
    </div>
  );
}
