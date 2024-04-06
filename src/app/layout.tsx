import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextAuthProvider from "@/provider/nextAuthProvider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer";
import Script from "next/script";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlaceForm- Your Ultimate Form and Quiz Creator!",
  description: "Elevate your form creation game with placeForm – the platform that goes beyond expectations. Whether you're crafting engaging quizzes or creating versatile forms, we've got you covered. Unleash your creativity, gather valuable insights, and streamline data collection with our intuitive form builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3285538400653886"/>
        <NextAuthProvider> <Navbar/> {children} <Footer/></NextAuthProvider>
      </body>
    </html>
  );
}
