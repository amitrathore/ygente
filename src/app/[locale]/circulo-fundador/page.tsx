import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge } from '@/components/ui';
import { FoundingCircleForm } from '@/components/forms';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'circuloFundadorPage' });

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

function CirculoFundadorPageContent() {
  const t = useTranslations('circuloFundadorPage');
  const fc = useTranslations('foundingCircle');

  const embajadorBenefits = [
    fc('embajadores.benefit1'),
    fc('embajadores.benefit2'),
    fc('embajadores.benefit3'),
    fc('embajadores.benefit4'),
  ];

  const marcaBenefits = [
    fc('marcas.benefit1'),
    fc('marcas.benefit2'),
    fc('marcas.benefit3'),
    fc('marcas.benefit4'),
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-4 bg-brand-gold/20 text-brand-gold">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-400">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* What Is */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('whatIs')}
          </h2>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            {t('whatIsDescription')}
          </p>
        </Container>
      </section>

      {/* Progress & Benefits */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('progressTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Embajadores Progress */}
            <Card variant="bordered" className="border-brand-teal/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">{t('embajadorBenefits')}</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-brand-teal">42</span>
                  <span className="text-gray-500 text-sm block">{fc('spotsLeft')}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{t('embajadoresProgress')}</span>
                  <span>8/50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-brand-teal h-3 rounded-full transition-all duration-500" style={{ width: '16%' }}></div>
                </div>
              </div>

              <ul className="space-y-3">
                {embajadorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Marcas Progress */}
            <Card variant="bordered" className="border-brand-green/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">{t('marcaBenefits')}</h3>
                <div className="text-right">
                  <span className="text-3xl font-bold text-brand-green">21</span>
                  <span className="text-gray-500 text-sm block">{fc('spotsLeft')}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{t('marcasProgress')}</span>
                  <span>4/25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-brand-green h-3 rounded-full transition-all duration-500" style={{ width: '16%' }}></div>
                </div>
              </div>

              <ul className="space-y-3">
                {marcaBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('application')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('applicationDescription')}
            </p>
          </div>
          <FoundingCircleForm />
        </Container>
      </section>
    </>
  );
}

export default function CirculoFundadorPage() {
  return <CirculoFundadorPageContent />;
}
