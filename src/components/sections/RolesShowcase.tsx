'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Container, Card, Button } from '@/components/ui';

const roleIcons = {
  embajadores: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  creadores: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  marcas: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  anfitriones: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

const roleColors = {
  embajadores: 'brand-teal',
  creadores: 'brand-magenta',
  marcas: 'brand-green',
  anfitriones: 'brand-orange',
};

export function RolesShowcase() {
  const t = useTranslations('roles');

  const roles = ['embajadores', 'creadores', 'marcas', 'anfitriones'] as const;

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="elevated" className="h-full text-center hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-16 h-16 rounded-2xl bg-${roleColors[role]}/10 flex items-center justify-center mx-auto mb-4`}
                  style={{
                    backgroundColor:
                      role === 'embajadores'
                        ? 'rgba(0, 206, 209, 0.1)'
                        : role === 'creadores'
                        ? 'rgba(213, 63, 140, 0.1)'
                        : role === 'marcas'
                        ? 'rgba(56, 161, 105, 0.1)'
                        : 'rgba(237, 137, 54, 0.1)',
                  }}
                >
                  <span
                    style={{
                      color:
                        role === 'embajadores'
                          ? '#00CED1'
                          : role === 'creadores'
                          ? '#D53F8C'
                          : role === 'marcas'
                          ? '#38A169'
                          : '#ED8936',
                    }}
                  >
                    {roleIcons[role]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`${role}.title`)}</h3>
                <p className="text-gray-600 mb-4">{t(`${role}.description`)}</p>
                <Link href={role === 'embajadores' ? '/embajadores' : role === 'marcas' ? '/marcas' : '/como-funciona'}>
                  <Button variant="ghost" size="sm">
                    {t(`${role}.cta`)} →
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
