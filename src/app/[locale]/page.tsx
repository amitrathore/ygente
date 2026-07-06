import { getTranslations } from 'next-intl/server';
import {
  HeroB2C,
  WhatIsYgente,
  TrustSection,
  MagazineSection,
  VerticalShowcase,
  CommunityStats,
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
      images: [
        {
          url: '/images/logo.jpeg',
          width: 1200,
          height: 630,
          alt: 'Ygente - Red de Crecimiento para la Comunidad Hispana',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/logo.jpeg'],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroB2C />
      <WhatIsYgente />
      <TrustSection />
      <MagazineSection />
      <VerticalShowcase />
      <CommunityStats />
      <CtaSection />
    </>
  );
}
