// src/PulpSqueeze.tsx
import { motion } from "framer-motion";
import orchard from "../assets/orchard.jpg";
 

type Props = { onShowStore: () => void };

export default function PulpSqueeze({ onShowStore }: Props) {
  return (
    <section className="relative min-h-[88vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* LEFT: Hero content */}
      <div className="flex flex-col items-center md:items-start justify-center px-6 md:px-10 text-center md:text-left">
        {/* little green leaf icon */}
        <motion.h1 className="text-3xl md:text-5xl">🌱</motion.h1>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -18, letterSpacing: "0.06em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.01em" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-2 md:mt-4 text-3xl md:text-6xl font-extrabold tracking-tight"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#f59e0b,#f97316,#f59e0b)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 1px 0 #d57725aa",
          }}
        >
          Welcome to the Farmers Club
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-3 text-sm md:text-base text-gray-600"
        >
          Fresh produce, straight from local farms.
        </motion.p>

        {/* Circle animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto md:mx-0 mt-10 h-48 w-48 md:h-64 md:w-64 rounded-full"
          style={{
            background:
              "conic-gradient(from 210deg, #f59e0b, #f97316 35%, #fbbf24 70%, #f59e0b)",
            boxShadow: "0 24px 80px #f59e0b55",
          }}
          aria-label="squeezing mango pulp"
        />

        {/* Caption */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl font-semibold"
        >
          👨‍🌾 Squeezing the Mango Pulp... 🥭
        </motion.h2>

        {/* Button */}
        <div className="mt-6">
          <button
            onClick={onShowStore}
            className="inline-flex items-center justify-center h-14 w-14 rounded-full border-[6px] border-amber-500/80 bg-white/90 shadow-md transition hover:scale-105 active:scale-95"
            aria-label="View Store"
            title="View Store"
          >
            🛒
          </button>
          <div className="mt-2 text-xs text-gray-500">View Store</div>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="relative w-full h-[42vh] md:h-auto">
        <img
          src={orchard}
          alt="Mango orchard"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
