'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import NewsSection from '@/components/NewsSection'
import CareersSection from '@/components/CareersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <NewsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
