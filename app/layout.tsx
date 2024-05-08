import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Curency Converter",
  description: "A simple currency converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-blue-800 relative w-full h-full">
      <body className="flex flex-col m-8 sm:m-10 rounded-xl border border-white border-opacity-80 bg-gray-300 bg-opacity-80">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
