'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container, Button, Badge } from '@/components/ui';

export function WhatIsYgente() {
  const t = useTranslations('whatIsYgente');

  return (
    <section className="relative overflow-hidden bg-gray-900 text-white py-20 md:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl" />
      </div>

      <Container size="lg" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="teal" className="mb-6 bg-white/10 text-brand-teal">
            {t('badge')}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            {t('heading')}
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            {t('body1')}
          </p>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            {t('body2')}
          </p>
          <p className="text-xl md:text-2xl font-semibold mb-10 bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent">
            {t('body3')}
          </p>

          <Link href="/ygente">
            <Button size="lg" className="text-lg px-8">
              {t('cta')} →
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
