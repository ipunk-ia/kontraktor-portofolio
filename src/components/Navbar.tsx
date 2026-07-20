'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks, company } from '@/data/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-main" aria-label="Navigasi utama">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-h4 font-bold text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 rounded-md"
            aria-label={`${company.name} - Beranda`}
          >
            <span className="hidden sm:block">Bumi Konstruksi</span>
            <span className="sm:hidden">BK</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-body-sm font-medium transition-colors',
                  isScrolled
                    ? 'text-neutral-700 dark:text-neutral-300 hover:text-brand-orange dark:hover:text-brand-orange'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-orange'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
                isScrolled
                  ? 'text-brand-orange hover:text-brand-orange-hover'
                  : 'text-brand-orange hover:text-brand-orange-hover'
              )}
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>WA</span>
            </a>
            <Link
              href="/quote"
              className="btn-primary"
            >
              Minta Penawaran
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-orange dark:hover:text-brand-orange px-2 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-base bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Hubungi via WhatsApp
              </a>
              <a
                href={`tel:${company.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-base border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Telepon Sekarang
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}