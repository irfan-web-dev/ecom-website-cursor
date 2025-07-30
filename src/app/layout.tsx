import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ModernShop - E-commerce",
  description: "A modern, fully functional e-commerce site built with Next.js 15.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="min-h-full min-w-full h-full w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full min-w-full h-full w-full font-sans text-gray-900 dark:text-gray-100`}
      >
        <CartProvider>
          <Navbar />
          <div className="flex-1 w-full flex flex-col items-center justify-start">
            {children}
          </div>
          <footer className="w-full py-6 text-center text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-gray-900/70 mt-12 border-t border-gray-200 dark:border-gray-800">
            &copy; {new Date().getFullYear()} ModernShop. All rights reserved.
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
