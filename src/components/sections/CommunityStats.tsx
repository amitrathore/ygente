'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function CommunityStats() {
  const t = useTranslations('homepage');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label'), color: 'text-brand-teal' },
    { value: t('stat2Value'), label: t('stat2Label'), color: 'text-brand-green' },
    { value: t('stat3Value'), label: t('stat3Label'), color: 'text-brand-gold' },
    { value: t('stat4Value'), label: t('stat4Label'), color: 'text-brand-orange' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('communityTitle')}</h2>
          <p className="text-xl text-gray-400">{t('communitySubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
