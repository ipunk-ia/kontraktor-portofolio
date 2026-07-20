'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects, categories } from '@/data/projects';
import CTASection from '@/components/CTASection';
import { Calendar, MapPin, Maximize2, Minimize2 } from 'lucide-react';

export default function Portfolio() {
  const [cat, setCat] = useState('all');
  const [sel, setSel] = useState<typeof projects[0] | null>(null);

  const filtered = cat === 'all' ? projects : projects.filter(p => p.category === cat);

  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="port-title">
        <div className="container-main">
          <h1 id="port-title" className="text-h1 mb-6 text-white">Portofolio Proyek</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Bukti komitmen dan kualitas pengerjaan tim Bumi Konstruksi di lapangan.</p>
        </div>
      </section>

      <section className="section bg-white" aria-label="Galeri proyek">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  cat === c.id ? 'bg-brand-orange text-white shadow-md' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}>{c.label}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map(p => (
              <article key={p.id} id={p.id} className="card group cursor-pointer" onClick={() => setSel(p)}>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <Image src={p.afterImage} alt={p.title} width={400} height={300} quality={70} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 badge-primary bg-brand-orange text-white uppercase text-xs font-bold tracking-wider">{p.category}</span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2"><Maximize2 className="w-5 h-5" /> Detail</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-caption text-neutral-500 mb-1 flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.location}</p>
                  <h2 className="text-body font-bold text-neutral-900 mb-2 line-clamp-1">{p.title}</h2>
                  <p className="text-caption text-neutral-600 line-clamp-2">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {sel && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6" onClick={() => setSel(null)} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-[16/9] bg-neutral-100">
              <Image src={sel.afterImage} alt={sel.title} fill className="object-cover" quality={80} />
              <button onClick={() => setSel(null)} className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 z-10" aria-label="Tutup"><Minimize2 className="w-6 h-6" /></button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="badge-primary bg-brand-orange text-white uppercase text-xs font-bold tracking-wider">{sel.category}</span>
                <span className="text-caption text-neutral-500 flex items-center gap-1"><Calendar className="w-4 h-4" />Selesai: {sel.year}</span>
                <span className="text-caption text-neutral-500 flex items-center gap-1"><MapPin className="w-4 h-4" />{sel.location}</span>
              </div>
              <h2 id="modal-title" className="text-h3 text-neutral-900 mb-4">{sel.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 border-t border-neutral-100 pt-6">
                <div className="md:col-span-2">
                  <h3 className="text-body font-bold text-neutral-900 mb-2">Rincian Pekerjaan:</h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed mb-6">{sel.detail}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div>
                      <span className="block text-caption font-bold text-neutral-500 mb-2 uppercase tracking-wider">Kondisi Awal (Before)</span>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image src={sel.beforeImage} alt="Before" fill className="object-cover" quality={70} />
                      </div>
                    </div>
                    <div>
                      <span className="block text-caption font-bold text-brand-orange mb-2 uppercase tracking-wider">Hasil Akhir (After)</span>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image src={sel.afterImage} alt="After" fill className="object-cover" quality={70} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 h-fit">
                  <h3 className="text-body font-bold text-neutral-900 mb-4">Informasi Proyek</h3>
                  <ul className="space-y-3.5 text-body-sm">
                    <li className="flex justify-between border-b border-neutral-200 pb-2"><span className="text-neutral-550">Klien</span><span className="font-semibold text-neutral-900">{sel.client}</span></li>
                    <li className="flex justify-between border-b border-neutral-200 pb-2"><span className="text-neutral-550">Luas Bangunan</span><span className="font-semibold text-neutral-900">{sel.area}</span></li>
                    <li className="flex justify-between pb-2"><span className="text-neutral-550">Tahun</span><span className="font-semibold text-neutral-900">{sel.year}</span></li>
                  </ul>
                  <div className="mt-6"><h4 className="text-caption font-bold text-neutral-500 mb-2">Tags:</h4><div className="flex flex-wrap gap-1.5">{sel.tags.map(t => <span key={t} className="text-[11px] bg-neutral-200 px-2 py-0.5 rounded text-neutral-700">#{t}</span>)}</div></div>
                  <a href={`/quote?project=${sel.id}`} className="btn-primary w-full text-center mt-6 py-2.5">Konsultasi Proyek Serupa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}