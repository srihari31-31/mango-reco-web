// src/ProductList.tsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./export";

export default function ProductList() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const countInCart = useMemo(
    () => Object.values(cart).reduce((a, b) => a + b, 0),
    [cart]
  );

  const addToCart = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* heading */}
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Perfect mangoes for everyone
        </h2>
        <p className="mt-2 text-gray-600">
          Hand-picked from trusted farms. Naturally sweet, naturally good.
        </p>
      </header>

      {/* 2-column: list + sticky promo */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,720px)_minmax(280px,1fr)] gap-8">
        {/* LEFT: vertical list */}
        <section className="space-y-5">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* image */}
              <Link to={`/product/${p.id}`} className="block h-52 sm:h-56 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              {/* content */}
              <div className="p-4 sm:p-5">
                {p.badge && (
                  <span className="inline-block text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}

                <Link to={`/product/${p.id}`}>
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
                    {p.title}
                  </h3>
                </Link>

                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="font-semibold text-gray-900">
                    ${p.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => addToCart(p.id)}
                    className="inline-flex items-center rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-3 py-2 transition"
                  >
                    Add to cart
                  </button>

                  {typeof p.stock === "number" && (
                    <span className="ml-auto text-xs text-gray-500">
                      {p.stock} in stock
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* RIGHT: sticky promo */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-amber-100 bg-amber-50/70 shadow-sm p-5"
            >
              <div className="text-xs font-semibold text-amber-700 bg-amber-100 inline-flex px-2 py-1 rounded">
                LIMITED OFFER
              </div>

              <h4 className="mt-3 text-lg font-bold text-gray-900 flex items-center gap-2">
                <span>Summer Mango Box</span>
                <span className="text-amber-500">🥭</span>
              </h4>

              <p className="mt-1 text-sm text-gray-700">
                Hand-picked Alphonso & Kesar. Ships fresh every Friday.
              </p>

              <button className="mt-4 w-full rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 text-sm transition">
                Add to Cart — $19.99
              </button>

              <p className="mt-2 text-[11px] text-gray-500">
                Free delivery over $69 • 10-day freshness guarantee
              </p>
            </motion.div>

            <button className="w-full rounded-xl border border-amber-100 bg-amber-50/60 py-3 text-sm text-amber-800 hover:bg-amber-100 transition">
              🍯 Try our <span className="underline">Mango Jam</span>
            </button>
          </div>
        </aside>
      </div>

      {countInCart > 0 && (
        <div className="fixed right-4 bottom-5 rounded-full bg-gray-900 text-white px-4 py-2 text-sm shadow-lg">
          {countInCart} item{countInCart > 1 ? "s" : ""} in cart
        </div>
      )}
    </main>
  );
}
