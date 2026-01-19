// src/App.tsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./header";        // same folder, match filename casing
import Footer from "./footer";        // same folder, match filename casing
import PulpSqueeze from "./firstpage/PulpSqueeze.tsx";
import ProductList from "./mangoproductpage/productList.tsx";
import GuavaPage from "./guavapagee/guavapage.tsx"; // <— create this file (see section C)

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  // show header/footer on store & product pages, but NOT on "/"
  const showLayout = path.startsWith("/store") || path.startsWith("/product");

  return (
    <div className="min-h-screen flex flex-col">
      {showLayout && <Header />}

      <main className="flex-1">
        <Routes>
          {/* Landing page (no header/footer) */}
          <Route
            path="/"
            element={<PulpSqueeze onShowStore={() => (window.location.href = "/store")} />}
          />

          {/* Store page */}
          <Route path="/store" element={<ProductList />} />

          {/* Guava detail page */}
          <Route path="/product/guava" element={<GuavaPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {showLayout && <Footer />}
    </div>
  );
}
