import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Container, Card, Badge } from '@/components/ui';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legalPage' });

  return {
    title: `${t('termsTitle')} | Ygente`,
    description: 'Terms of Service for Ygente platform',
  };
}

function TerminosPageContent() {
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
            {t('termsTitle')}
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

              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing or using the Ygente platform, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms,
                you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily access the materials on Ygente&apos;s platform for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-6">
                When you create an account with us, you must provide accurate, complete, and current information.
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <h2 className="text-xl font-semibold mb-4">4. Prohibited Activities</h2>
              <p className="text-gray-600 mb-6">
                You may not use the platform for any illegal purpose, to harass or harm others,
                to impersonate any person or entity, or to interfere with the proper functioning of the platform.
              </p>

              <h2 className="text-xl font-semibold mb-4">5. Commission Structure</h2>
              <p className="text-gray-600 mb-6">
                Embajadores earn commissions on qualifying sales made through their unique referral links.
                Commission rates and payment terms are subject to change and will be communicated through the platform.
              </p>

              <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Ygente shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use the platform.
              </p>

              <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
              <p className="text-gray-600">
                Questions about these Terms should be sent to{' '}
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

export default function TerminosPage() {
  return <TerminosPageContent />;
}
