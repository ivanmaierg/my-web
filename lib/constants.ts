export const SOCIAL_LINKS = {
  EMAIL: '/email',
  GITHUB: '/github', 
  X: '/x',
  LINKEDIN: '/linkedin',
} as const;

export const EXTERNAL_LINKS = {
  EMAIL: 'mailto:ivanmaiergallardo@gmail.com',
  GITHUB: 'https://github.com/ivanmaierg',
  X: 'https://x.com/imaierg',
  LINKEDIN: 'https://www.linkedin.com/in/ivanmaiergallardo/',
} as const;

export const NAVIGATION_ITEMS = [
  {
    href: SOCIAL_LINKS.EMAIL,
    label: 'email',
    ariaLabel: 'Send email to Ivan',
  },
  {
    href: SOCIAL_LINKS.GITHUB,
    label: 'github',
    ariaLabel: 'View Ivan\'s GitHub profile',
  },
  {
    href: SOCIAL_LINKS.X,
    label: 'x',
    ariaLabel: 'View Ivan\'s X profile',
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    label: 'linkedin',
    ariaLabel: 'View Ivan\'s LinkedIn profile',
  },
] as const;

export const STRUCTURED_DATA_LINKS = [
  'https://ivanmaierg.dev/github',
  'https://ivanmaierg.dev/linkedin', 
  'https://ivanmaierg.dev/x',
  'https://ivanmaierg.dev/email'
] as const;
