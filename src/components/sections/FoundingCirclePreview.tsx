'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container, Card, Button } from '@/components/ui';

export function FoundingCirclePreview() {
  const t = useTranslations('foundingCircle');

  const embajadorBenefits = [
    t('embajadores.benefit1'),
    t('embajadores.benefit2'),
    t('embajadores.benefit3'),
    t('embajadores.benefit4'),
  ];

  const marcaBenefits = [
    t('marcas.benefit1'),
    t('marcas.benefit2'),
    t('marcas.benefit3'),
    t('marcas.benefit4'),
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-400">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Embajadores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card variant="default" className="h-full bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 border border-brand-teal/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">{t('embajadores.title')}</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-brand-teal">42</span>
                  <span className="text-gray-400 text-sm block">{t('spotsLeft')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {embajadorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-brand-teal h-2 rounded-full" style={{ width: '16%' }}></div>
              </div>
              <Link href="/circulo-fundador">
                <Button variant="primary" className="w-full">
                  {t('applyNow')}
                </Button>
              </Link>
            </Card>
          </motion.div>

          {/* Marcas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card variant="default" className="h-full bg-gradient-to-br from-brand-green/20 to-brand-green/5 border border-brand-green/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">{t('marcas.title')}</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-brand-green">21</span>
                  <span className="text-gray-400 text-sm block">{t('spotsLeft')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {marcaBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '16%' }}></div>
              </div>
              <Link href="/circulo-fundador">
                <Button variant="secondary" className="w-full">
                  {t('applyNow')}
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
