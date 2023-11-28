'use client';

import React from 'react'
import { SessionProvider } from "next-auth/react"

interface typeProps {
    children: React.ReactNode;
}

export default function NextAuthProvider({children}: typeProps) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

