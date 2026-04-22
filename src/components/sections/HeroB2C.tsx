'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Container, Button } from '@/components/ui';

export function HeroB2C() {
  const t = useTranslations('homepage');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal/5 via-white to-brand-gold/10 py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold font-medium text-sm mb-6">
              {t('heroTagline')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            {t('heroTitle')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            {t('heroSubtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/circulo-fundador">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                {t('ctaExplore')}
              </Button>
            </Link>
            <Link href="/circulo-fundador">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                {t('ctaJoin')}
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Floating product cards preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {[
              { color: 'bg-brand-teal/20', name: 'Belleza', icon: '💄' },
              { color: 'bg-brand-green/20', name: 'Hogar', icon: '🏠' },
              { color: 'bg-brand-gold/20', name: 'Moda', icon: '👗' },
              { color: 'bg-brand-orange/20', name: 'Salud', icon: '💪' },
              { color: 'bg-brand-magenta/20', name: 'Tech', icon: '📱' },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className={`${category.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <span className="font-medium text-gray-800">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
