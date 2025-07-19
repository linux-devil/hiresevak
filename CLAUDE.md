# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**mySevak** is a comprehensive tax and compliance management platform for Non-Resident Indians (NRIs). The platform enables NRIs, including High Net Worth Individuals, to calculate and file taxes, maintain regulatory compliance, and access expert advisory services for taxation, estate and succession planning, property management, and legal resolution.

**Technology Stack:**
- Next.js 14.2.16 with App Router architecture
- TypeScript with strict mode
- Tailwind CSS with custom theming
- shadcn/ui component library built on Radix UI
- Framer Motion for animations
- React Hook Form with Zod validation

## Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint

# Package management (both npm and pnpm supported)
npm install          # Install dependencies
pnpm install         # Alternative package manager
```

## Architecture & Structure

### Component Architecture
- **Design System**: Uses shadcn/ui components (`components/ui/`) - 40+ pre-built accessible components
- **Custom Components**: Business logic components in `components/` (header, footer, scroll-animation, theme-provider)
- **Client Components**: Most interactive components use `"use client"` directive
- **Composition Pattern**: Components built using Radix UI primitives with Slot pattern

### Styling Strategy
- **Utility-First**: Tailwind CSS with extensive customization via CSS variables
- **Theme System**: HSL color system defined in `app/globals.css` supporting dark mode
- **Component Variants**: Uses `class-variance-authority` for consistent component styling
- **Custom Animations**: Framer Motion components in `components/scroll-animation.tsx`

### Key Files & Patterns
- `app/page.tsx`: Homepage with marketing sections showcasing wealth migration services
- `components/ui/button.tsx`: Example of shadcn/ui component pattern with variants
- `lib/utils.ts`: Utility functions including `cn()` for className merging
- `tailwind.config.ts`: Extended theme with CSS variables and custom animations
- `app/layout.tsx`: Root layout with theme provider and global styling

### Animation System
- **Performance Optimized**: Uses `useInView` hooks for scroll-triggered animations
- **Consistent Patterns**: `FadeInUp`, `SlideInLeft` components with staggered delays
- **Framer Motion**: Complex animations like rotating elements and floating effects

### Form Handling
- **React Hook Form**: For complex form state management
- **Zod Validation**: Schema validation (imported but not extensively used yet)
- **Accessible Forms**: Radix UI form primitives ensure WCAG compliance

## Development Notes

### Build Configuration
- ESLint and TypeScript errors are ignored during builds (development flexibility)
- Images are unoptimized (likely for development phase)
- Path aliases configured: `@/*` maps to root directory

### Code Conventions
- **Import Pattern**: Use `@/` prefix for internal imports
- **TypeScript**: Strict mode enabled, interface-based component props
- **Component Files**: One component per file with descriptive names
- **Client vs Server**: Explicit `"use client"` for interactive components

### Business Context
The application serves NRIs (Non-Resident Indians) requiring tax and compliance management services for:
- Tax calculation and filing for Indian and international jurisdictions
- Regulatory compliance monitoring and maintenance
- Advisory services for taxation, estate and succession planning
- Property management and legal resolution support
- Expert consultation access for complex financial matters

### Performance Considerations
- Framer Motion animations use `useInView` for performance
- Images should be optimized for production builds
- Consider implementing proper loading states for data fetching