import { getTranslations } from 'next-intl/server';
import {
  HeroB2C,
  TrustSection,
  VerticalShowcase,
  HowItWorksB2C,
  CommunityStats,
  Testimonials,
  CtaSection,
} from '@/components/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroB2C />
      <TrustSection />
      <VerticalShowcase />
      <HowItWorksB2C />
      <CommunityStats />
      <Testimonials />
      <CtaSection />
    </>
  );
}
