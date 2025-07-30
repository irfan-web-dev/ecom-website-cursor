import Cart from "../../components/Cart";

export default function CartPage() {
  return (
    <main className="min-h-screen py-8 px-4 flex items-center justify-center">
      <section className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Your Cart</h1>
        <Cart />
      </section>
    </main>
  );
} 