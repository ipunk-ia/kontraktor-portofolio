import { testimonials } from '@/data/testimonials';
import CTASection from '@/components/CTASection';
import { Quote, Star } from 'lucide-react';

export const metadata = { title: 'Testimoni Klien - Bumi Konstruksi', description: 'Ulasan jujur dari pemilik rumah, developer, dan PIC procurement.' };

export default function Testimonials() {
  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="test-title">
        <div className="container-main">
          <h1 id="test-title" className="text-h1 mb-6 text-white">Testimoni Klien</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Ulasan jujur dari mereka yang telah mempercayakan impian bangunannya kepada kami.</p>
        </div>
      </section>

      <section className="section bg-white" aria-label="Semua testimoni">
        <div className="container-main grid-2">
          {testimonials.map(t => (
            <div key={t.id} className="card p-8 md:p-10 relative bg-neutral-50 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-brand-orange/15 absolute top-6 left-6" />
                <div className="relative z-10">
                  <div className="flex gap-1 text-brand-orange mb-4" aria-label={`Rating ${t.rating} dari 5`}>
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-neutral-300'}`} />)}
                  </div>
                  <blockquote className="text-body italic text-neutral-700 mb-8">"{t.text}"</blockquote>
                </div>
              </div>
              <div className="flex items-center gap-4 border-t border-neutral-200 pt-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border border-brand-orange bg-neutral-200" />
                <div>
                  <cite className="not-italic">
                    <span className="block font-bold text-neutral-900 text-base">{t.name}</span>
                    <span className="text-caption text-neutral-555">{t.role}, {t.company}</span>
                  </cite>
                  <span className="inline-block badge-navy text-[11px] font-semibold mt-1 px-2.5 py-0.5 rounded-full">Kategori: {t.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}