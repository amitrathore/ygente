'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container, Button } from '@/components/ui';

export function CtaSection() {
  const t = useTranslations('homepage');

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold">
      <Container size="md" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('ctaSubtitle')}
          </p>
          <Link href="/circulo-fundador">
            <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-10">
              {t('ctaButton')}
            </Button>
          </Link>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/80">
            <Link href="/embajadores" className="hover:text-white transition-colors">
              {t('forSellers')} →
            </Link>
            <Link href="/marcas" className="hover:text-white transition-colors">
              {t('forBrands')} →
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
