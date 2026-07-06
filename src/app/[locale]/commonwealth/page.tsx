import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Button, Badge } from '@/components/ui';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'commonwealth' });

  return {
    title: `${t('title')} | Ygente`,
    description: t('lede'),
    openGraph: {
      title: `${t('title')} | Ygente`,
      description: t('lede'),
      images: [{ url: '/images/logo.jpeg', width: 1200, height: 630, alt: 'Ygente' }],
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/images/logo.jpeg'],
    },
  };
}

function CommonwealthContent() {
  const t = useTranslations('commonwealth');

  const sections = [
    { key: 'vision', href: '/commonwealth/vision', accent: 'bg-brand-teal/10 text-brand-teal' },
    { key: 'works', href: '/commonwealth/como-funciona', accent: 'bg-brand-green/10 text-brand-green' },
    { key: 'constitution', href: '/commonwealth/constitucion', accent: 'bg-brand-gold/10 text-brand-gold' },
    { key: 'governance', href: '/commonwealth/gobernanza', accent: 'bg-brand-orange/10 text-brand-orange' },
    { key: 'territories', href: '/commonwealth/territorios', accent: 'bg-brand-magenta/10 text-brand-magenta' },
    { key: 'steward', href: '/commonwealth/ser-steward', accent: 'bg-brand-teal/10 text-brand-teal' },
  ] as const;

  const principles = [1, 2, 3, 4, 5, 6].map((n) => ({
    title: t(`p${n}Title`),
    desc: t(`p${n}Desc`),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
        </div>
        <Container size="lg" className="relative text-center">
          <Badge variant="teal" className="mb-6 bg-white/10 text-brand-teal">
            {t('badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('title')}</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-brand-teal to-brand-gold bg-clip-text text-transparent">
            {t('tagline')}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('lede')}
          </p>
        </Container>
      </section>

      {/* Explore the six sections */}
      <section className="py-20 md:py-28 bg-white">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('exploreTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('exploreSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.key} href={section.href} className="group">
                <Card
                  variant="bordered"
                  className="h-full transition-all group-hover:shadow-xl group-hover:-translate-y-1"
                >
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium mb-4 ${section.accent}`}>
                    {t(`${section.key}Title`)}
                  </span>
                  <p className="text-gray-600 mb-4">{t(`${section.key}Desc`)}</p>
                  <span className="text-brand-teal font-semibold group-hover:underline">
                    →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Founding Principles */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container size="xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('principlesTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('principlesSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-3xl font-bold text-brand-teal/30 flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{principle.title}</h3>
                  <p className="text-gray-600">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/commonwealth/constitucion">
              <Button variant="outline" size="lg">
                {t('readConstitution')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Founding Circle CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brand-teal to-brand-green text-white">
        <Container size="md" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl opacity-90 mb-8">{t('ctaSubtitle')}</p>
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

export default function CommonwealthPage() {
  return <CommonwealthContent />;
}
