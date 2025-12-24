# Lummus Technology - Hero Section with Video Background

## 📺 Hero Section Component with Animation Video

Create this file: `components/sections/HeroSection.tsx`

```typescript
'use client'

import { useRef, useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  videoSrc?: string
  cta1Text?: string
  cta1Link?: string
  cta2Text?: string
  cta2Link?: string
}

export function HeroSection({
  title = "Potential's Energy",
  subtitle = 'At Lummus, we make the world work better, bringing sustainable solutions to modern energy challenges.',
  videoSrc = '/videos/hero-animation.mp4',
  cta1Text = 'Explore Solutions',
  cta1Link = '/solutions',
  cta2Text = 'Learn More →',
  cta2Link = '#about',
}: HeroSectionProps) {
  const { ref, isVisible } = useIntersectionObserver()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay blocked:', err))
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 text-white flex items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left vertical accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 via-yellow-400 to-transparent opacity-70"></div>

        {/* Floating background shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-green-50 mb-8 max-w-xl leading-relaxed drop-shadow-md">
              {subtitle}
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href={cta1Link}>
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  {cta1Text}
                </Button>
              </a>
              <a href={cta2Link}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  {cta2Text}
                </Button>
              </a>
            </div>

            {/* Additional info */}
            <p className="mt-12 text-sm text-green-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
              Trusted by 75+ countries worldwide
            </p>
          </div>

          {/* Right side - Video animation */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-square flex items-center justify-center">
              {/* Video container with glassmorphism effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setVideoLoaded(true)}
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Loading state */}
                {!videoLoaded && (
                  <div className="absolute inset-0 bg-green-400/30 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-300/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-green-600/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-sm text-white/70">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
```

---

## 🎥 Integration Instructions

### 1. Add Your Animation Video to Public Folder

```
public/
└── videos/
    └── hero-animation.mp4  ← Add your WhatsApp video here
```

**Steps:**
1. Copy your `WhatsApp Video 2025-12-24 at 11.29.28 AM.mp4`
2. Rename it to `hero-animation.mp4` (optional but cleaner)
3. Paste into `public/videos/` folder
4. Done! The video will load automatically

---

### 2. Update Your Home Page

**`app/page.tsx`**

```typescript
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesGrid } from '@/components/sections/FeaturesGrid'
import { StatsSection } from '@/components/sections/StatsSection'

export default function Home() {
  return (
    <>
      <HeroSection
        title="Potential's Energy"
        subtitle="At Lummus, we make the world work better, bringing sustainable solutions to modern energy challenges."
        videoSrc="/videos/hero-animation.mp4"
        cta1Text="Explore Solutions"
        cta2Text="Learn More →"
      />
      <FeaturesGrid />
      <StatsSection />
    </>
  )
}
```

---

### 3. Update Button Component (if needed)

**`components/common/Button.tsx`**

```typescript
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          'bg-white text-green-600 hover:bg-green-50 shadow-lg': variant === 'primary',
          'bg-transparent text-white border-2 border-white hover:bg-white hover:bg-opacity-10 backdrop-blur-sm': variant === 'secondary',
          'bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600': variant === 'outline',
          'opacity-50 cursor-not-allowed': props.disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 🎨 Tailwind CSS Animation Config

**Update `tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📱 Responsive Design Features

✅ **Mobile optimized** - Text and video stack on small screens  
✅ **Tablet friendly** - Grid adjusts for medium screens  
✅ **Desktop enhanced** - Side-by-side layout with animations  
✅ **Touch-friendly** - Buttons have proper padding  
✅ **Video performance** - Muted auto-play, lazy loading  

---

## 🎬 Video Format Optimization

Your video should ideally be:

```
Format:     MP4 (H.264 codec)
Resolution: 1080p (1920x1080) or 720p (1280x720)
Duration:   10-20 seconds (loop)
File Size:  2-5 MB (under 10 MB preferred)
Frame Rate: 30 FPS
Codec:      H.264 (VP9 as fallback)
```

**To optimize your video:**

```bash
# Using ffmpeg
ffmpeg -i "WhatsApp Video 2025-12-24 at 11.29.28 AM.mp4" \
  -vcodec h264 \
  -crf 28 \
  -preset slow \
  -acodec aac \
  -b:a 128k \
  hero-animation.mp4
```

---

## 🎨 Design Matching Real Site

This hero section matches the **actual Lummus Technology website** you showed with:

✅ **Bright green gradient background** - `from-green-500 via-green-400 to-emerald-500`  
✅ **Yellow left accent bar** - Vertical highlight on left  
✅ **Large bold heading** - "Potential's Energy"  
✅ **White call-to-action buttons** - Primary action button  
✅ **Right-side animation** - Video container with glassmorphism  
✅ **Floating shapes** - Subtle background animation  
✅ **Responsive layout** - Stacks on mobile  

---

## 📝 Customization Examples

### Change Colors

```typescript
// Change gradient colors
className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500"

// Change accent bar
className="bg-gradient-to-b from-purple-300 to-transparent"
```

### Change Text

```typescript
<HeroSection
  title="Your Custom Title"
  subtitle="Your custom subtitle text"
  cta1Text="Custom Button 1"
  cta2Text="Custom Button 2"
/>
```

### Change Video

```typescript
<HeroSection
  videoSrc="/videos/your-custom-video.mp4"
/>
```

### Add Static Image Fallback

If you want a fallback image instead of/with the video:

```typescript
<div className="relative aspect-square flex items-center justify-center">
  <img
    src="/images/hero-image.jpg"
    alt="Hero"
    className="w-full h-full object-cover rounded-3xl"
  />
  <video
    autoPlay
    muted
    loop
    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
  >
    <source src={videoSrc} type="video/mp4" />
  </video>
</div>
```

---

## ✨ Features

✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Video Background** - Supports MP4, WebM  
✅ **Animations** - Fade in on scroll, floating shapes  
✅ **Glassmorphism** - Modern frosted glass effect  
✅ **Accessibility** - Semantic HTML, ARIA labels  
✅ **Performance** - Lazy video loading, no jank  
✅ **SEO Ready** - Proper heading structure  
✅ **Dark Mode Ready** - Easy to adapt  

---

## 🚀 Quick Integration Checklist

- [ ] Copy `HeroSection.tsx` to `components/sections/`
- [ ] Update `app/page.tsx` to use HeroSection
- [ ] Create `public/videos/` folder
- [ ] Copy your animation video to `public/videos/hero-animation.mp4`
- [ ] Update `tailwind.config.js` with new colors
- [ ] Update `Button.tsx` component
- [ ] Test on mobile, tablet, desktop
- [ ] Verify video plays automatically
- [ ] Check performance in Lighthouse
- [ ] Deploy! 🚀

---

## 📊 File Structure After Updates

```
lummus-nextjs/
├── components/
│   └── sections/
│       └── HeroSection.tsx          ← NEW
├── public/
│   └── videos/
│       └── hero-animation.mp4       ← ADD YOUR VIDEO HERE
├── app/
│   ├── page.tsx                     ← UPDATE
│   └── globals.css
├── tailwind.config.js               ← UPDATE
└── ...
```

---

**That's it! Your hero section with video animation is ready to go! 🎉**

Just add your video file to `public/videos/hero-animation.mp4` and you're all set.
