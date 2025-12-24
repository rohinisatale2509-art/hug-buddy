'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Solution } from '@/lib/types'
import Link from 'next/link'

const solutions: Solution[] = [
  {
    id: '1',
    title: 'Clean Fuels',
    icon: '⚡',
    description: 'Advanced process technologies for converting crude oil and natural gas into clean, sustainable fuels.',
    features: ['Residue Upgrading', 'Gasoline & Diesel', 'Lubricants', 'Sustainable Aviation Fuel']
  },
  {
    id: '2',
    title: 'Renewables',
    icon: '♻️',
    description: 'Innovative solutions for renewable energy production and sustainable chemical manufacturing.',
    features: ['Biofuels', 'Green Hydrogen', 'Carbon Capture', 'Biomass Conversion']
  },
  {
    id: '3',
    title: 'Gas Processing',
    icon: '🔧',
    description: 'Cutting-edge technology for efficient gas processing and liquefaction solutions worldwide.',
    features: ['LNG Production', 'Gas Treatment', 'NGL Recovery', 'Syngas Production']
  },
  {
    id: '4',
    title: 'Petrochemicals',
    icon: '🏭',
    description: 'Process technologies for producing essential petrochemical compounds and polymers efficiently.',
    features: ['Olefins', 'Aromatics', 'Polymers', 'Specialty Chemicals']
  },
]

export function SolutionsGrid() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Technology Solutions</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive technology portfolio serving the full plant lifecycle
        </p>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionCard({ solution, delay = 0 }: { solution: Solution; delay?: number }) {
  return (
    <div 
      className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-5xl mb-4">{solution.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
      <p className="text-gray-600 mb-4">{solution.description}</p>
      <ul className="space-y-2 mb-6">
        {solution.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href={`/solutions#${solution.id}`}
        className="text-teal-500 font-semibold hover:text-teal-600 transition"
      >
        Learn More →
      </Link>
    </div>
  )
}

