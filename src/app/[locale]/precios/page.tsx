import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge, Button } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'preciosPage' });

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

function PreciosPageContent() {
  const t = useTranslations('preciosPage');

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-magenta/10 via-white to-brand-teal/5">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="magenta" className="mb-4">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Embajador Plans */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('embajadorPlans')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card variant="bordered" className="relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('free.name')}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t('free.price')}</span>
                  <span className="text-gray-500 ml-2">{t('free.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[t('free.feature1'), t('free.feature2'), t('free.feature3'), t('free.feature4')].map(
                  (feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <Link href="/circulo-fundador">
                <Button variant="outline" className="w-full">
                  {t('free.cta')}
                </Button>
              </Link>
            </Card>

            {/* Pro Plan */}
            <Card variant="elevated" className="relative border-2 border-brand-teal">
              <Badge variant="teal" className="absolute -top-3 right-4">
                {t('popular')}
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('pro.name')}</h3>
                <div className="mt-2">
                  <span className="text-gray-400 line-through text-xl mr-2">{t('pro.originalPrice')}</span>
                  <span className="text-4xl font-bold">{t('pro.price')}</span>
                  <span className="text-gray-500 ml-2">{t('pro.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  t('pro.feature1'),
                  t('pro.feature2'),
                  t('pro.feature3'),
                  t('pro.feature4'),
                  t('pro.feature5'),
                  t('pro.feature6'),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" disabled>
                {t('pro.cta')}
              </Button>
            </Card>

            {/* Avatar AI Plan */}
            <Card variant="elevated" className="relative border-2 border-brand-magenta">
              <Badge variant="magenta" className="absolute -top-3 right-4">
                AI
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('avatar.name')}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t('avatar.price')}</span>
                  <span className="text-gray-500 ml-2">{t('avatar.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  t('avatar.feature1'),
                  t('avatar.feature2'),
                  t('avatar.feature3'),
                  t('avatar.feature4'),
                  t('avatar.feature5'),
                  t('avatar.feature6'),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-magenta" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" disabled>
                {t('avatar.cta')}
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Marca Plans */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('marcaPlans')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card variant="bordered" className="relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('starter.name')}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t('starter.price')}</span>
                  <span className="text-gray-500 ml-2">{t('starter.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  t('starter.feature1'),
                  t('starter.feature2'),
                  t('starter.feature3'),
                  t('starter.feature4'),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/circulo-fundador">
                <Button variant="outline" className="w-full">
                  {t('starter.cta')}
                </Button>
              </Link>
            </Card>

            {/* Growth Plan */}
            <Card variant="elevated" className="relative border-2 border-brand-green">
              <Badge variant="green" className="absolute -top-3 right-4">
                {t('popular')}
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('growth.name')}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t('growth.price')}</span>
                  <span className="text-gray-500 ml-2">{t('growth.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  t('growth.feature1'),
                  t('growth.feature2'),
                  t('growth.feature3'),
                  t('growth.feature4'),
                  t('growth.feature5'),
                  t('growth.feature6'),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto">
                <Button variant="secondary" className="w-full">
                  {t('growth.cta')}
                </Button>
              </Link>
            </Card>

            {/* Orgmind AI Plan */}
            <Card variant="elevated" className="relative border-2 border-brand-gold">
              <Badge variant="gold" className="absolute -top-3 right-4">
                AI
              </Badge>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{t('orgmind.name')}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{t('orgmind.price')}</span>
                  <span className="text-gray-500 ml-2">{t('orgmind.period')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  t('orgmind.feature1'),
                  t('orgmind.feature2'),
                  t('orgmind.feature3'),
                  t('orgmind.feature4'),
                  t('orgmind.feature5'),
                  t('orgmind.feature6'),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto">
                <Button variant="secondary" className="w-full">
                  {t('orgmind.cta')}
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function PreciosPage() {
  return <PreciosPageContent />;
}
