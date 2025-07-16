# Project Structure

## Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page composition
├── components/            # Reusable React components
│   └── landing/          # Landing page specific components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions and configurations
```

## Component Architecture

### Landing Page Components
Located in `src/components/landing/`:
- **Header.tsx** - Navigation and branding
- **HeroSection.tsx** - Main value proposition and CTAs
- **FeaturesSection.tsx** - Product feature highlights
- **DemoSection.tsx** - Product demonstration
- **StatsSection.tsx** - Performance metrics
- **TestimonialsSection.tsx** - Customer testimonials
- **CTASection.tsx** - Call-to-action section
- **Footer.tsx** - Site footer and links

### Component Conventions
- Use TypeScript with proper interface definitions
- Export as default for main components
- Use 'use client' directive for client-side interactivity
- Implement responsive design with Tailwind breakpoints
- Include Framer Motion animations for enhanced UX
- Use Heroicons for consistent iconography

## File Naming
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useReturnsData.ts`)
- **Utilities**: camelCase (e.g., `formatCurrency.ts`)
- **Types**: PascalCase with descriptive names (e.g., `ReturnStatus.ts`)

## Import Patterns
- Use absolute imports with `@/` alias
- Group imports: React/Next.js first, then third-party, then local
- Import types separately when needed

## Future Structure (MVP Development)
```
src/
├── app/
│   ├── dashboard/         # Main application pages
│   ├── returns/          # Returns management pages
│   └── analytics/        # Analytics and reporting
├── components/
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── charts/           # Analytics visualizations
├── hooks/                # Custom hooks for data and state
├── lib/
│   ├── api/              # API client and services
│   ├── auth/             # Authentication utilities
│   └── utils/            # Helper functions
└── types/                # TypeScript type definitions
```

## Code Organization Principles
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Implement proper error boundaries
- Follow accessibility best practices