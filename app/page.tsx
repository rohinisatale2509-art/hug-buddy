import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <CTASection />
    </>
  )
}