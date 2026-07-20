import Link from 'next/link';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Share2, Globe, Bookmark } from 'lucide-react';
import { company, navLinks } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="container-main grid gap-12 md:grid-cols-2 lg:grid-cols-5 py-16">
        <div className="lg:col-span-2">
          <Link href="/" className="text-h4 font-bold text-brand-orange mb-6 block">Bumi Konstruksi</Link>
          <p className="text-body-sm leading-relaxed max-w-xs mb-8">
            Kontraktor profesional berpengalaman 15+ tahun dalam jasa renovasi, konstruksi baru, dan desain-build.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-400 hover:text-brand-orange transition-colors" aria-label="Share"><Share2 className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-400 hover:text-brand-orange transition-colors" aria-label="Website"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-400 hover:text-brand-orange transition-colors" aria-label="Bookmark"><Bookmark className="w-5 h-5" /></a>
          </div>
        </div>

        <nav aria-label="Tautan cepat">
          <h3 className="text-h4 font-semibold text-white mb-6">Tautan Cepat</h3>
          <ul className="space-y-3">
            {navLinks.map(l => (
              <li key={l.href}><Link href={l.href} className="text-body-sm hover:text-brand-orange transition-colors flex items-center gap-2 group">{l.label} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Layanan">
          <h3 className="text-h4 font-semibold text-white mb-6">Layanan</h3>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-body-sm hover:text-brand-orange transition-colors">Renovasi & Remodeling</Link></li>
            <li><Link href="/services" className="text-body-sm hover:text-brand-orange transition-colors">Bangun Baru</Link></li>
            <li><Link href="/services" className="text-body-sm hover:text-brand-orange transition-colors">Desain & Bangun</Link></li>
            <li><Link href="/services" className="text-body-sm hover:text-brand-orange transition-colors">Interior & Finishing</Link></li>
          </ul>
        </nav>

        <address aria-label="Kontak" className="space-y-4 not-italic">
          <h3 className="text-h4 font-semibold text-white mb-6">Kontak</h3>
          <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" /><p className="text-body-sm">{company.address}</p></div>
          <a href={`tel:${company.phone}`} className="flex items-center gap-3 text-body-sm hover:text-brand-orange"><Phone className="w-5 h-5 text-brand-orange shrink-0" /><span>{company.phone.replace('62', '+62 ').replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')}</span></a>
          <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-body-sm hover:text-brand-orange"><Mail className="w-5 h-5 text-brand-orange shrink-0" /><span>{company.email}</span></a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-body-sm hover:text-brand-orange"><MessageSquare className="w-5 h-5 text-brand-orange shrink-0" /><span>Chat via WhatsApp</span></a>
        </address>
      </div>
      <div className="container-main border-t border-neutral-800 pt-8 pb-6 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-body-sm text-neutral-500">© {new Date().getFullYear()} {company.name}. Hak Cipta Dilindungi.</p>
        <div className="flex gap-6 text-caption text-neutral-500">
          <Link href="#" className="hover:text-brand-orange">Kebijakan Privasi</Link>
          <Link href="#" className="hover:text-brand-orange">Syarat & Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}