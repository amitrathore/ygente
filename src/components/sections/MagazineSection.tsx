'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container, Button } from '@/components/ui';

const pillars = [
  { key: 'productos', icon: '🛍️', color: 'from-brand-teal/20 to-brand-teal/5' },
  { key: 'destacados', icon: '⭐', color: 'from-brand-gold/20 to-brand-gold/5' },
  { key: 'humanidades', icon: '📚', color: 'from-brand-magenta/20 to-brand-magenta/5' },
  { key: 'arte', icon: '🎨', color: 'from-brand-orange/20 to-brand-orange/5' },
  { key: 'cultura', icon: '🎭', color: 'from-brand-green/20 to-brand-green/5' },
  { key: 'opiniones', icon: '💬', color: 'from-brand-teal/20 to-brand-teal/5' },
  { key: 'resenas', icon: '📝', color: 'from-brand-gold/20 to-brand-gold/5' },
];

export function MagazineSection() {
  const t = useTranslations('magazine');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-brand-magenta/10 text-brand-magenta font-medium text-sm mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* 7 Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group`}
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                {pillar.icon}
              </span>
              <h3 className="font-semibold text-gray-900 mb-1">
                {t(`pillars.${pillar.key}.title`)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(`pillars.${pillar.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call for Creators CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-brand-teal via-brand-green to-brand-gold rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('callForCreators.title')}
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            {t('callForCreators.description')}
          </p>
          <Link href="/circulo-fundador">
            <Button
              size="lg"
              className="bg-white text-brand-teal hover:bg-gray-100 text-lg px-8"
            >
              {t('callForCreators.cta')}
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
