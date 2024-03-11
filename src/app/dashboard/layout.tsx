
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return <>{children}</>;
}
