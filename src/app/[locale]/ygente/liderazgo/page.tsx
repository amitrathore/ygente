import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'governancePage' });

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

function GovernanceContent() {
  const t = useTranslations('governancePage');

  const ladder = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`r${n}`));
  const responsibilities = [1, 2, 3, 4, 5, 6].map((n) => t(`council${n}`));

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-orange/10 via-white to-brand-gold/5">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">{t('badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Company direction */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('subsidiarityTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t('subsidiarityBody')}</p>
        </Container>
      </section>

      {/* Representation ladder */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('representationTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('representationSubtitle')}</p>
          </div>
          <div className="max-w-md mx-auto space-y-2">
            {ladder.map((level, index) => (
              <div key={index}>
                <div
                  className="rounded-xl bg-white border border-gray-200 px-6 py-4 text-center font-semibold text-gray-800 shadow-sm"
                  style={{ opacity: 0.6 + (index / (ladder.length - 1)) * 0.4 }}
                >
                  {level}
                </div>
                {index < ladder.length - 1 && (
                  <div className="text-center text-brand-teal text-xl leading-none py-1">↑</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Executive team */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('councilTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{t('councilBody')}</p>
          <h3 className="text-xl font-semibold mb-6">{t('councilResponsibilities')}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {responsibilities.map((responsibility, index) => (
              <Card key={index} variant="bordered" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">{responsibility}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-orange to-brand-gold text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ygente/socio-regional">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
                {t('ctaButton')}
              </Button>
            </Link>
            <Link href="/ygente/mercados">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange">
                {t('ctaSecondary')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function GovernancePage() {
  return <GovernanceContent />;
}
