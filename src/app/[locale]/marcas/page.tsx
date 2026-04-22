import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'marcasPage' });

  return {
    title: `${t('title')} | Ygente`,
    description: t('heroSubtitle'),
  };
}

function MarcasPageContent() {
  const t = useTranslations('marcasPage');

  const reasons = [
    {
      title: t('reason1Title'),
      description: t('reason1Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: t('reason2Title'),
      description: t('reason2Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: t('reason3Title'),
      description: t('reason3Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: t('reason4Title'),
      description: t('reason4Description'),
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-green/10 via-white to-brand-teal/5">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="green" className="mb-4">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{t('heroSubtitle')}</p>
            <Link href="/circulo-fundador">
              <Button size="lg" variant="secondary">
                {t('cta')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Ygente */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('whyYgente')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} variant="bordered" className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('dashboard')}
          </h2>
          <Card variant="elevated" className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green">$12,450</div>
                  <div className="text-sm text-gray-500">{t('metrics.sales')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-teal">47</div>
                  <div className="text-sm text-gray-500">{t('metrics.embajadores')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-gold">8.3%</div>
                  <div className="text-sm text-gray-500">{t('metrics.conversion')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-brand-orange">$34,200</div>
                  <div className="text-sm text-gray-500">{t('metrics.revenue')}</div>
                </div>
              </div>
              <div className="h-48 bg-gradient-to-r from-brand-teal/20 to-brand-green/20 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Analytics Chart</span>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-green to-brand-teal text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('heroSubtitle')}</p>
          <Link href="/circulo-fundador">
            <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100">
              {t('cta')}
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}

export default function MarcasPage() {
  return <MarcasPageContent />;
}
