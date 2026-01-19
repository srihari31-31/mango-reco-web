// src/ProductDetail.tsx
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { getProduct } from "./mangoproductpage/export";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const p = id ? getProduct(id) : undefined;

  if (!p) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-gray-700">Product not found.</p>
        <Link to="/store" className="text-amber-700 underline">Back to store</Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header bar with 3 tabs (like your mock): Order Details, Track Order, Settings */}
      <div className="flex gap-4 text-sm text-gray-700 mb-4">
        <button className="rounded-md px-3 py-1 border">🧾 Order Details</button>
        <button className="rounded-md px-3 py-1 border">📦 Track Order</button>
        <button className="rounded-md px-3 py-1 border">⚙️ Settings</button>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <button onClick={() => navigate(-1)} className="mr-2 underline">Back</button>
        <Link to="/store" className="underline">/Store</Link>
        <span>/{p.title}</span>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
        {/* Image */}
        <div className="rounded-xl overflow-hidden border">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            {p.title.split("(")[0]}
            <br />
            {p.title.match(/\(.+\)/)?.[0] ?? ""}
          </h1>

          {/* rating */}
          <div className="mt-4 text-sm text-gray-700">
            <StarRating value={p.rating ?? 4.4} className="text-amber-500" />
            <div className="mt-1">
              {(p.rating ?? 4.4).toFixed(1)} · Customer rating ({p.ratingCount ?? 0})
            </div>
          </div>

          {/* description */}
          <p className="mt-4 text-gray-700">{p.desc}</p>

          {/* price + ctas */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">${p.price.toFixed(2)}</span>

            <button className="rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 py-2">
              Add to Cart
            </button>
            <button className="rounded-md border border-gray-300 hover:bg-gray-50 px-4 py-2">
              Buy Now
            </button>

            <span className="ml-auto text-sm text-gray-500">
              {(p.stock ?? 0).toFixed(0)} in stock
            </span>
          </div>

          {/* delivery / guarantee */}
          <div className="mt-4 text-xs text-gray-600">
            🚚 Free delivery over $69 · 10-day freshness guarantee
          </div>

          {/* reviews preview */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-lg font-semibold mb-3">Reviews</h2>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <StarRating value={5} className="text-amber-500" /> “Amazing aroma and sweetness.
                Loved it!”
              </li>
              <li>
                <StarRating value={4} className="text-amber-500" /> “Good quality. Will order again.”
              </li>
            </ul>
            <button className="mt-4 text-amber-700 underline text-sm">Read more reviews</button>
          </div>
        </div>
      </section>

      {/* footer note */}
      <p className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Farmers Club · Fresh mangoes from trusted farms.
      </p>
    </main>
  );
}
