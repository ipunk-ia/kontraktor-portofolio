import { company, stats } from '@/data/company';
import CTASection from '@/components/CTASection';
import Image from 'next/image';
import { Award, ShieldCheck, HeartHandshake, FileCheck } from 'lucide-react';

export const metadata = { title: 'Tentang Kami - Bumi Konstruksi', description: 'Sejarah, visi misi, legalitas, sertifikasi, dan komitmen Bumi Konstruksi.' };

export default function About() {
  return (
    <>
      <section className="bg-neutral-900 py-24 md:py-32 px-4 text-center text-white" aria-labelledby="about-title">
        <div className="container-main">
          <h1 id="about-title" className="text-h1 mb-6 text-white">Tentang Kami</h1>
          <p className="text-body-lg text-neutral-300 max-w-2xl mx-auto">Membangun masa depan Jawa Tengah dengan keahlian, dedikasi, dan integritas tinggi sejak 2010.</p>
        </div>
      </section>

      <section className="section bg-white" aria-label="Sejarah">
        <div className="container-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto w-full">
            <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Kerja Lapangan" fill className="object-cover" quality={80} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="lg:col-span-7">
            <span className="badge-primary mb-4">Sejarah Kami</span>
            <h2 className="text-h2 text-neutral-900 mb-6">Membangun Kepercayaan Selama 15 Tahun</h2>
            <p className="text-body text-neutral-600 mb-6 leading-relaxed">{company.about}</p>
            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-neutral-100 pt-8">
              <div><div className="text-3xl font-bold text-brand-orange">150+</div><div className="text-body-sm text-neutral-500 mt-1">Proyek Selesai</div></div>
              <div><div className="text-3xl font-bold text-brand-orange">40+</div><div className="text-body-sm text-neutral-500 mt-1">Tenaga Ahli</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50" aria-labelledby="vision-heading">
        <div className="container-main grid-2 gap-12">
          <div className="card p-8 md:p-12">
            <h3 id="vision-heading" className="text-h3 text-neutral-900 mb-6">Visi</h3>
            <p className="text-body text-neutral-600">Menjadi kontraktor pilihan utama di Jawa Tengah yang dikenal karena kualitas konstruksi tanpa cela, integritas operasional, dan kepuasan pelanggan berkelanjutan.</p>
          </div>
          <div className="card p-8 md:p-12">
            <h3 className="text-h3 text-neutral-900 mb-6">Misi</h3>
            <ul className="space-y-4">
              {[
                'Menyediakan jasa konstruksi dengan standar mutu tinggi dan pengawasan ketat.',
                'Menjaga keterbukaan Rencana Anggaran Biaya (RAB) tanpa biaya tersembunyi.',
                'Mematuhi tenggat waktu serah terima proyek sesuai kesepakatan.',
                'Meningkatkan kompetensi tim kerja secara berkala demi hasil terbaik.',
              ].map((m, i) => (
                <li key={i} className="flex gap-3"><span className="font-bold text-brand-orange">{i+1}.</span><span className="text-body-sm text-neutral-600">{m}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="legal-heading">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="legal-heading" className="text-h2 text-neutral-900">Legalitas & Sertifikasi</h2>
            <p className="text-body text-neutral-600 mt-4">Keamanan dan legalitas proyek Anda terjamin dengan sertifikasi resmi kami.</p>
          </div>
          <div className="grid-4">
            {[
              { icon: FileCheck, title: 'SIUJK Resmi', desc: 'Surat Izin Usaha Jasa Konstruksi aktif dan terdaftar.' },
              { icon: ShieldCheck, title: 'Sertifikasi K3', desc: 'Standar keselamatan kerja internasional di lapangan.' },
              { icon: Award, title: 'Sertifikasi ISO', desc: 'Standar manajemen mutu produk dan proses kerja.' },
              { icon: HeartHandshake, title: 'Garansi Tertulis', desc: 'Perjanjian garansi pemeliharaan pasca-serah terima.' },
            ].map(({icon: Icon, title, desc}, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4"><Icon className="w-6 h-6" /></div>
                <h4 className="text-body font-bold text-neutral-900 mb-2">{title}</h4>
                <p className="text-caption text-neutral-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}