'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container, Card } from '@/components/ui';

export function TrustSection() {
  const t = useTranslations('homepage');

  const trustPoints = [
    {
      title: t('trust1Title'),
      description: t('trust1Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'brand-teal',
    },
    {
      title: t('trust2Title'),
      description: t('trust2Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'brand-gold',
    },
    {
      title: t('trust3Title'),
      description: t('trust3Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'brand-green',
    },
    {
      title: t('trust4Title'),
      description: t('trust4Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'brand-orange',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    'brand-teal': { bg: 'bg-brand-teal/10', text: 'text-brand-teal' },
    'brand-gold': { bg: 'bg-brand-gold/10', text: 'text-brand-gold' },
    'brand-green': { bg: 'bg-brand-green/10', text: 'text-brand-green' },
    'brand-orange': { bg: 'bg-brand-orange/10', text: 'text-brand-orange' },
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('trustTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('trustSubtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="bordered" className="h-full text-center p-6">
                <div className={`w-16 h-16 rounded-2xl ${colorClasses[point.color].bg} ${colorClasses[point.color].text} flex items-center justify-center mx-auto mb-4`}>
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
