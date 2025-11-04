export default function About() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/60" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">About Us</h2>
            <p className="mt-4 text-emerald-800/85 leading-relaxed">
              Berkat Tani Farm is an agribusiness company focusing on sustainable
              goat and cattle farming in Indonesia. Founded in 2015, we hold the vision:
            </p>
            <blockquote className="mt-4 border-l-4 border-emerald-400 pl-4 italic text-emerald-900">
              “To be a trusted partner in providing healthy livestock and natural dairy products for Indonesian families.”
            </blockquote>
            <ul className="mt-6 space-y-3 text-emerald-900/85">
              <li className="flex gap-3"><span className="text-emerald-600">•</span> Environmentally friendly practices</li>
              <li className="flex gap-3"><span className="text-emerald-600">•</span> Minimal use of antibiotics</li>
              <li className="flex gap-3"><span className="text-emerald-600">•</span> Prioritizing animal welfare</li>
            </ul>
            <p className="mt-6 text-emerald-800/85">
              We serve individual and bulk orders — ideal for households, slaughterhouses,
              goat milk producers, and Aqiqah/Qurban services.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow ring-1 ring-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1550869374-e8276a43d80f?q=80&w=1600&auto=format&fit=crop"
                alt="Our clean and green farm environment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
