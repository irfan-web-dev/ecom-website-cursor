import CheckoutForm from "../../components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen py-8 px-4 flex items-center justify-center">
      <section className="w-full max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Checkout</h1>
        <CheckoutForm />
      </section>
    </main>
  );
} 