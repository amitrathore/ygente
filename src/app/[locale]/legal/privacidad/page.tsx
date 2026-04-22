import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge } from '@/components/ui';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legalPage' });

  return {
    title: `${t('privacyTitle')} | Ygente`,
    description: 'Privacy Policy for Ygente platform',
  };
}

function PrivacidadPageContent() {
  const t = useTranslations('legalPage');

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container size="md">
          <Badge variant="default" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('privacyTitle')}
          </h1>
          <p className="text-gray-500">
            {t('lastUpdated')}: January 2024
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <Container size="md">
          <Card variant="bordered" className="prose prose-gray max-w-none">
            <div className="p-2">
              <p className="text-gray-600 italic mb-8">
                {t('placeholder')}
              </p>

              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account,
                join our waitlist, or contact us for support. This may include your name, email address,
                and any other information you choose to provide.
              </p>

              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services,
                to communicate with you about products, services, and promotional offers, and to
                comply with legal obligations.
              </p>

              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to outside
                parties except to provide our services or as required by law.
              </p>

              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:legal@ygente.com" className="text-brand-teal hover:underline">
                  legal@ygente.com
                </a>
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}

export default function PrivacidadPage() {
  return <PrivacidadPageContent />;
}
