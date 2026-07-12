import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'territoriesPage' });

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

function TerritoriesContent() {
  const t = useTranslations('territoriesPage');

  const tree = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`t${n}`));

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-magenta/10 via-white to-brand-teal/5">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="magenta" className="mb-4">{t('badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* What is a market */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('whatTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{t('whatBody')}</p>
        </Container>
      </section>

      {/* Market structure */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('treeTitle')}</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t('treeSubtitle')}</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-2">
            {tree.map((level, index) => (
              <div key={index}>
                <div
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-center"
                  style={{ marginLeft: `${index * 6}%`, marginRight: `${index * 6}%` }}
                >
                  {level}
                </div>
                {index < tree.length - 1 && (
                  <div className="text-center text-brand-teal text-xl leading-none py-1">↓</div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Company standards */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('principleTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{t('principleBody')}</p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-magenta to-brand-orange text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/commonwealth/ser-steward">
              <Button size="lg" className="bg-white text-brand-magenta hover:bg-gray-100">
                {t('ctaButton')}
              </Button>
            </Link>
            <Link href="/commonwealth/constitucion">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-magenta">
                {t('ctaSecondary')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function TerritoriesPage() {
  return <TerritoriesContent />;
}
