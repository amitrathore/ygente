'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  children: NavLink[];
}

type NavEntry = NavLink | NavGroup;

function isGroup(entry: NavEntry): entry is NavGroup {
  return 'children' in entry;
}

export function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavEntry[] = [
    { href: '/embajadores', label: t('embajadores') },
    { href: '/creadores', label: t('creadores') },
    { href: '/marcas', label: t('marcas') },
    {
      label: t('commonwealth'),
      children: [
        { href: '/commonwealth', label: t('commonwealth') },
        { href: '/commonwealth/vision', label: t('cwVision') },
        { href: '/commonwealth/como-funciona', label: t('cwWorks') },
        { href: '/commonwealth/constitucion', label: t('cwConstitution') },
        { href: '/commonwealth/gobernanza', label: t('cwGovernance') },
        { href: '/commonwealth/territorios', label: t('cwTerritories') },
        { href: '/commonwealth/ser-steward', label: t('cwSteward') },
        { href: '/circulo-fundador', label: t('circuloFundador') },
      ],
    },
    { href: '/precios', label: t('precios') },
    { href: '/nosotros', label: t('nosotros') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-1 text-gray-600 hover:text-brand-teal transition-colors font-medium">
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* pt-3 bridges the hover gap to the panel */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
                    <div className="w-64 rounded-xl bg-white shadow-xl border border-gray-100 p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 rounded-lg text-gray-600 hover:text-brand-teal hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-brand-teal transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/circulo-fundador">
              <Button size="sm">{t('joinWaitlist')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 overflow-hidden',
            mobileMenuOpen ? 'max-h-[36rem] pb-4 overflow-y-auto' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-1 pt-4">
            {navItems.map((item) =>
              isGroup(item) ? (
                <div key={item.label} className="py-2">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 py-1">
                    {item.label}
                  </span>
                  <div className="flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-gray-600 hover:text-brand-teal transition-colors font-medium py-2 pl-3"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-brand-teal transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100">
              <LanguageToggle />
              <Link href="/circulo-fundador" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm">{t('joinWaitlist')}</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
