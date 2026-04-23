import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge } from '@/components/ui';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nosotrosPage' });

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

function NosotrosPageContent() {
  const t = useTranslations('nosotrosPage');

  const values = [
    {
      title: t('value1Title'),
      description: t('value1Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      bgColor: 'bg-brand-teal/10',
      textColor: 'text-brand-teal',
    },
    {
      title: t('value2Title'),
      description: t('value2Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'bg-brand-green/10',
      textColor: 'text-brand-green',
    },
    {
      title: t('value3Title'),
      description: t('value3Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: 'bg-brand-gold/10',
      textColor: 'text-brand-gold',
    },
    {
      title: t('value4Title'),
      description: t('value4Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      bgColor: 'bg-brand-orange/10',
      textColor: 'text-brand-orange',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-orange/10 via-white to-brand-gold/5">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="orange" className="mb-4">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('manifesto')}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t('manifestoText1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('manifestoText2')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('manifestoText3')}
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('values')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} variant="bordered" className="flex gap-4">
                <div className={`w-16 h-16 rounded-xl ${value.bgColor} flex items-center justify-center flex-shrink-0 ${value.textColor}`}>
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-orange to-brand-gold text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('heroTitle')}</h2>
          <p className="text-xl opacity-90">{t('heroSubtitle')}</p>
        </Container>
      </section>
    </>
  );
}

export default function NosotrosPage() {
  return <NosotrosPageContent />;
}
