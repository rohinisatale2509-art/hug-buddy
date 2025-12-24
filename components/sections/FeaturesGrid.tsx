'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { FeatureCard } from '@/components/ui/Card'

const features = [
  {
    id: '1',
    icon: '⚡',
    title: 'Clean Fuels',
    description: 'Advanced process technologies for converting crude oil and natural gas into clean, sustainable fuels.'
  },
  {
    id: '2',
    icon: '♻️',
    title: 'Renewables',
    description: 'Innovative solutions for renewable energy production and sustainable chemical manufacturing.'
  },
  {
    id: '3',
    icon: '🔧',
    title: 'Gas Processing',
    description: 'Cutting-edge technology for efficient gas processing and liquefaction solutions worldwide.'
  },
  {
    id: '4',
    icon: '🏭',
    title: 'Petrochemicals',
    description: 'Process technologies for producing essential petrochemical compounds and polymers efficiently.'
  },
  {
    id: '5',
    icon: '📊',
    title: 'Digitalization',
    description: 'AI-powered solutions and digital platforms for optimizing operations and predictive maintenance.'
  },
  {
    id: '6',
    icon: '🌱',
    title: 'Circular Economy',
    description: 'Waste-to-chemicals and plastic recycling technologies for a more sustainable future.'
  },
]

export function FeaturesGrid() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Solutions</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive technology portfolio serving the full plant lifecycle
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              feature={feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}