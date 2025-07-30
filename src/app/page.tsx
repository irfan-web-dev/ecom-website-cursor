"use client";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import products from "@/mock/products";

export default function Home() {
  // Pick first 2 as featured for demo
  const featured = products.slice(0, 2);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className="w-full max-w-4xl text-center py-16 mb-8">
        <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 mx-auto max-w-2xl border border-gray-100 dark:border-gray-800">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700 dark:text-blue-300">Welcome to <span className="text-blue-600 dark:text-blue-400">ModernShop</span></h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8">Discover the best products at unbeatable prices.</p>
          <Link href="/products" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Shop All Products</Link>
        </div>
      </section>
      <section className="w-full max-w-5xl mt-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-700 dark:text-blue-300">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
