# Technology Stack

## Core Framework
- **Next.js 14** with App Router for SSR and routing
- **TypeScript** for type safety and developer experience
- **React 18** with modern hooks and concurrent features

## Styling & UI
- **Tailwind CSS** for utility-first styling
- **Headless UI** for accessible component primitives
- **Heroicons** for consistent iconography
- **Framer Motion** for animations and transitions

## State Management
- **React Query (TanStack Query)** for server state and caching
- **Zustand** for lightweight client-side state
- **React Hook Form** for form state and validation

## Development Tools
- **ESLint** with Next.js config for code quality
- **TypeScript** strict mode enabled
- **Autoprefixer** and **PostCSS** for CSS processing

## Build System
Next.js handles the build system with automatic optimizations including:
- Code splitting and tree shaking
- Image optimization
- Bundle analysis
- Static generation where applicable

## Common Commands

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint checks
```

## Path Aliases
- `@/*` maps to `./src/*` for clean imports
- Use absolute imports from src: `@/components/...`, `@/lib/...`

## Performance Considerations
- Virtual scrolling for large datasets (1000+ items)
- Image lazy loading and optimization
- WebSocket connections for real-time updates
- Component-level error boundaries
- Graceful degradation for offline scenarios