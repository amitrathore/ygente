import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'visionPage' });

  return {
    title: `${t('title')} | Ygente`,
    description: t('heroSubtitle'),
    openGraph: {
      title: `${t('title')} | Ygente`,
      description: t('heroSubtitle'),
      images: [{ url: '/images/logo.jpeg', width: 1200, height: 630, alt: 'Ygente' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/logo.jpeg'],
    },
  };
}

function VisionContent() {
  const t = useTranslations('visionPage');

  const beliefs = [t('belief1'), t('belief2'), t('belief3'), t('belief4')];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-teal/10 via-white to-brand-gold/5">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="teal" className="mb-4">{t('badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* The problem, narrated */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug mb-8">
              {t('p1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{t('p2')}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{t('p3')}</p>
          </div>
        </Container>
      </section>

      {/* Beliefs */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('beliefsTitle')}</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {beliefs.map((belief, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-brand-teal text-2xl font-bold flex-shrink-0">✦</span>
                <p className="text-xl md:text-2xl text-gray-100">{belief}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('closingTitle')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('closing')}</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-brand-green text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ygente/como-funciona">
              <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100">
                {t('ctaButton')} →
              </Button>
            </Link>
            <Link href="/ygente/principios">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-teal">
                {t('ctaSecondary')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function VisionPage() {
  return <VisionContent />;
}
