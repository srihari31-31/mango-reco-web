// src/NavBar.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavBarProps = {
  // keep props optional (not used here) so App.tsx doesn't break if you used them earlier
  onShowAnimation?: () => void;
  onShowStore?: () => void;
};

export default function NavBar(_props: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 font-semibold">
          <img
            src="https://images.unsplash.com/photo-1615486363871-3f40adf5ca47?auto=format&fit=crop&w=64&h=64&q=80"
            alt="Mango"
            className="w-7 h-7 rounded-full object-cover shadow"
          />
          <span>MangoFarmers Club</span>
        </a>

        {/* Hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md border hover:bg-gray-50"
        >
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black" />
        </button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
            className="absolute right-4 mt-2 w-56 rounded-xl shadow-xl border bg-white p-2"
          >
            <MenuItem label="Cart" href="#cart" onClick={() => setOpen(false)} />
            <MenuItem label="Orders" href="#orders" onClick={() => setOpen(false)} />
            <MenuItem label="Payment" href="#payment" onClick={() => setOpen(false)} />
            <MenuItem label="Address" href="#address" onClick={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MenuItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"
    >
      {label}
    </a>
  );
}