import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'stewardPage' });

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

function StewardContent() {
  const t = useTranslations('stewardPage');

  const foundations = [1, 2, 3, 4, 5].map((n) => t(`f${n}`));
  const pledge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => t(`pledge${n}`));

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-teal/10 via-white to-brand-green/5">
        <Container size="md">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="teal" className="mb-4">{t('badge')}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('heroTitle')}</h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* What is a Steward */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('whatTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">{t('whatBody')}</p>

          <h3 className="text-xl font-semibold mb-6">{t('foundationsTitle')}</h3>
          <div className="flex flex-wrap gap-3">
            {foundations.map((foundation, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-brand-teal/10 text-brand-teal px-5 py-2 font-semibold"
              >
                {foundation}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Multiply leadership */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('multiplyTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{t('multiplyBody')}</p>
        </Container>
      </section>

      {/* The Founding Pledge */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <Container size="md">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pledgeTitle')}</h2>
            <p className="text-lg text-gray-300">{t('pledgeSubtitle')}</p>
          </div>
          <ol className="space-y-5 max-w-2xl mx-auto">
            {pledge.map((line, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="text-brand-teal font-bold text-lg flex-shrink-0 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl text-gray-100">{line}</span>
              </li>
            ))}
          </ol>
          <p className="text-center text-xl md:text-2xl font-semibold mt-14 bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent">
            {t('pledgeClosing')}
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-brand-green text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{t('ctaSubtitle')}</p>
          <Link href="/circulo-fundador">
            <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100">
              {t('ctaButton')}
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}

export default function StewardPage() {
  return <StewardContent />;
}
