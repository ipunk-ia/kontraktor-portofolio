'use client';

import { useState } from 'react';
import { company } from '@/data/company';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); setTimeout(() => setSent(false), 5000); }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="contact-title">
        <div className="container-main">
          <h1 id="contact-title" className="text-h1 mb-6 text-white">Hubungi Kami</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Ada pertanyaan atau ingin konsultasi awal? Tim kami siap melayani Anda.</p>
        </div>
      </section>

      <section className="section bg-white" aria-label="Kontak dan formulir">
        <div className="container-main grid-2 gap-16">
          <div>
            <span className="badge-primary mb-4">Informasi Kontak</span>
            <h2 className="text-h2 text-neutral-900 mb-6">Kantor Bumi Konstruksi</h2>
            <p className="text-body text-neutral-600 mb-10">Silakan hubungi kami melalui saluran berikut atau kunjungi kantor pusat kami di Semarang.</p>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0"><MapPin className="w-6 h-6" /></div><div><h3 className="text-body font-bold text-neutral-900">Alamat Kantor</h3><p className="text-body-sm text-neutral-650 mt-1">{company.address}</p></div></div>
              <a href={`tel:${company.phone}`} className="flex items-start gap-4 group"><div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><Phone className="w-6 h-6" /></div><div><h3 className="text-body font-bold text-neutral-900 group-hover:text-brand-orange transition-colors">Telepon</h3><p className="text-body-sm text-neutral-650 mt-1">{company.phone.replace('62', '+62 ').replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')}</p></div></a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-4 group"><div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><Mail className="w-6 h-6" /></div><div><h3 className="text-body font-bold text-neutral-900 group-hover:text-brand-orange transition-colors">Email</h3><p className="text-body-sm text-neutral-650 mt-1">{company.email}</p></div></a>
              <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0"><Clock className="w-6 h-6" /></div><div><h3 className="text-body font-bold text-neutral-900">Jam Operasional</h3><p className="text-body-sm text-neutral-650 mt-1">Senin - Sabtu: 08.00 - 17.00 WIB</p></div></div>
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-4">
              <div><h3 className="text-body font-bold text-neutral-900">Respon Lebih Cepat?</h3><p className="text-caption text-neutral-500 mt-1">Hubungi tim sales kami via WhatsApp.</p></div>
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-secondary py-2.5 px-4"><MessageSquare className="w-4 h-4" /> Chat WA</a>
            </div>
          </div>

          <div className="card p-8 md:p-10 bg-neutral-50">
            <h3 className="text-h3 text-neutral-900 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><label htmlFor="name" className="label">Nama Lengkap</label><input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="input" placeholder="Budi Santoso" /></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><label htmlFor="email" className="label">Alamat Email</label><input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="input" placeholder="budi@email.com" /></div>
                <div><label htmlFor="phone" className="label">Nomor WhatsApp/HP</label><input type="tel" id="phone" name="phone" required value={form.phone} onChange={handleChange} className="input" placeholder="08123456789" /></div>
              </div>
              <div><label htmlFor="subject" className="label">Subjek</label><input type="text" id="subject" name="subject" required value={form.subject} onChange={handleChange} className="input" placeholder="Tanya Jasa Renovasi / Bangun Baru" /></div>
              <div><label htmlFor="message" className="label">Pesan / Pertanyaan</label><textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} className="input resize-none" placeholder="Tuliskan secara singkat rencana proyek Anda..." /></div>
              <button type="submit" disabled={submitting} className="btn-primary w-full py-4">{submitting ? 'Mengirim...' : 'Kirim Pesan'} <Send className="w-4 h-4" /></button>
              {sent && <div className="p-4 rounded-lg bg-green-50 text-green-800 text-body-sm font-semibold text-center animate-fade-in">Pesan berhasil dikirim! Tim kami akan menghubungi Anda dalam 1x24 jam.</div>}
            </form>
          </div>
        </div>
      </section>

      <section className="h-[450px] relative w-full border-t border-neutral-200" aria-label="Peta lokasi">
        <iframe src={company.mapsEmbedUrl} className="w-full h-full border-0 absolute inset-0" allowFullScreen loading="lazy" title="Peta Lokasi Bumi Konstruksi" />
      </section>
    </>
  );
}