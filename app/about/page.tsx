'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { TeamSection } from '@/components/sections/TeamSection'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function AboutPage() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <>
      <HeroSection 
        title="About Lummus Technology"
        subtitle="Over a century of innovation transforming the process industries"
      />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4">
            Founded in 1907, Lummus Technology has been at the forefront of process technology innovation for over 115 years. What began as a vision to improve industrial processes has evolved into a global enterprise serving customers across 75+ countries.
          </p>
        </div>
      </section>

      <TimelineSection />
      <TeamSection />
    </>
  )
}