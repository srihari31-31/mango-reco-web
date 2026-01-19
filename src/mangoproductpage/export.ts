// src/products.ts
export type Product = {
  id: string;
  title: string;        // include weight, e.g. "Mango Pulp (500g)"
  price: number;
  img: string;
  desc: string;
  badge?: string;       // "Fresh", "Processed", etc.
  stock?: number;
  rating?: number;      // 0-5
  ratingCount?: number; // number of ratings
  category?: string;    // optional
};

export const PRODUCTS: Product[] = [
  {
    id: "mango-dried-200",
    title: "Dried Mango Slices (200g)",
    price: 4.49,
    img: "https://images.unsplash.com/photo-1586201375754-1421e0aa2f94?q=80&w=1200&auto=format&fit=crop",
    desc: "Naturally dried mango slices — healthy, chewy and sweet.",
    badge: "Processed",
    stock: 60,
    rating: 4.5,
    ratingCount: 112,
    category: "Processed",
  },
  {
    id: "mango-pulp-500",
    title: "Mango Pulp (500g)",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1617196034376-5e463f96de6e?q=80&w=1200&auto=format&fit=crop",
    desc: "Ready-to-use pulp for shakes & desserts.",
    badge: "Processed",
    stock: 34,
    rating: 4.4,
    ratingCount: 86,
    category: "Processed",
  },
  {
    id: "mango-kesar-1kg",
    title: "Kesar Mangoes (1kg)",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1622207834975-8d43b4b9c788?q=80&w=1200&auto=format&fit=crop",
    desc: "Sweet Kesar mangoes with unmatched aroma.",
    badge: "Fresh",
    stock: 22,
    rating: 4.6,
    ratingCount: 241,
    category: "Fresh",
  },
  {
    id: "mango-jam-250",
    title: "Mango Jam (250g)",
    price: 3.99,
    img: "https://images.unsplash.com/photo-1603072703320-93dbdbe2635d?q=80&w=1200&auto=format&fit=crop",
    desc: "Tangy-sweet jam made from fresh mangoes.",
    badge: "Processed",
    stock: 18,
    rating: 4.2,
    ratingCount: 59,
    category: "Processed",
  },

  // Optional: Guava example
  {
    id: "guava-1kg",
    title: "Guava (1kg)",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1615485737656-6a840154e7d8?q=80&w=1200&auto=format&fit=crop",
    desc: "Crisp, vitamin-rich guavas straight from the grove.",
    badge: "Fresh",
    stock: 30,
    rating: 4.4,
    ratingCount: 74,
    category: "Fresh",
  },
];

export const getProduct = (id: string) =>
  PRODUCTS.find((p) => p.id === id);
