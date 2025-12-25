'use client'

import Image from 'next/image'
import { Leaf, Droplets, Factory, Lightbulb } from 'lucide-react'

const HeroSection = () => {
  const features = [
    { icon: Leaf, label: 'Sustainable' },
    { icon: Droplets, label: 'Clean Energy' },
    { icon: Factory, label: 'Innovation' },
    { icon: Lightbulb, label: 'Technology' },
  ]

  return (
    <section className="relative min-h-screen gradient-primary overflow-hidden">
      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="text-white">
            {/* Feature Icons */}
            <div className="flex gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-white/70"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <feature.icon size={20} />
                  </div>
                  <span className="text-xs">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Driving
              <br />
              <span className="text-accent">Change</span>
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg">
              A leading licensor of proprietary petrochemicals, refining, gasification, 
              and gas processing technologies, as well as a supplier of proprietary 
              catalysts and related engineering services.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-bold text-accent">3,500+</div>
                <div className="text-white/70 text-sm">Licensed Units</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">60+</div>
                <div className="text-white/70 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">100+</div>
                <div className="text-white/70 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Placeholder for abstract bubbles/spheres image */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-sm border border-white/20"
                      style={{
                        transform: `translateY(${i % 2 === 0 ? '-10px' : '10px'})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
