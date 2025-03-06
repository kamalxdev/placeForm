import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

import NextAuthProvider from "@/provider/nextAuthProvider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import connect from "@/db/mongo.config";




const archivo = Archivo({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "PlaceForm- Your Ultimate Form and Quiz Creator!",
  description: "Elevate your form creation game with placeForm – the platform that goes beyond expectations. ",
  other: {
    "google-site-verification": "1z_0Kzwtz-_yVauIBmnCbNouK8QUZvm_A14JDoyGWoI",
  },
  openGraph: {
    title: "PlaceForm- Your Ultimate Form and Quiz Creator!",
    description: "Elevate your form creation game with placeForm – the platform that goes beyond expectations. ",
    type: "website",
    url: process.env.WEBSITE_URL || "https://placeform.kamalsingh.me/",
    images: [
      {
        url: `${process.env.WEBSITE_URL || "https://placeform.kamalsingh.me"}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "PlaceForm",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  connect();
  return (
    <html lang="en">

      <body className={archivo.className}>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3285538400653886"/>
        <NextAuthProvider> <Navbar/> <div className="h-full">{children}</div> <Footer/></NextAuthProvider>

      </body>
    </html>
  );
}
