function SectionHeader({ title, subtitle, id }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-emerald-800/80">{subtitle}</p>
      )}
    </div>
  );
}

function Table({ columns, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-100">
      <table className="min-w-full divide-y divide-emerald-100 bg-white">
        <thead>
          <tr className="bg-emerald-50/60">
            {columns.map((c) => (
              <th
                key={c}
                className="px-4 py-3 text-left text-sm font-semibold text-emerald-900"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-50">
          {rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-emerald-50/40">
              {row.map((cell, i) => (
                <td key={i} className="px-4 py-3 text-emerald-800/90 text-sm">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Products() {
  const goatColumns = [
    "Goat Breed",
    "Purpose",
    "Average Weight",
    "Price per Head",
  ];
  const goatRows = [
    ["Boer Goat", "Premium meat", "35–60 kg", "Rp 3,500,000 – Rp 5,500,000"],
    [
      "Etawa Crossbreed (PE)",
      "Milk & breeding",
      "40–70 kg",
      "Rp 4,000,000 – Rp 6,000,000",
    ],
    [
      "Jawarandu Goat",
      "Dual purpose (milk & meat)",
      "35–55 kg",
      "Rp 2,500,000 – Rp 4,000,000",
    ],
    [
      "Local Kacang Goat",
      "Affordable meat",
      "25–40 kg",
      "Rp 1,800,000 – Rp 3,000,000",
    ],
  ];

  const cattleColumns = ["Cattle Breed", "Purpose", "Live Weight", "Price per Head"];
  const cattleRows = [
    ["Limosin", "Premium beef", "400–800 kg", "Rp 30,000,000 – Rp 60,000,000"],
    ["Simental", "High-yield beef", "400–850 kg", "Rp 28,000,000 – Rp 55,000,000"],
    [
      "PO (Peranakan Ongole)",
      "Durable local beef",
      "300–600 kg",
      "Rp 20,000,000 – Rp 40,000,000",
    ],
    ["Bali Cattle", "Affordable and adaptive", "250–450 kg", "Rp 18,000,000 – Rp 35,000,000"],
  ];

  return (
    <section className="relative" id="products">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <SectionHeader
          title="Premium Livestock Products"
          subtitle="High-quality goats and cattle raised organically, with real photos from our farm."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow ring-1 ring-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1545462724-4a3571ba2f62?q=80&w=1600&auto=format&fit=crop"
                alt="Boer and PE goats at pasture"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Goat Types & Prices</h3>
              <Table columns={goatColumns} rows={goatRows} />
              <p className="mt-3 text-sm text-emerald-800/70">
                All goats are grass-fed with natural supplements. Hormone-free.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow ring-1 ring-emerald-100">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1600&auto=format&fit=crop"
                alt="Premium beef cattle in a clean, open paddock"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-3">Cattle Types & Prices</h3>
              <Table columns={cattleColumns} rows={cattleRows} />
              <p className="mt-3 text-sm text-emerald-800/70">
                Raised on open, green pastures and routinely checked by veterinarians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
