import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge, Button } from '@/components/ui';
import { Link } from '@/i18n/routing';
import { Flywheel } from '@/components/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'comoFuncionaPage' });

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

function ComoFuncionaPageContent() {
  const t = useTranslations('comoFuncionaPage');

  const embajadorSteps = [
    { step: 1, detail: t('campaignsDetail') },
    { step: 2, detail: t('contentDetail') },
    { step: 3, detail: t('communityDetail') },
    { step: 4, detail: t('commerceDetail') },
    { step: 5, detail: t('cosellersDetail') },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-gold/10 via-white to-brand-teal/5">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              {t('title')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-600">{t('heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Flywheel Section */}
      <Flywheel />

      {/* Deep Dive */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('deepDive')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {embajadorSteps.map((item, index) => {
              const colors = ['#00CED1', '#38A169', '#D69E2E', '#ED8936', '#D53F8C'];
              return (
                <Card key={index} variant="bordered" className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: colors[index] }}
                  >
                    {item.step}
                  </div>
                  <p className="text-gray-700 pt-2">{item.detail}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-brand-gold text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('heroTitle')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/embajadores">
              <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100">
                {t('forEmbajadores')}
              </Button>
            </Link>
            <Link href="/marcas">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {t('forMarcas')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default function ComoFuncionaPage() {
  return <ComoFuncionaPageContent />;
}
