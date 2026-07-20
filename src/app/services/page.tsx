import { services } from '@/data/services';
import CTASection from '@/components/CTASection';
import { Hammer, Building2, PenTool, Paintbrush, ArrowRight, Check } from 'lucide-react';

export const metadata = { title: 'Layanan Kami - Bumi Konstruksi', description: 'Jasa renovasi, bangun baru, desain-build, dan interior finishing berkualitas tinggi.' };

const icons = { Hammer, Building2, PenTool, Paintbrush };

export default function Services() {
  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="svc-title">
        <div className="container-main">
          <h1 id="svc-title" className="text-h1 mb-6 text-white">Layanan Konstruksi</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Solusi pembangunan komprehensif dari awal hingga akhir, didukung tenaga ahli terpercaya.</p>
        </div>
      </section>

      <section className="section bg-white" aria-label="Detail layanan">
        <div className="container-main space-y-24 md:space-y-32">
          {services.map((svc, i) => {
            const Icon = icons[svc.icon as keyof typeof icons];
            const even = i % 2 === 0;
            return (
              <div key={svc.id} id={svc.slug} className={`grid-2 items-center gap-16 scroll-mt-24 ${!even ? 'md:order-last' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h2 className="text-h2 text-neutral-900 mb-6">{svc.title}</h2>
                  <p className="text-body text-neutral-600 mb-8 leading-relaxed">{svc.description}</p>
                  <h3 className="text-body font-bold text-neutral-900 mb-4">Keuntungan & Garansi:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {svc.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5"><Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" /><span className="text-body-sm text-neutral-700">{b}</span></li>
                    ))}
                  </ul>
                  <a href={`/quote?service=${svc.slug}`} className="btn-secondary">Pilih Layanan Ini</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section bg-neutral-50" aria-labelledby="proc-heading">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="proc-heading" className="text-h2 text-neutral-900">Alur Kerja Kami</h2>
            <p className="text-body text-neutral-600 mt-4">Langkah sistematis untuk menjamin ketepatan kualitas dan waktu proyek Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {[
              { step: '01', title: 'Survey & Konsultasi', desc: 'Kami datang ke lokasi, mencatat kebutuhan detail, dan menilai struktur tanah/bangunan.' },
              { step: '02', title: 'Perancangan Desain', desc: 'Arsitek menyusun gambar kerja 2D/3D untuk visualisasi bangunan.' },
              { step: '03', title: 'Rencana Anggaran (RAB)', desc: 'RAB terperinci dan transparan dikunci dalam kontrak resmi.' },
              { step: '04', title: 'Mulai Konstruksi', desc: 'Eksekusi fisik bangunan oleh tukang profesional dengan safety tools lengkap.' },
              { step: '05', title: 'Handover & Garansi', desc: 'Serah terima kunci dan penyerahan surat garansi pemeliharaan 1 tahun.' },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange text-white font-bold text-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">{s.step}</div>
                <h3 className="text-body font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-caption text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}