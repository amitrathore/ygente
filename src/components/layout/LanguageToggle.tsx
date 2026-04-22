'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const locale = useLocale();
  // usePathname from next-intl routing already returns path without locale prefix
  const pathname = usePathname() || '/';

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
      <Link
        href={pathname}
        locale="es"
        className={cn(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors',
          locale === 'es'
            ? 'bg-white text-brand-teal shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        ES
      </Link>
      <Link
        href={pathname}
        locale="en"
        className={cn(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors',
          locale === 'en'
            ? 'bg-white text-brand-teal shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        )}
      >
        EN
      </Link>
    </div>
  );
}
