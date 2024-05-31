import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navBar";
import React,{Suspense} from "react";
import Loading from "./components/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title:"Music",
  description:"Search for the artist"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
        </body>
    </html>
  );
}
