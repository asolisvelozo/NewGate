import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos Inter
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";

// Configuramos Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NewGate",
  description: "Sitio oficial",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col text-white bg-cover bg-center bg-fixed`}
        style={{ backgroundImage: "url('/wood.jpg')" }}
      >
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}