// src/product/GuavaPage.tsx
import { Link, useNavigate } from "react-router-dom";

export default function GuavaPage() {
  const navigate = useNavigate();

  const product = {
    title: "Guava (1kg)",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1604909052743-88ab993b7f53?q=80&w=1200&auto=format&fit=crop",
    desc: "Crisp, vitamin-rich guavas straight from the grove.",
    stock: 55,
    rating: 4.4,
  };

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-10">
      {/* breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <button onClick={() => navigate(-1)} className="underline">Back</button>
        <span className="mx-2">/</span>
        <Link to="/store" className="underline">Store</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.title}</span>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image */}
        <div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border bg-white">
            <img src={product.img} alt={product.title} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{product.title}</h1>

          <div className="mt-2 flex items-center gap-3">
            <div className="text-amber-500">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</div>
            <span className="text-sm text-gray-500">{product.rating.toFixed(1)} • Customer rating</span>
          </div>

          <p className="mt-4 text-gray-700">{product.desc}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-semibold text-amber-700">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">{product.stock} in stock</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 rounded-xl bg-black text-white hover:opacity-90">Add to Cart</button>
            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50">Buy Now</button>
          </div>

          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p>🚚 Free delivery over $69 • 10-day freshness guarantee</p>
            
          </div>
        </div>
      </section>
    </main>
  );
}
