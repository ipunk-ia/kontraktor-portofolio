import type { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Renovasi & Remodeling',
    slug: 'renovasi',
    description:
      'Transformasi bangunan eksisting Anda — dari renovasi total hingga update parsial. Kami tangani segala aspek: struktur, interior, MEP, dan finishing.',
    icon: 'Hammer',
    benefits: [
      'Nilai properti meningkat signifikan',
      'Proses lebih cepat dari bangun baru',
      'Minimalkan gangguan selama pengerjaan',
      'Garansi pekerjaan 1 tahun',
    ],
    process: [
      { step: 'Survey & Assessment', desc: 'Tim kami melakukan inspeksi menyeluruh untuk menilai kondisi eksisting.' },
      { step: 'Desain Konsep', desc: 'Arsitek menyusun alternatif desain sesuai kebutuhan dan anggaran.' },
      { step: 'RAB & Kontrak', desc: 'Rincian anggaran biaya transparan — tidak ada biaya tersembunyi.' },
      { step: 'Eksekusi', desc: 'Pengerjaan oleh tim berpengalaman dengan quality control ketat.' },
      { step: 'Handover & Garansi', desc: 'Serah terima hasil kerja + garansi layanan purna jual.' },
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    id: '2',
    title: 'Bangun Baru (New Build)',
    slug: 'bangun-baru',
    description:
      'Dari lahan kosong menjadi bangunan impian. Kami tangani seluruh proses dari fondasi hingga finishing untuk rumah, ruko, kantor, dan gudang.',
    icon: 'Building2',
    benefits: [
      'Fleksibilitas desain tanpa batasan eksisting',
      'Bangunan sesuai standar SNI terkini',
      'Pengawasan ketat tiap tahap konstruksi',
      'Izin mendirikan bangunan (IMB/PBG) diurus',
    ],
    process: [
      { step: 'Konsultasi Awal', desc: 'Diskusi kebutuhan, lahan, dan anggaran secara detail.' },
      { step: 'Feasibility Study', desc: 'Analisis tanah, struktur, dan kelayakan bangunan.' },
      { step: 'Perencanaan & Desain', desc: 'Gambar arsitektur, struktur, dan MEP lengkap.' },
      { step: 'Konstruksi', desc: 'Pembangunan oleh tim profesional dengan safety standard.' },
      { step: 'Finishing & Serah Terima', desc: 'Quality check menyeluruh sebelum diserahkan ke klien.' },
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  },
  {
    id: '3',
    title: 'Desain & Bangun (Design-Build)',
    slug: 'desain-bangun',
    description:
      'Integrated service — desain dan konstruksi dalam satu kontrak. Lebih efisien, lebih terintegrasi, tanpa ribet koordinasi multi-vendor.',
    icon: 'PenTool',
    benefits: [
      'Single point of responsibility — tidak ada saling lempar',
      'Waktu pengerjaan lebih cepat 20-30%',
      'Biaya lebih pasti sejak awal',
      'Koordinator arsitek & kontraktor dalam satu tim',
    ],
    process: [
      { step: 'Brief & Vision', desc: 'Kami mendalami visi, gaya arsitektur, dan kebutuhan fungsional.' },
      { step: 'Concept Design', desc: 'Arsitek menyajikan alternatif desain 3D & site plan.' },
      { step: 'Value Engineering', desc: 'Optimasi biaya tanpa mengorbankan kualitas inti.' },
      { step: 'Construction', desc: 'Eksekusi langsung dengan tim yang sudah paham desain.' },
      { step: 'Quality Control', desc: 'Inspeksi berkala dan final handover.' },
    ],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80',
  },
  {
    id: '4',
    title: 'Interior & Finishing',
    slug: 'interior-finishing',
    description:
      'Sentuhan akhir yang membuat bangunan Anda istimewa. Layanan interior desain dan finishing untuk residensial maupun komersial.',
    icon: 'Paintbrush',
    benefits: [
      'Desain interior sesuai karakter penghuni',
      'Material finishing terkurasi — lokal & import',
      'Pengerjaan detail dengan craftsmanship tinggi',
      'Furniture custom built-in sesuai lahan',
    ],
    process: [
      { step: 'Mood & Style Discovery', desc: 'Menentukan gaya interior yang diinginkan (modern, klasik, industrial, dll).' },
      { step: 'Layout & 3D Visualization', desc: 'Render 3D fotorealistik untuk melihat hasil akhir.' },
      { step: 'Material Selection', desc: 'Pemilihan material lantai, cat, wallcovering, furnitur.' },
      { step: 'Fabrication & Installation', desc: 'Pembuatan furnitur dan instalasi di lokasi.' },
      { step: 'Styling & Handover', desc: 'Penataan akhir dan penyerahan.' },
    ],
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
  },
];
