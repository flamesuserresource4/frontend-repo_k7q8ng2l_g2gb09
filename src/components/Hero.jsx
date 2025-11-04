import { WhatsApp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-emerald-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-medium">
              🌿 Berkat Tani Farm
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900">
              From Healthy Livestock, Comes a Healthier Life
            </h1>
            <p className="mt-4 text-emerald-800/80 leading-relaxed text-lg">
              Premium goats and cattle raised organically on green pastures. No
              artificial hormones, minimal antibiotics, and animal welfare first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/62812XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold shadow-sm transition"
              >
                <WhatsApp className="w-5 h-5" /> Order via WhatsApp
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50 px-5 py-3 font-semibold transition"
              >
                View Products
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-emerald-900/70">
              <li className="bg-white/70 backdrop-blur rounded-md p-3 border border-emerald-100">
                • Organic feed
              </li>
              <li className="bg-white/70 backdrop-blur rounded-md p-3 border border-emerald-100">
                • Vet-checked
              </li>
              <li className="bg-white/70 backdrop-blur rounded-md p-3 border border-emerald-100">
                • Fair pricing
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1545464333-9eb8b30979d6?q=80&w=1600&auto=format&fit=crop"
                alt="Healthy goats grazing on green pasture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-200/50 rounded-2xl blur-2xl" />
            <div className="hidden md:block absolute -top-6 -right-6 w-40 h-40 bg-lime-200/50 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
