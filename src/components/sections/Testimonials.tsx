'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container, Card } from '@/components/ui';

export function Testimonials() {
  const t = useTranslations('homepage');

  const testimonials = [
    {
      quote: t('testimonial1Quote'),
      author: t('testimonial1Author'),
      location: t('testimonial1Location'),
      avatar: '👩🏽',
    },
    {
      quote: t('testimonial2Quote'),
      author: t('testimonial2Author'),
      location: t('testimonial2Location'),
      avatar: '👨🏽',
    },
    {
      quote: t('testimonial3Quote'),
      author: t('testimonial3Author'),
      location: t('testimonial3Location'),
      avatar: '👩🏻',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonialsTitle')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="bordered" className="h-full">
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  <blockquote className="text-gray-700 italic flex-1 mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
