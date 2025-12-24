'use client'

import { useCounter } from '@/hooks/useCounter'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const stats = [
  { label: 'Licensable Technologies', target: 140 },
  { label: 'Countries Served', target: 75 },
  { label: 'Patents & Applications', target: 3400 },
  { label: 'R&D Specialists', target: 650 },
]

export function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Impact</h2>
        <p className="text-gray-600 text-center mb-12">Proven track record serving global industries</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <StatCard key={stat.label} label={stat.label} target={stat.target} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, target, isVisible }: { label: string; target: number; isVisible: boolean }) {
  const { ref, count } = useCounter(target)

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">
        {isVisible ? count : 0}+
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  )
}