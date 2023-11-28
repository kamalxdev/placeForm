'use client';

import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      className="transition hover:bg-black hover:text-white hover:font-medium rounded-md"
    >
      Log Out
    </button>
  );
}
