import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root
    '/',
    // Match locale paths
    '/(es|en)',
    '/(es|en)/:path*',
    // Match non-internal paths (skip _next, api, static files)
    '/((?!_next|api|.*\\..*).*)'
  ]
};
