import { useState } from 'react'

export function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState<'technologies' | 'services'>('technologies')

  const content = {
    technologies: {
      title: 'Technologies and Products',
      description: 'With a best-in-class technology portfolio of proprietary equipment and technology, we help you meet the challenges of a changing industry. Our support covers petrochemical and polymer processes, heaters and heat transfer equipment, clean fuels, catalysts and modules, hydrogen gas, and natural gas processing—all to keep you strategically ahead of necessity.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80'
    },
    services: {
      title: 'Services',
      description: 'Lummus innovates with an eye on tomorrow, focused on outcomes. But we always keep market opportunities clearly in our field of vision. With agile process planning and development, consulting, life-cycle services, and digitalization capabilities, we perfectly complement and empower your business objectives while enabling a sustainable future.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80'
    }
  }

  const current = content[activeTab]

  return (
    <section id="whatwedo" className="relative py-24 lg:py-32 gradient-dark">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-yellow" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-foreground/60 text-sm font-medium tracking-wider uppercase mb-4 block">What We Do</span>
          <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            A global leader in value-driven energy solutions, we channel our energies into transforming our business and yours. Let's move the world forward, intelligently.
          </h2>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img 
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            {/* Tab Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('technologies')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'technologies'
                    ? 'bg-foreground text-primary'
                    : 'bg-foreground/10 text-foreground border border-foreground/30 hover:bg-foreground/20'
                }`}
              >
                Technologies
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'services'
                    ? 'bg-foreground text-primary'
                    : 'bg-foreground/10 text-foreground border border-foreground/30 hover:bg-foreground/20'
                }`}
              >
                Services
              </button>
            </div>

            <div>
              <h3 className="text-foreground text-2xl lg:text-3xl font-bold mb-6">
                {current.title}
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                {current.description}
              </p>
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
              >
                Learn more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
