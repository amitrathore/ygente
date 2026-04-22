import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'teal' | 'green' | 'gold' | 'orange' | 'magenta';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
          {
            'bg-gray-100 text-gray-800': variant === 'default',
            'bg-brand-teal/10 text-brand-teal': variant === 'teal',
            'bg-brand-green/10 text-brand-green': variant === 'green',
            'bg-brand-gold/10 text-brand-gold': variant === 'gold',
            'bg-brand-orange/10 text-brand-orange': variant === 'orange',
            'bg-brand-magenta/10 text-brand-magenta': variant === 'magenta',
          },
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
