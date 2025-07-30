"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutForm() {
  const { clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <div className="text-center p-8 text-xl font-semibold">Thank you for your order! 🎉</div>;
  }

  return (
    <form
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-gray-100 dark:border-gray-800"
      onSubmit={e => {
        e.preventDefault();
        clearCart();
        setSubmitted(true);
      }}
    >
      <input className="p-3 rounded border border-gray-300 dark:border-gray-700" placeholder="Name" required />
      <input className="p-3 rounded border border-gray-300 dark:border-gray-700" placeholder="Email" type="email" required />
      <input className="p-3 rounded border border-gray-300 dark:border-gray-700" placeholder="Address" required />
      <button type="submit" className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700 transition font-semibold">Place Order</button>
    </form>
  );
}