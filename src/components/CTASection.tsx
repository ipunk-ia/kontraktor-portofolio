import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  variant?: 'default' | 'dark' | 'brand';
}

export default function CTASection({
  title = 'Siap Memulai Proyek Impian Anda?',
  description = 'Konsultasikan rencana bangunan Anda dengan tim ahli kami. Gratis survey dan estimasi biaya tanpa komitmen.',
  primaryCta = { label: 'Minta Penawaran Sekarang', href: '/quote' },
  secondaryCta = { label: 'Chat via WhatsApp', href: 'https://wa.me/6281234567890' },
  className,
  variant = 'default',
}: CTASectionProps) {
  const v = {
    default: 'bg-neutral-50 dark:bg-neutral-900',
    dark: 'bg-neutral-900 dark:bg-neutral-950',
    brand: 'bg-brand-orange',
  };
  const t = {
    default: 'text-neutral-900 dark:text-white',
    dark: 'text-white',
    brand: 'text-white',
  };
  const m = {
    default: 'text-neutral-600 dark:text-neutral-400',
    dark: 'text-neutral-400',
    brand: 'text-white/80',
  };

  return (
    <section className={cn('section text-center', v[variant], className)} aria-labelledby="cta-title">
      <div className="container-main max-w-3xl">
        <h2 id="cta-title" className={cn('text-h2 mb-6', t[variant])}>{title}</h2>
        {description && <p className={cn('text-body-lg mb-10', m[variant])}>{description}</p>}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryCta && (
            <a href={primaryCta.href} className={cn('btn-primary rounded-full', variant === 'brand' ? 'bg-white text-brand-orange hover:bg-neutral-100' : '')}>
              {primaryCta.label} <ArrowRight className="w-5 h-5" />
            </a>
          )}
          {secondaryCta && (
            <a href={secondaryCta.href} className={cn('btn-outline rounded-full', variant === 'brand' ? 'border-white text-white hover:bg-white hover:text-brand-orange' : '')}>
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}