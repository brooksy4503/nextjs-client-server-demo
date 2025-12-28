# AI Rules for Next.js Application

## Tech Stack

- **Next.js 15.0.2** - React framework with App Router for server-side rendering and routing
- **React 19.0.0-rc** - Latest React version with new features and improvements
- **TypeScript** - Type-safe JavaScript for better code quality and developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling and responsive design
- **Server Actions** - Next.js feature for server-side mutations marked with 'use server'
- **Client Components** - Interactive components marked with 'use client' for browser-side functionality
- **PostCSS** - CSS processing with Tailwind CSS plugin
- **ESLint** - Code linting with Next.js configuration

## Library Usage Rules

### Styling
- **ALWAYS** use Tailwind CSS for all styling needs
- Utilize Tailwind utility classes for layout, spacing, colors, and responsive design
- Do not write custom CSS files unless absolutely necessary
- Use Tailwind's responsive prefixes (md:, lg:) for mobile-first responsive design

### Icons
- Use **lucide-react** for all icons in the application
- Import icons from the lucide-react package

### UI Components
- Use **shadcn/ui** components when available (Card, Button, Input, etc.)
- These components are pre-built and should not be edited directly
- Create new components in `src/app/components/` if you need to customize existing shadcn/ui components

### File Structure
- Keep all source code in the `src/` directory
- Place page components in `src/app/` following Next.js App Router conventions
- Place reusable components in `src/app/components/`
- Place server actions in `src/app/actions.ts`
- The main page is `src/app/page.tsx`

### Component Guidelines
- Mark components with `'use client'` only when they need interactivity (state, event handlers, browser APIs)
- Use Server Actions (marked with `'use server'`) for data mutations and server-side logic
- Keep components small and focused (aim for 100 lines or less)
- Create a new file for every new component or hook

### Routing
- Use Next.js App Router for all routing (file-based routing in `src/app/`)
- Do not use React Router - Next.js handles routing natively

### Error Handling
- Do not catch errors with try/catch blocks unless specifically requested
- Let errors bubble up so they can be properly addressed

### Code Quality
- Keep code simple and elegant - avoid over-engineering
- Make minimum changes needed to fulfill requests
- Ensure all code is complete and functional - no placeholders or TODOs