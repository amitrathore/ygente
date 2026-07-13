import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import { Container, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';
import { getCompanyPrinciples } from '@/content/constitution';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'constitutionPage' });

  return {
    title: `${t('title')} | Ygente`,
    description: t('intro'),
    openGraph: {
      title: `${t('heroTitle')} | Ygente`,
      description: t('intro'),
      images: [{ url: '/images/logo.jpeg', width: 1200, height: 630, alt: 'Ygente' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/logo.jpeg'],
    },
  };
}

function PrinciplesContent() {
  const t = useTranslations('constitutionPage');
  const locale = useLocale();
  const sections = getCompanyPrinciples(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
        </div>
        <Container size="md" className="relative text-center">
          <Badge variant="gold" className="mb-6 bg-white/10 text-brand-gold">
            {t('badge')}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{t('heroTitle')}</h1>
          <p className="text-2xl md:text-3xl font-semibold text-brand-gold mb-4">
            {t('heroSubtitle')}
          </p>
          <p className="text-lg text-gray-300 italic">“{t('heroEpigraph')}”</p>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <Container size="md">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            {t('intro')}
          </p>
        </Container>
      </section>

      {/* Company principles */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="md">
          <div className="space-y-14">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-24">
                {section.label && (
                  <span className="block text-sm font-semibold uppercase tracking-wider text-brand-teal mb-2">
                    {section.label}
                  </span>
                )}
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-gold to-brand-orange text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('ctaTitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ygente/socio-regional">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100">
                {t('ctaButton')}
              </Button>
            </Link>
            <Link href="/circulo-fundador">
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

export default function PrinciplesPage() {
  return <PrinciplesContent />;
}
