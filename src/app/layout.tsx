import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kontraktor Profesional - Renovasi & Konstruksi Bangunan',
  description: 'Perusahaan kontraktor terpercaya yang menyediakan jasa renovasi, konstruksi baru, dan desain-build untuk rumah, komersial, dan industri.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}