'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

export function HowItWorksB2C() {
  const t = useTranslations('homepage');

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      description: t('step1Description'),
      color: 'brand-teal',
      emoji: '🤝',
    },
    {
      number: '2',
      title: t('step2Title'),
      description: t('step2Description'),
      color: 'brand-green',
      emoji: '✨',
    },
    {
      number: '3',
      title: t('step3Title'),
      description: t('step3Description'),
      color: 'brand-gold',
      emoji: '🛒',
    },
    {
      number: '4',
      title: t('step4Title'),
      description: t('step4Description'),
      color: 'brand-orange',
      emoji: '💬',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorksTitle')}</h2>
          <p className="text-xl text-gray-600">{t('howItWorksSubtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-teal via-brand-green via-brand-gold to-brand-orange" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <span className="text-4xl">{step.emoji}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
