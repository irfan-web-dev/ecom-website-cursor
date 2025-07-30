"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-800">
        <p className="mb-4">Your cart is empty.</p>
        <Link href="/products" className="text-blue-600 hover:underline font-semibold">Shop Products</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    // For demo, redirect to first product detail with ?from=checkout
    const first = cart[0];
    clearCart();
    router.push(`/products/${first.id}?from=checkout`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800">
      <ul className="divide-y divide-gray-200 dark:divide-gray-800 mb-4">
        {cart.map((item) => (
          <li key={item.id} className="flex flex-col sm:flex-row items-center gap-4 py-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded bg-gray-50 dark:bg-gray-800" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>
            <button
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center font-bold text-lg mb-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Proceed to Checkout
      </button>
    </div>
  );
} 