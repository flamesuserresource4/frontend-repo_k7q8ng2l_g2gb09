import { CheckCircle2, MessageCircle } from "lucide-react";

export default function HowToOrder() {
  const steps = [
    "Visit the Products page and select your preferred animal.",
    "Click the “Order via WhatsApp” button.",
    "Fill in order details: type, quantity, delivery location.",
    "Our team confirms stock and delivery schedule.",
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">How to Order</h2>
            <p className="mt-3 text-emerald-800/80">
              Ordering is simple and secure via WhatsApp. We’re available daily from 08.00–21.00 WIB.
            </p>
            <ol className="mt-6 space-y-3">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-emerald-600" />
                  <span className="text-emerald-900/90">{i + 1}. {s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <a
                href="https://wa.me/62812XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold shadow-sm transition"
              >
                <MessageCircle className="w-5 h-5" /> Click to Order Now
              </a>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow ring-1 ring-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1600&auto=format&fit=crop"
                alt="Friendly farm team ready to help via WhatsApp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
