import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ygenteWorks' });

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

function YgenteWorksContent() {
  const t = useTranslations('ygenteWorks');
  const tFly = useTranslations('flywheel');

  const circle = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`c${n}`));

  const fiveCs = ['campaigns', 'content', 'community', 'commerce', 'cosellers'] as const;

  const mechanisms = [1, 2, 3].map((n) => ({
    title: t(`mech${n}Title`),
    desc: t(`mech${n}Desc`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-green/10 via-white to-brand-teal/5">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="green" className="mb-4">{t('badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* The circle of prosperity */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('circleTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('circleSubtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {circle.map((participant, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-brand-teal/5 to-brand-gold/5 border border-gray-100 p-6 text-center"
              >
                <span className="text-2xl font-bold text-brand-teal/40 block mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-gray-800">{participant}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The 5Cs engine (reuses flywheel copy) */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('fivecsTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('fivecsSubtitle')}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {fiveCs.map((c, index) => (
              <Card key={c} variant="bordered" className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal text-white text-lg font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tFly(`${c}.title`)}</h3>
                <p className="text-sm text-gray-600">{tFly(`${c}.description`)}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Mechanisms that keep value local */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('mechTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('mechSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mechanisms.map((mechanism, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <h3 className="text-xl font-semibold mb-3 text-brand-teal">{mechanism.title}</h3>
                <p className="text-gray-600">{mechanism.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-brand-green text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ygente/principios">
              <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100">
                {t('ctaButton')}
              </Button>
            </Link>
            <Link href="/ygente/socio-regional">
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

export default function YgenteWorksPage() {
  return <YgenteWorksContent />;
}
