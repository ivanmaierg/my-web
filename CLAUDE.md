# CLAUDE.md

## Project Overview

Personal portfolio website for Ivan Maier G. Built with Next.js 14 App Router, deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with CSS variables for theming
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Utilities**: `cn` helper using clsx + tailwind-merge (`lib/utils.ts`)
- **Package Manager**: pnpm

## Project Structure

```
app/                    # Next.js App Router
  layout.tsx            # Root layout with theme provider
  page.tsx              # Main portfolio page
  api/og/               # OG image generation
  [...slug]/            # Dynamic redirect routes
components/             # React components
  about-section.tsx     # About me section
  activity-section.tsx  # GitHub activity (async server component)
  github-*.tsx          # GitHub-related components
  header.tsx            # Site header with navigation
  section.tsx           # Reusable section wrapper
  theme-toggle.tsx      # Dark/light mode toggle
lib/                    # Utilities and data
  constants.ts          # Social links, navigation items
  utils.ts              # cn() helper function
  types.ts              # TypeScript types
  github-api.ts         # GitHub API integration
```

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm lint       # Run ESLint
pnpm lint:fix   # Fix ESLint issues
pnpm analyze    # Bundle analyzer
```

## Custom Tailwind

- Custom breakpoint: `mobile:` at 650px
- Theme colors use CSS variables: `background`, `foreground`, `muted-foreground`, `border`
- Uses `tailwindcss-animate` plugin

## UI Constraints

When working on UI, apply these constraints:

### Stack
- Use Tailwind CSS defaults unless custom values already exist
- Use `cn` utility for class logic
- Use `tailwindcss-animate` for entrance animations

### Components
- Use existing Radix UI primitives first
- Add `aria-label` to icon-only buttons
- Never rebuild keyboard/focus behavior by hand

### Interaction
- Use `AlertDialog` for destructive actions
- Use `h-dvh` instead of `h-screen`
- Respect `safe-area-inset` for fixed elements
- Never block paste in inputs

### Animation
- Only add animation if explicitly requested
- Animate only `transform` and `opacity`
- Never exceed 200ms for interaction feedback
- Respect `prefers-reduced-motion`

### Typography
- Use `text-balance` for headings, `text-pretty` for body
- Use `tabular-nums` for data
- Never modify `letter-spacing` unless requested

### Layout
- Use fixed z-index scale (no arbitrary z-*)
- Use `size-*` for square elements

### Performance
- Never animate large blur/backdrop-filter surfaces
- Never use `useEffect` for render logic

### Design
- Never use gradients or glow effects unless requested
- One accent color per view
- Use existing theme tokens before introducing new ones
