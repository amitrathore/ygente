import { useTranslations } from 'next-intl';
import { Container, Card } from '@/components/ui';
import { TallyEmbed } from './TallyEmbed';

export function WaitlistForm() {
  const t = useTranslations('waitlist');

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-brand-teal/5 via-white to-brand-green/5">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <Card variant="elevated" className="max-w-xl mx-auto">
          <TallyEmbed form="waitlist" title="Ygente waitlist form" minHeight={420} />
        </Card>
      </Container>
    </section>
  );
}
