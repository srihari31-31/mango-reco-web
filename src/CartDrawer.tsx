// src/CartDrawer.tsx
import { AnimatePresence, motion } from "framer-motion";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  img?: string;
  qty: number;
};

type Props = {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function CartDrawer({ isOpen, items, onClose, onInc, onDec, onRemove }: Props) {
  const total = items.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 h-full w-[88vw] max-w-md bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: 420 }} animate={{ x: 0 }} exit={{ x: 420 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button onClick={onClose} className="rounded-full px-3 py-1 text-sm border hover:bg-gray-50">✕</button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-12">Your cart is empty.</div>
              ) : (
                items.map(it => (
                  <div key={it.id} className="flex gap-3 border rounded-xl p-3">
                    <div className="h-16 w-16 bg-amber-50 rounded-lg overflow-hidden flex-shrink-0">
                      {it.img ? <img src={it.img} alt={it.title} className="h-full w-full object-cover" /> : <div className="grid place-items-center h-full">🥭</div>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{it.title}</div>
                      <div className="text-sm text-amber-800">${it.price.toFixed(2)}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => onDec(it.id)} className="px-2 py-1 border rounded">−</button>
                        <span className="w-6 text-center">{it.qty}</span>
                        <button onClick={() => onInc(it.id)} className="px-2 py-1 border rounded">＋</button>
                        <button onClick={() => onRemove(it.id)} className="ml-auto text-sm text-red-600 hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-lg font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="w-full rounded-full bg-amber-600 text-white py-3 font-medium hover:bg-amber-700" disabled={items.length === 0}>
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

