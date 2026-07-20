import { stats as s } from '@/data/company';

export default function StatsBar() {
  const items = s.map(st => ({
    label: st.label,
    value: st.value.replace('+', ''),
    suffix: st.value.includes('+') ? '+' : '',
  }));

  return (
    <section className="bg-white border-y border-neutral-200" aria-label="Statistik perusahaan">
      <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {items.map((it, i) => (
          <div key={i} className="text-center">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-orange leading-none">{it.value}</span>
              {it.suffix && <span className="text-2xl md:text-3xl font-bold text-brand-orange leading-none">{it.suffix}</span>}
            </div>
            <p className="text-body text-neutral-600 mt-2 font-medium">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}