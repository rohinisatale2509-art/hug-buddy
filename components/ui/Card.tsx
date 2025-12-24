'use client'

import { Feature } from '@/lib/types'

interface FeatureCardProps {
  feature: Feature
  delay?: number
}

export function FeatureCard({ feature, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-lg border-l-4 border-teal-500 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}

