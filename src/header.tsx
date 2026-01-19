// src/header.tsx
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavItem = { label: string; to: string; external?: boolean };

const NAV: NavItem[] = [
  { label: "Store", to: "/store" },
  { label: "Guava", to: "/product/guava" }, // 👈 your custom item
  { label: "Mango", to: "#" },
  { label: "pulp", to: "#" },
  { label: "juice", to: "#" },
  { label: "slices", to: "#" },
  { label: "Vision", to: "#" },
  { label: "Entertainment", to: "#" },
  { label: "Accessories", to: "#" },
  { label: "Support", to: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 pt-3 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur">
      <div
        ref={ref}
        className="mx-auto max-w-7xl h-14 sm:h-16 rounded-2xl border border-gray-200/70 bg-white shadow-sm
                   flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4"
        role="navigation"
        aria-label="Primary"
      >
        {/* LEFT: 3 dots menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="h-10 w-10 grid place-items-center rounded-xl border border-gray-200 hover:bg-gray-50"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label="Menu"
            title="Menu"
          >
            <span className="block h-1 w-1 bg-gray-800 rounded-full" />
            <span className="block h-1 w-1 bg-gray-800 rounded-full my-0.5" />
            <span className="block h-1 w-1 bg-gray-800 rounded-full" />
          </button>

          {/* vertical sheet */}
          <div
            className={`absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-xl border bg-white shadow-lg
                        transition-[max-height,opacity] duration-300 ${
                          menuOpen ? "max-h-64 opacity-100" : "pointer-events-none max-h-0 opacity-0"
                        }`}
            role="menu"
          >
            <Link to="/orders" onClick={() => setMenuOpen(false)} role="menuitem"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">🧾 Order Details</Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)} role="menuitem"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">🛒 View Cart</Link>
            <Link to="/track" onClick={() => setMenuOpen(false)} role="menuitem"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">🚚 Track Order</Link>
          </div>
        </div>

        {/* CENTER: logo + horizontal nav */}
        <div className="flex-1 flex items-center justify-center min-w-0">
          <Link to="/store" aria-label="Home" title="Farmers Club"
                className="hidden sm:inline-flex items-center justify-center mr-3 text-xl">🍏</Link>

          <nav className="flex-1 max-w-[960px] overflow-x-auto no-scrollbar">
            <ul className="list-none m-0 p-0 flex items-center gap-3 sm:gap-5 text-[13px] sm:text-[14px] text-gray-800 whitespace-nowrap">
              {NAV.map(({ label, to }) => {
                const active = to !== "#" && (pathname === to || pathname.startsWith(to));
                return (
                  <li key={label} className="list-none">
                    <Link
                      to={to}
                      className={`px-2 py-1 rounded-md transition hover:text-black hover:bg-gray-100 ${
                        active ? "text-black font-semibold bg-gray-100" : ""
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* RIGHT: icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="h-10 w-10 rounded-xl border border-gray-200 grid place-items-center hover:bg-gray-50"
                  aria-label="Search" title="Search">🔍</button>
          <Link to="/cart" className="h-10 w-10 rounded-xl border border-gray-200 grid place-items-center hover:bg-gray-50"
                aria-label="Cart" title="Cart">🛍️</Link>
        </div>
      </div>
    </header>
  );
}
