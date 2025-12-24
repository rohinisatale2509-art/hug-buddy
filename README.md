# Lummus Technology Website - Next.js + TypeScript Edition

## 📖 Complete README

A production-ready, fully responsive corporate website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🎯 Project Overview

This is a modern, enterprise-grade website for Lummus Technology featuring:

- ✅ **Server-Side Rendering (SSR)** - Better SEO and performance
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Responsive Design** - Mobile, tablet, desktop optimized
- ✅ **API Routes** - Built-in backend without separate server
- ✅ **Component Architecture** - Reusable, maintainable code
- ✅ **Form Validation** - Zod + React Hook Form
- ✅ **Email Integration** - Resend for transactional emails
- ✅ **Analytics Ready** - Google Analytics integration
- ✅ **Performance Optimized** - Image optimization, code splitting
- ✅ **Accessibility** - WCAG 2.1 compliant

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Create Next.js project
npx create-next-app@latest lummus-nextjs --typescript --tailwind

# 2. Navigate to project
cd lummus-nextjs

# 3. Install additional dependencies
npm install lucide-react zod react-hook-form axios clsx tailwind-merge

# 4. Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser 🎉

---

## 📁 Project Structure

```
lummus-nextjs/
│
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout with fonts & metadata
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── solutions/
│   │   └── page.tsx                  # Solutions page
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form API
│   └── globals.css                   # Global styles
│
├── components/                       # React Components
│   ├── common/
│   │   ├── Header.tsx                # Navigation header
│   │   ├── Footer.tsx                # Footer with links
│   │   ├── Button.tsx                # Reusable button
│   │   └── Container.tsx             # Layout container
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero banner
│   │   ├── FeaturesGrid.tsx          # Features showcase
│   │   ├── StatsSection.tsx          # Statistics counters
│   │   ├── TeamSection.tsx           # Team members
│   │   ├── SolutionsGrid.tsx         # Solutions cards
│   │   ├── TimelineSection.tsx       # Company timeline
│   │   └── CTASection.tsx            # Call-to-action
│   │
│   └── ui/
│       ├── Card.tsx                  # Card component
│       ├── Form.tsx                  # Form elements
│       └── Modal.tsx                 # Modal dialog
│
├── hooks/                            # Custom React Hooks
│   ├── useIntersectionObserver.ts    # Scroll animations
│   ├── useForm.ts                    # Form handling
│   ├── useCounter.ts                 # Counter animations
│   └── useMediaQuery.ts              # Responsive queries
│
├── lib/                              # Utilities & Configuration
│   ├── types/
│   │   └── index.ts                  # TypeScript types
│   ├── constants.ts                  # App constants
│   ├── utils.ts                      # Helper functions
│   ├── api-client.ts                 # Fetch wrapper
│   ├── seo.ts                        # SEO utilities
│   └── rateLimit.ts                  # Rate limiting
│
├── public/                           # Static assets
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── ...
│   └── fonts/
│
├── styles/
│   ├── globals.css                   # Global styles
│   └── variables.css                 # CSS variables
│
├── .env.local                        # Environment variables (local)
├── .env.example                      # Environment template
├── next.config.js                    # Next.js config
├── tailwind.config.js                # Tailwind config
├── tsconfig.json                     # TypeScript config
├── jest.config.js                    # Testing config
└── package.json                      # Dependencies
```

---

## 🛠️ Setup & Configuration

### Environment Variables

Create `.env.local` file:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Email Service (Choose one)
RESEND_API_KEY=your_resend_key_here
SENDGRID_API_KEY=your_sendgrid_key_here

# Analytics
NEXT_PUBLIC_GA_ID=G_xxxxxxxxxx

# Database (Optional)
DATABASE_URL=postgresql://user:password@localhost/lummus

# API Keys (Optional)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### TypeScript Configuration

`tsconfig.json` includes:
- Strict mode enabled
- Path aliases (`@/*` → root)
- React 18+ support
- ES2020 target

### Tailwind CSS

Pre-configured with:
- Lummus color palette
- Custom animations (float, slide-up)
- Responsive utilities
- Dark mode support (ready)

---

## 🏗️ Building Pages

### Creating a New Page

1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Export default component

**Example: `app/blog/page.tsx`**

```typescript
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata(
  'Blog',
  'Latest articles and insights from Lummus Technology'
)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Your content */}
    </div>
  )
}
```

### Creating a Component

**Example: `components/sections/TestimonialsSection.tsx`**

```typescript
'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function TestimonialsSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

---

## 🎨 Styling Guide

### Using Tailwind Classes

```typescript
// Colors
className="bg-teal-500 text-white"

// Spacing
className="p-6 m-4 gap-8"

// Layout
className="flex items-center justify-between"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive
className="text-lg md:text-2xl lg:text-4xl"

// Interactive
className="hover:bg-teal-600 transition-all"
```

### CSS Variables

Defined in `:root`:

```css
--primary-dark: #0a1928
--accent-teal: #00c9a7
--accent-cyan: #00d4c4
```

Usage:

```css
.custom-element {
  color: var(--accent-teal);
}
```

---

## 📝 Form Handling

### Simple Form with Validation

```typescript
'use client'

import { useForm } from '@/hooks/useForm'
import Button from '@/components/common/Button'

