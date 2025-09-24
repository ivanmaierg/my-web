import { redirect } from 'next/navigation';
import { EXTERNAL_LINKS } from '@/lib/constants';

const redirects = {
  'x': EXTERNAL_LINKS.X,
  'twitter': EXTERNAL_LINKS.X, // Alternative for twitter
  'github': EXTERNAL_LINKS.GITHUB,
  'linkedin': EXTERNAL_LINKS.LINKEDIN,
  'email': EXTERNAL_LINKS.EMAIL,
  'mail': EXTERNAL_LINKS.EMAIL, // Alternative for email
} as const;

export function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.pathname.split('/').pop(); // Get the last segment
  
  if (slug && slug in redirects) {
    redirect(redirects[slug as keyof typeof redirects]);
  }

  redirect('/');
}

export const runtime = 'edge'; // Use edge runtime for faster execution
