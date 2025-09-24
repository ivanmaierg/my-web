import { NextResponse } from 'next/server';
import { EXTERNAL_LINKS } from '@/lib/constants';

const redirects = {
  'x': EXTERNAL_LINKS.X,
  'twitter': EXTERNAL_LINKS.X, // Alternative for twitter
  'github': EXTERNAL_LINKS.GITHUB,
  'linkedin': EXTERNAL_LINKS.LINKEDIN,
  'email': EXTERNAL_LINKS.EMAIL,
  'mail': EXTERNAL_LINKS.EMAIL, // Alternative for email
} as const;

export function GET(
  req: Request,
  { params }: { params: { slug: string[] } }
) {
  const slug = params.slug;
  
  if (slug.length !== 1) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  const cleanSlug = slug[0].replace(/\/$/, '');
  
  if (cleanSlug && cleanSlug in redirects) {
    return NextResponse.redirect(redirects[cleanSlug as keyof typeof redirects]);
  }

  return NextResponse.redirect(new URL('/', req.url));
}

export const runtime = 'edge';

export const revalidate = 2592000; // Revalidate every 1 month (in seconds)
