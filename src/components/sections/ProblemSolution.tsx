'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container, Card } from '@/components/ui';

export function ProblemSolution() {
  const t = useTranslations('problem');

  const traditionalPoints = [
    t('traditional.point1'),
    t('traditional.point2'),
    t('traditional.point3'),
    t('traditional.point4'),
  ];

  const ygentePoints = [
    t('ygente.point1'),
    t('ygente.point2'),
    t('ygente.point3'),
    t('ygente.point4'),
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container size="xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Marketing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="bordered" className="h-full border-red-200 bg-red-50/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('traditional.title')}</h3>
              </div>
              <ul className="space-y-4">
                {traditionalPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* With Ygente */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="bordered" className="h-full border-brand-teal/30 bg-brand-teal/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('ygente.title')}</h3>
              </div>
              <ul className="space-y-4">
                {ygentePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
