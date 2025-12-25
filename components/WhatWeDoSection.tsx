'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const WhatWeDoSection = () => {
  const [activeTab, setActiveTab] = useState('technologies')

  const technologies = [
    {
      title: 'Olefins',
      description: 'Industry-leading ethylene and propylene production technologies.',
    },
    {
      title: 'Derivatives',
      description: 'Advanced solutions for polymer and chemical derivatives.',
    },
    {
      title: 'Refining',
      description: 'Cutting-edge refining processes for cleaner fuels.',
    },
    {
      title: 'Gas Processing',
      description: 'Efficient natural gas processing and treatment solutions.',
    },
  ]

  const services = [
    {
      title: 'Licensing',
      description: 'Technology licensing for petrochemical and refining processes.',
    },
    {
      title: 'Engineering',
      description: 'Comprehensive engineering services and project support.',
    },
    {
      title: 'Catalysts',
      description: 'High-performance catalysts for various applications.',
    },
    {
      title: 'Digital Solutions',
      description: 'Digital tools for process optimization and monitoring.',
    },
  ]

  const items = activeTab === 'technologies' ? technologies : services

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering innovative solutions across the energy value chain
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('technologies')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'technologies'
                ? 'bg-primary text-white'
                : 'bg-secondary text-primary hover:bg-secondary/80'
            }`}
          >
            Technologies
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'services'
                ? 'bg-primary text-white'
                : 'bg-secondary text-primary hover:bg-secondary/80'
            }`}
          >
            Services
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary rounded-2xl hover:bg-primary transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-primary group-hover:text-accent font-semibold">
                Learn More
                <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
