'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

type Locale = 'es' | 'en';
type TallyFormKey = 'foundingCircle' | 'contact' | 'waitlist';

const tallyFormIds: Record<TallyFormKey, Record<Locale, string>> = {
  foundingCircle: {
    es: 'lbZ75X',
    en: 'rjWdpX',
  },
  contact: {
    es: 'RGlJgQ',
    en: '44doq5',
  },
  waitlist: {
    es: 'obQ7pN',
    en: 'ja27p1',
  },
};

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function useTallyFormId(form: TallyFormKey) {
  const locale = useLocale();
  const normalizedLocale: Locale = locale === 'en' ? 'en' : 'es';

  return tallyFormIds[form][normalizedLocale];
}

export function TallyEmbed({
  form,
  title,
  minHeight = 560,
  className,
}: {
  form: TallyFormKey;
  title: string;
  minHeight?: number;
  className?: string;
}) {
  const formId = useTallyFormId(form);

  useEffect(() => {
    window.Tally?.loadEmbeds();
  }, [formId]);

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
      <iframe
        key={formId}
        data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height={minHeight}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
      />
    </div>
  );
}

export function TallyPopupButton({
  form,
  children,
  className,
}: {
  form: TallyFormKey;
  children: React.ReactNode;
  className?: string;
}) {
  const formId = useTallyFormId(form);

  useEffect(() => {
    window.Tally?.loadEmbeds();
  }, [formId]);

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
      <Button
        type="button"
        size="sm"
        className={className}
        data-tally-open={formId}
        data-tally-layout="modal"
        data-tally-width="640"
      >
        {children}
      </Button>
    </>
  );
}