export function ContactForm() {
  const { formData, handleChange, handleSubmit, loading, error, success } = useForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">Message sent!</div>}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full px-4 py-2 border rounded-lg"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
        className="w-full px-4 py-2 border rounded-lg"
      />

      <Button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </Button>
    </form>
  )
}
```

### Form with Zod Validation

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
})

type FormData = z.infer<typeof schema>

export function ValidatedForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
    </form>
  )
}
```

---

## 🎬 Animation Hooks

### Scroll-Triggered Animations

```typescript
'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function AnimatedSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Content fades in on scroll
    </div>
  )
}
```

### Counter Animation

```typescript
import { useCounter } from '@/hooks/useCounter'

export function StatCard() {
  const { ref, count } = useCounter(150)

  return (
    <div ref={ref}>
      <div className="text-5xl font-bold">{count}+</div>
      <p>Happy Clients</p>
    </div>
  )
}
```

---

## 🔌 API Integration

### Creating an API Route

**`app/api/contact/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Process data
    // Send email, save to database, etc.
    
    return NextResponse.json(
      { success: true, message: 'Success!' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Calling API from Client

```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})

const result = await response.json()
```

---

## 📧 Email Integration

### Setup Resend

```bash
npm install resend
```

### Send Email from API

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'noreply@lummus.com',
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<h1>Hello</h1>',
})
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY
```

### Deploy to Other Platforms

**Build the project:**
```bash
npm run build
npm start
```

**Docker:**
```bash
docker build -t lummus-nextjs .
docker run -p 3000:3000 lummus-nextjs
```

**Traditional Node Hosting:**
1. Build: `npm run build`
2. Upload `.next`, `public`, `node_modules`, `package.json`
3. Run: `npm start`

---

## 🧪 Testing

### Install Testing Libraries

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Example Test

```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/common/Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Click</Button>)
    expect(screen.getByText('Click')).toBeInTheDocument()
  })
})
```

### Run Tests

```bash
npm test
```

---

## 📊 Performance Optimization

### Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  quality={85}
  priority={false}
/>
```

### Code Splitting

Next.js automatically code-splits at the page level. For component-level splitting:

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
})
```

### Font Optimization

```typescript
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
})
```

---

## 🔍 SEO

### Metadata for Pages

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Lummus Technology',
  description: 'Learn about our company and mission',
  openGraph: {
    title: 'About Lummus',
    description: 'Learn about our company',
    images: ['/og-image.jpg'],
  },
}
```

### Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lummus.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://lummus.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

---

## 🔐 Security

### Environment Variables

Never commit `.env.local`. Use `.env.example` as template:

```env
# .env.example (safe to commit)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_key_here
```

### CORS

```typescript
const headers = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL,
  'Access-Control-Allow-Methods': 'POST, GET',
}
```

---

## 📚 Documentation Files

Refer to these guides for detailed information:

1. **nextjs-setup-guide.md** - Project setup & structure
2. **nextjs-complete-code.md** - Full component implementations
3. **nextjs-deployment-advanced.md** - Deployment, security, testing

---

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Quality
npm run lint             # Run ESLint
npm test                 # Run tests
npx tsc --noEmit        # Type check

# Utilities
npm run format           # Format code (if Prettier installed)
npm run analyze          # Analyze bundle size
```

---

## 🆘 Troubleshooting

### Issue: Port 3000 already in use

```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: TypeScript errors

```bash
npx tsc --noEmit    # Check for errors
npm run build       # Full build check
```

### Issue: Styles not loading

1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Check Tailwind config

### Issue: Images not showing

1. Check image path in `public/` folder
2. Verify `next.config.js` image configuration
3. Use Next.js Image component

---

## 📞 Support Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Community
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [React Discord](https://discord.gg/react)
- [Tailwind Discord](https://discord.gg/7NF8agS)

### Tools
- [VS Code](https://code.visualstudio.com) - Code editor
- [ESLint](https://eslint.org) - Code linting
- [Prettier](https://prettier.io) - Code formatting
- [Vercel](https://vercel.com) - Hosting platform

---

## 📋 Checklist Before Launch

- [ ] All pages created and working
- [ ] Navigation links functional
- [ ] Mobile responsive tested
- [ ] Forms tested and working
- [ ] API endpoints tested
- [ ] Environment variables set
- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Analytics configured
- [ ] Contact emails working
- [ ] Performance tested (Lighthouse)
- [ ] Security reviewed
- [ ] Domain/hosting configured
- [ ] SSL certificate installed
- [ ] Monitoring/error tracking setup

---

## 🚀 Next Steps

1. **Read the setup guide**: `nextjs-setup-guide.md`
2. **Review component code**: `nextjs-complete-code.md`
3. **Run `npm run dev`** and visit http://localhost:3000
4. **Customize content** for your company
5. **Add your images** to `public/images/`
6. **Test all features** on mobile and desktop
7. **Deploy** to Vercel or your hosting

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📈 Roadmap

Future features:
- [ ] Dark mode support
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Advanced search
- [ ] User accounts
- [ ] Comments system
- [ ] Newsletter signup
- [ ] Mobile app

---

## 🎉 Ready to Build?

You now have everything needed to create a professional, modern website!

**Start with:**
```bash
npx create-next-app@latest lummus-nextjs --typescript --tailwind
cd lummus-nextjs
npm run dev
```

**Questions?** Check the documentation files or refer to the links above.

**Happy coding!** 🚀

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Status:** Production Ready ✅
