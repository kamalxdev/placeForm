"use client";

import { RecoilRoot } from "recoil";
import FORM from "@/models/form";
import Error404 from "@/components/errors/404";


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return <RecoilRoot> {children}</RecoilRoot>;
}
