"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
      <Link href={`/products/${product.id}`} className="mb-4 block group">
        <Image
          src={product.image}
          alt={product.title}
          width={320}
          height={192}
          unoptimized
          className="w-full h-48 object-contain rounded bg-gray-50 dark:bg-gray-800 group-hover:opacity-90 transition"
        />
      </Link>
      <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[48px]">{product.title}</h2>
      <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
      <button
        className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
      >
        Add to Cart
      </button>
    </div>
  );
} 