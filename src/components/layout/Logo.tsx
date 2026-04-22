'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <Image
            src="/images/logo.jpeg"
            alt="Ygente"
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
        </div>
        {showText && (
          <span className="text-2xl font-bold gradient-text">Ygente</span>
        )}
      </div>
    </Link>
  );
}
