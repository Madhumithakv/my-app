'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <button
        onClick={() =>
          signIn("google", { callbackUrl: "/registration" }) 
        }
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
