// src/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Farmers Club · Fresh mangoes from trusted farms.</p>
      <div className="flex justify-center gap-6 mt-3">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-xl"
        >
          📸
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-xl"
        >
          💬
        </a>
      </div>
    </footer>
  );
}
