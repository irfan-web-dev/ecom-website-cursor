"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="w-full px-4 py-3 bg-white/80 dark:bg-gray-900/80 shadow flex items-center justify-between sticky top-0 z-30 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-2xl font-bold tracking-tight">ModernShop</Link>
      <div className="flex gap-6 items-center">
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/cart" className="relative hover:underline">
          Cart
          {count > 0 && (
            <span className="absolute -top-2 -right-4 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow border border-white dark:border-gray-900">
              {count}
            </span>
          )}
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}