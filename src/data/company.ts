import type { CompanyStat, NavLink } from './types';

export const company = {
  name: 'Bumi Konstruksi',
  tagline: 'Bangun Kepercayaan, Wujudkan Karya',
  description:
    'Kontraktor profesional berpengalaman lebih dari 15 tahun dalam jasa renovasi, konstruksi baru, dan desain-build untuk residensial, komersial, dan industrial di Jawa Tengah.',
  about:
    'Berdiri sejak 2010, Bumi Konstruksi telah menyelesaikan lebih dari 150 proyek di seluruh Jawa Tengah. Kami hadir sebagai mitra pembangunan yang mengedepankan kualitas, ketepatan waktu, dan transparansi. Dengan tim arsitek, insinyur struktural, dan tukang berpengalaman, setiap proyek ditangani dengan standar tinggi dan perhatian pada detail.',
  email: 'info@bumikonstruksi.id',
  phone: '62812-3456-7890',
  whatsapp: '6281234567890',
  address: 'Jl. Gajahmada No. 123, Semarang, Jawa Tengah 50134',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.226065538562!2d110.41355447587787!3d-6.982635968377726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4952026857%3A0xc3cfc3ef58784d1c!2sSimpang%20Lima%20Semarang!5e0!3m2!1sid!2sid!4v1721400000000!5m2!1sid!2sid',
  foundedYear: 2010,
  experience: 15,
};

export const stats: CompanyStat[] = [
  { label: 'Proyek Selesai', value: '150+' },
  { label: 'Tahun Pengalaman', value: '15' },
  { label: 'Klien Puas', value: '98%' },
  { label: 'Tenaga Ahli', value: '40+' },
];

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about' },
  { label: 'Layanan', href: '/services' },
  { label: 'Portofolio', href: '/portfolio' },
  { label: 'Testimoni', href: '/testimonials' },
  { label: 'Kontak', href: '/contact' },
];
