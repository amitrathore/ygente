import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'creadoresPage' });

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

function CreadoresContent() {
  const t = useTranslations('creadoresPage');

  const steps = [
    { title: t('step1Title'), description: t('step1Description'), icon: '1' },
    { title: t('step2Title'), description: t('step2Description'), icon: '2' },
    { title: t('step3Title'), description: t('step3Description'), icon: '3' },
    { title: t('step4Title'), description: t('step4Description'), icon: '4' },
  ];

  const benefits = [
    t('benefit1'),
    t('benefit2'),
    t('benefit3'),
    t('benefit4'),
    t('benefit5'),
    t('benefit6'),
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-magenta/10 via-white to-brand-gold/5">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="magenta" className="mb-4">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t('heroSubtitle')}</p>
            <Link href="/circulo-fundador">
              <Button size="lg">{t('cta')}</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('howItWorks')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-magenta text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('benefits')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="bordered" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-magenta/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-brand-magenta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="font-medium">{benefit}</span>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-magenta to-brand-orange text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('heroSubtitle')}</p>
          <Link href="/circulo-fundador">
            <Button size="lg" className="bg-white text-brand-magenta hover:bg-gray-100">
              {t('cta')}
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}

export default function CreadoresPage() {
  return <CreadoresContent />;
}
