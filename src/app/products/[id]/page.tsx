"use client";

import React from "react";
import products from "@mock/products";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params);
  const product = products.find((p) => String(p.id) === unwrappedParams.id);
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const fromCheckout = searchParams?.get("from") === "checkout";

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      {fromCheckout && (
        <section className="mb-8 bg-green-50 dark:bg-green-900/40 rounded-xl p-6 border border-green-200 dark:border-green-700 text-green-900 dark:text-green-200">
          <h2 className="text-xl font-bold mb-2">Thank you for your purchase!</h2>
          <p>You have successfully checked out this product.</p>
        </section>
      )}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {product.images.map((img: string, i: number) => (
              <Image key={i} src={img} alt={product.title} width={120} height={120} unoptimized className="rounded border bg-white dark:bg-gray-900" />
            ))}
          </div>
          <Image src={product.image} alt={product.title} width={400} height={400} unoptimized className="rounded-lg w-full h-96 object-contain bg-white dark:bg-gray-900" />
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
          <p className="mb-2 text-gray-700 dark:text-gray-300">{product.description}</p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Quantity in stock:</span> {product.quantity}
          </p>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
            onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
          >
            Add to Cart
          </button>
          <Link href="/products" className="text-blue-500 hover:underline">Back to Products</Link>
        </div>
      </div>
    </main>
  );
} 