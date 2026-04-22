'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui';

const stepIcons = {
  campaigns: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  ),
  content: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  community: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  commerce: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  cosellers: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function Flywheel() {
  const t = useTranslations('flywheel');

  const steps = ['campaigns', 'content', 'community', 'commerce', 'cosellers'] as const;
  const colors = ['#00CED1', '#38A169', '#D69E2E', '#ED8936', '#D53F8C'];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        {/* Desktop Flywheel */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-brand-teal via-brand-green to-brand-gold flex items-center justify-center">
                <span className="text-white font-bold text-2xl">5Cs</span>
              </div>

              {/* Steps around the circle */}
              {steps.map((step, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="absolute w-36 h-36 -ml-18 -mt-18"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: `${colors[index]}20` }}
                      >
                        <span style={{ color: colors[index] }}>{stepIcons[step]}</span>
                      </div>
                      <h3 className="font-semibold text-sm">{t(`${step}.title`)}</h3>
                      <p className="text-xs text-gray-500 mt-1">{t(`${step}.description`)}</p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connecting arrows */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-18deg)' }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#00CED1" />
                  </marker>
                </defs>
                <circle
                  cx="250"
                  cy="250"
                  r="140"
                  fill="none"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                  strokeDasharray="15,10"
                  className="animate-[spin_20s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00CED1" />
                    <stop offset="50%" stopColor="#38A169" />
                    <stop offset="100%" stopColor="#D69E2E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${colors[index]}20` }}
              >
                <span style={{ color: colors[index] }}>{stepIcons[step]}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full text-white text-sm flex items-center justify-center"
                    style={{ backgroundColor: colors[index] }}
                  >
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{t(`${step}.title`)}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-1">{t(`${step}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
