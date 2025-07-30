"use client";

import ProductCard from "./ProductCard";
import products from "@/mock/products";

export default function ProductList({ category, sort }: { category?: string; sort?: string }) {
  let filtered = products;
  if (category && category !== "") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
} 