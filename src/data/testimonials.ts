import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bpk. Andreas Wirawan',
    role: 'Pemilik Rumah',
    company: 'Villa Modern Semarang',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=andreas&backgroundColor=ea580c',
    rating: 5,
    text: 'Mulai dari survey sampai handover, tim sangat profesional. Rumah villa kami jadi jauh lebih baik dari yang dibayangkan. Mereka mengerti apa yang kami mau dan kasih solusi teknis yang tepat. Highly recommended untuk renovasi rumah.',
    projectType: 'Residensial',
  },
  {
    id: '2',
    name: 'Ibu Wulandari Hartono',
    role: 'Pemilik Rumah',
    company: 'Rumah Tropis Salatiga',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=wulandari&backgroundColor=ea580c',
    rating: 5,
    text: 'Proses bangun rumah pertama kami berkat detail dari awal. Mereka sabar menjelaskan tiap tahap dan budget-nya transparan banget. Hasil rumahnya adem, pencahayaan bagus, persis seperti di render. Terima kasih tim!',
    projectType: 'Residensial',
  },
  {
    id: '3',
    name: 'Bpk. Hendra Gunawan',
    role: 'Direktur',
    company: 'PT Fintek Solusi',
    avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=hendra&backgroundColor=ea580c',
    rating: 5,
    text: 'Renovasi kantor selesai tepat waktu sesuai MEP. Hasil interiornya modern, fungsional, dan tim mereka minimal mengganggu operasional kantor selama renovasi. Sekarang produktivitas tim meningkat berkat workspace yang lebih nyaman.',
    projectType: 'Komersial',
  },
];
