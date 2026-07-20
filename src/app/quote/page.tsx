'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { services } from '@/data/services';
import { company } from '@/data/company';
import { Check, Send, Sparkles } from 'lucide-react';

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initial = searchParams.get('service') || '';
  const [form, setForm] = useState({ name: '', phone: '', email: '', projectType: initial, location: '', budget: '', area: '', description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false); setSent(true);
      const svc = services.find(s => s.slug === form.projectType)?.title || form.projectType;
      const wa = `Halo Bumi Konstruksi, saya *${form.name}* ingin meminta penawaran proyek.\n\n*Detail Proyek:*\n- Jenis: ${svc}\n- Lokasi: ${form.location}\n- Luas Area: ${form.area} m²\n- Estimasi Budget: ${form.budget}\n- Keterangan: ${form.description}\n\nMohon info selanjutnya. Terima kasih.`;
      const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(wa)}`;
      setTimeout(() => window.open(url, '_blank'), 1000);
    }, 1500);
  };

  return (
    <section className="section bg-white" aria-label="Formulir penawaran">
      <div className="container-main max-w-4xl">
        <div className="card p-8 md:p-12 shadow-2xl relative border-2 border-brand-orange/20">
          <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-orange text-white text-caption font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"><Sparkles className="w-4 h-4 animate-pulse" /><span>Gratis Estimasi</span></div>
          <div className="text-center mb-10">
            <h2 className="text-h2 text-neutral-900">Formulir Permintaan Penawaran</h2>
            <p className="text-body-sm text-neutral-500 mt-2">Lengkapi formulir ini. Setelah kirim, Anda akan diarahkan ke WhatsApp untuk konsultasi langsung.</p>
          </div>

          {sent ? (
            <div className="py-12 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto"><Check className="w-8 h-8" /></div>
              <h3 className="text-h3 text-neutral-900">Permintaan Terkirim!</h3>
              <p className="text-body text-neutral-600 max-w-md mx-auto">Terima kasih, data Anda berhasil kami catat. Mengalihkan ke WhatsApp tim estimator...</p>
              <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-neutral-100 pb-6">
                <h3 className="text-body font-bold text-neutral-900 mb-4">1. Data Kontak</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div><label htmlFor="name" className="label">Nama Lengkap</label><input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="input" placeholder="Budi Santoso" /></div>
                  <div><label htmlFor="phone" className="label">No. WhatsApp/HP</label><input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange} className="input" placeholder="08123456789" /></div>
                  <div><label htmlFor="email" className="label">Alamat Email</label><input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="input" placeholder="budi@email.com" /></div>
                </div>
              </div>
              <div>
                <h3 className="text-body font-bold text-neutral-900 mb-4">2. Detail Proyek</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div><label htmlFor="projectType" className="label">Jenis Layanan</label><select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange} className="input"><option value="">Pilih layanan...</option>{services.map(s => <option key={s.id} value={s.slug}>{s.title}</option>)}</select></div>
                  <div><label htmlFor="location" className="label">Lokasi Proyek</label><input type="text" id="location" name="location" required value={form.location} onChange={handleChange} className="input" placeholder="Semarang Barat / Ungaran" /></div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="area" className="label">Perkiraan Luas Area (m²)</label>
                  <input
                    type="number"
                    id="area"
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="input"
                    placeholder="150"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="label font-medium">Estimasi Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Pilih budget range...</option>
                    <option value="< 100 Juta">{"< 100 Juta"}</option>
                    <option value="100 - 300 Juta">100 - 300 Juta</option>
                    <option value="300 - 500 Juta">300 - 500 Juta</option>
                    <option value="500 Juta - 1 Miliar">500 Juta - 1 Miliar</option>
                    <option value="> 1 Miliar">{"> 1 Miliar"}</option>
                  </select>
                </div>
              </div>
              <div><label htmlFor="description" className="label">Deskripsi Tambahan / Keinginan Khusus</label><textarea id="description" name="description" required rows={4} value={form.description} onChange={handleChange} className="input resize-none" placeholder="Misal: renovasi kamar utama, tambah lantai dak jemur belakang, ganti seluruh instalasi listrik..." /></div>
              <div className="pt-4"><button type="submit" disabled={submitting} className="btn-primary w-full py-4 text-lg">{submitting ? 'Memproses data...' : 'Kirim & Hubungi via WhatsApp'} <Send className="w-5 h-5" /></button></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function QuoteForm() {
  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="quote-title">
        <div className="container-main">
          <h1 id="quote-title" className="text-h1 mb-6 text-white">Minta Penawaran Harga</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Dapatkan Rencana Anggaran Biaya (RAB) akurat dan transparan untuk proyek konstruksi Anda.</p>
        </div>
      </section>
      <Suspense fallback={<div className="section text-center py-20"><div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto" /><p className="mt-4 text-body text-neutral-500">Memuat formulir...</p></div>}>
        <QuoteFormContent />
      </Suspense>
    </>
  );
}