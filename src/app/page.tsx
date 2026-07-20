import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CTASection from '@/components/CTASection';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';
import { ArrowRight, Hammer, Building2, PenTool, Paintbrush, Quote, Star, Check } from 'lucide-react';

const icons = { Hammer, Building2, PenTool, Paintbrush };

export default function Home() {
  const latest = projects.slice(0, 3);
  const featured = services.slice(0, 4);
  const t = testimonials[0];

  return (
    <>
      <Hero
        title="Konstruksi Kuat, Transparansi Hebat"
        subtitle="Kontraktor Berpengalaman & Terpercaya"
        description="Bumi Konstruksi membangun dan merenovasi hunian, ruang usaha, hingga fasilitas industrial dengan standar mutu tinggi, jaminan waktu, dan tanpa biaya siluman."
        primaryCta={{ label: 'Minta Penawaran', href: '/quote' }}
        secondaryCta={{ label: 'Lihat Portofolio', href: '/portfolio' }}
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
      />

      <StatsBar />

      <section className="section bg-neutral-50" aria-labelledby="svc-heading">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="svc-heading" className="text-h2 text-neutral-900">Layanan Unggulan Kami</h2>
            <p className="text-body text-neutral-600 mt-4">Jasa konstruksi terintegrasi dari tahap rancang bangun hingga serah terima dengan tim ahli bersertifikasi.</p>
          </div>
          <div className="grid-3">
            {featured.map(svc => {
              const Icon = icons[svc.icon as keyof typeof icons];
              return (
                <Link key={svc.id} href={`/services#${svc.slug}`} className="card p-8 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <h3 className="text-h3 text-neutral-900 mb-4">{svc.title}</h3>
                    <p className="text-body-sm text-neutral-600 mb-6">{svc.description}</p>
                  </div>
                  <span className="text-brand-orange font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-gap">
                    Detail <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="port-heading">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 id="port-heading" className="text-h2 text-neutral-900">Proyek Terbaru</h2>
              <p className="text-body text-neutral-600 mt-4">Hasil pengerjaan nyata tim Bumi Konstruksi di berbagai wilayah Jawa Tengah.</p>
            </div>
            <Link href="/portfolio" className="btn-outline mt-6 md:mt-0">Semua Portofolio</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {latest.filter(Boolean).map(p => (
               <article key={p.id} className="card group" id={p.id}>
                 <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                   <img src={p.afterImage} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <span className="absolute top-4 left-4 badge-primary bg-brand-orange text-white uppercase text-xs font-bold tracking-wider z-10">{p.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-caption text-neutral-500 mb-2">{p.location}</p>
                  <h3 className="text-h4 text-neutral-900 mb-3">{p.title}</h3>
                  <p className="text-body-sm text-neutral-600 mb-6 line-clamp-2">{p.description}</p>
                  <Link href={`/portfolio#${p.id}`} className="text-brand-orange font-semibold inline-flex items-center gap-2">Lihat Detail <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-900 text-white" aria-labelledby="why-heading">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="why-heading" className="text-h2 text-white">Kenapa Bumi Konstruksi?</h2>
            <p className="text-body-lg text-neutral-300 mt-4 mb-8">Kami memahami kekhawatiran Anda: bengkak biaya, molor waktu, hasil tidak rapi. Kami memberikan garansi nyata.</p>
            <ul className="space-y-4">
              {[
                'Rincian Anggaran Biaya (RAB) Transparan & Terkunci',
                'Pengawasan Harian & Laporan Progres Mingguan',
                'Garansi Pemeliharaan Pasca-Konstruksi 1 Tahun',
                'Tenaga Kerja Bersertifikasi & Material Sesuai Spek',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5"><Check className="w-4 h-4 text-white" /></div>
                  <span className="text-body text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 max-w-md mx-auto w-full">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80" alt="Konstruksi Gedung" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="test-heading">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="test-heading" className="text-h2 text-neutral-900">Apa Kata Klien Kami?</h2>
          </div>
          <div className="max-w-4xl mx-auto card p-8 md:p-12 relative bg-neutral-50">
            <Quote className="w-12 h-12 text-brand-orange/20 absolute top-8 left-8" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-2 border-brand-orange shrink-0 bg-neutral-200" />
              <div>
                <div className="flex gap-1 text-brand-orange mb-3" aria-label={`Rating ${t.rating} dari 5`}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <blockquote className="text-body-lg italic text-neutral-700 mb-6">"{t.text}"</blockquote>
                <cite className="not-italic">
                  <span className="block font-bold text-neutral-900 text-lg">{t.name}</span>
                  <span className="text-body-sm text-neutral-500">{t.role}, {t.company}</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}