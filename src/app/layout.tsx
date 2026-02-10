import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar  } from "@/components/NavBar";
import  Footer  from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NewGate",
  description: "Sitio oficial",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col text-white bg-cover bg-center`}
        style={{ backgroundImage: "url('/wood.jpg')" }}
      >
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
