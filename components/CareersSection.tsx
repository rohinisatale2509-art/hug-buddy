'use client'

import Link from 'next/link'
import { ArrowRight, Users, Globe, Award } from 'lucide-react'

const CareersSection = () => {
  const benefits = [
    { icon: Users, label: 'Collaborative Culture' },
    { icon: Globe, label: 'Global Opportunities' },
    { icon: Award, label: 'Career Growth' },
  ]

  return (
    <section className="py-24 gradient-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Be part of a team that&apos;s shaping the future of energy. 
              We&apos;re looking for talented individuals who share our passion 
              for innovation and sustainability.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <benefit.icon size={18} />
                  </div>
                  <span className="text-white/90">{benefit.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
            >
              Explore Careers
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">2,000+</div>
              <div className="text-white/80">Employees Worldwide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-accent mb-2">30+</div>
              <div className="text-white/80">Office Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center col-span-2">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-white/80">Open Positions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
