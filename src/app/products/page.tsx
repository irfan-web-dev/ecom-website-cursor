"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import products from "@/mock/products";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();

  // Filter and sort logic
  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }
  if (sort === "price-asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen py-8 px-4">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">All Products</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-4 border border-gray-100 dark:border-gray-800">
          <select className="p-2 rounded border border-gray-300 dark:border-gray-700" value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Shoes">Shoes</option>
          </select>
          <select className="p-2 rounded border border-gray-300 dark:border-gray-700" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        {/* Show quantity summary */}
        <div className="mb-4 text-center text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Total Products:</span> {products.length} &nbsp;|&nbsp; 
          <span className="font-semibold">Total Quantity in Stock:</span> {products.reduce((sum, p) => sum + (p.quantity || 0), 0)}
        </div>
        {/* Show product list with quantity for each product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white dark:bg-gray-900 rounded-lg shadow p-4 border border-gray-100 dark:border-gray-800 flex flex-col cursor-pointer transition-all duration-300 group overflow-hidden ${
                hovered === product.id ? "ring-2 ring-blue-400 scale-[1.025] shadow-2xl z-10" : "hover:ring-2 hover:ring-blue-400 hover:scale-[1.025] hover:shadow-2xl"
              }`}
              onClick={() => router.push(`/products/${product.id}`)}
              tabIndex={0}
              role="button"
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") {
                  router.push(`/products/${product.id}`);
                }
              }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative w-full h-48 mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded transition-transform duration-300 group-hover:scale-105"
                  style={{ background: "#f9fafb" }}
                />
                {/* Overlay actions on hover */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 dark:bg-gray-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    hovered === product.id ? "opacity-100" : ""
                  }`}
                >
                  <button
                    className="mb-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                    onClick={e => {
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-blue-700 rounded shadow hover:bg-blue-100 transition font-semibold"
                    onClick={e => {
                      e.stopPropagation();
                      router.push(`/products/${product.id}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
              <p className="text-blue-600 font-bold mb-1">${product.price}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">{product.description}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Quantity in stock:</span> {product.quantity}
              </p>
              {/* Show actions below for mobile (not hover) */}
              <div className="flex flex-col gap-2 mt-auto sm:hidden">
                <button
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
                  onClick={e => {
                    e.stopPropagation();
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                    });
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="inline-block px-4 py-2 bg-white text-blue-700 rounded hover:bg-blue-100 transition text-center font-semibold border border-blue-600"
                  onClick={e => {
                    e.stopPropagation();
                    router.push(`/products/${product.id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 