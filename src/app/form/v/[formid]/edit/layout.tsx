"use client";

import { RecoilRoot } from "recoil";


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return <RecoilRoot> {children}</RecoilRoot>;
}
