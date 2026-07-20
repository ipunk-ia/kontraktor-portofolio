'use client';

import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  watermark?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  watermark = 'BUMI KONSTRUKSI',
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="text-[10rem] md:text-[18rem] lg:text-[24rem] font-black leading-none opacity-[0.04] text-brand-orange whitespace-nowrap">
          {watermark}
        </span>
      </div>

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          {/* Left — spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {subtitle && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange text-caption font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                {subtitle}
              </span>
            )}
            <h1 className="text-display text-neutral-900 mb-6 text-balance">{title}</h1>
            {description && <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed max-w-xl">{description}</p>}

            <div className="flex flex-col sm:flex-row items-start gap-4">
              {primaryCta && (
                <a href={primaryCta.href} className="btn-primary inline-flex items-center gap-2">
                  {primaryCta.label} <ArrowRight className="w-5 h-5" />
                </a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href} className="btn-outline inline-flex items-center gap-2">
                  {secondaryCta.label}
                </a>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {['Garansi 1 Tahun', 'Tim Profesional', 'Bebas Biaya Siluman'].map((l, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span className="text-body-sm font-medium">{l}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-300" />)}
                </div>
                <span className="text-body-sm font-medium text-neutral-600"><strong className="text-neutral-900">4k+</strong> Klien</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-brand-orange">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-body-sm font-medium text-neutral-600">Rating <strong className="text-neutral-900">5.0</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Right — spans 5 cols, smaller image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 aspect-[4/5] max-w-[440px] mx-auto">
                <img src={image} alt="" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
              </div>
              <div className="absolute -bottom-4 -left-4 lg:left-0 bg-white rounded-2xl shadow-xl border border-neutral-200 px-5 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange text-lg font-bold">&#10003;</div>
                <div>
                  <div className="text-body-sm font-bold text-neutral-900">150+ Proyek</div>
                  <div className="text-caption text-neutral-500">Selesai Tepat Waktu</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}