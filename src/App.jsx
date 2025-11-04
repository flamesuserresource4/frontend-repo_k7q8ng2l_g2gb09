import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import HowToOrder from "./components/HowToOrder";

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-emerald-800 text-lg tracking-tight">
          Berkat Tani Farm
        </a>
        <nav className="hidden md:flex items-center gap-6 text-emerald-900/80">
          <a href="#products" className="hover:text-emerald-900">Products</a>
          <a href="#about" className="hover:text-emerald-900">About</a>
          <a href="#order" className="hover:text-emerald-900">Order</a>
          <a
            href="https://wa.me/62812XXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 font-semibold"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-emerald-900/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Berkat Tani Farm. All rights reserved.</p>
        <p>
          Natural • Ethical • Sustainable
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-emerald-950">
      <Header />
      <main>
        <Hero />
        <div id="products">
          <Products />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="order">
          <HowToOrder />
        </div>
      </main>
      <Footer />
    </div>
  );
}
