'use client'

import Link from 'next/link'

const services = [
  {
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" className="w-32 h-32">
        {/* U shape - thick curved line */}
        <path d="M15 20 Q15 50 15 75 Q15 90 50 90 Q85 90 85 75 Q85 50 85 20" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Exclamation mark */}
        <circle cx="50" cy="25" r="8" fill="currentColor"/>
        <line x1="50" y1="40" x2="50" y2="70" strokeWidth="10" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Technologies',
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" className="w-32 h-32">
        {/* Grid of rounded squares */}
        <rect x="10" y="10" width="35" height="35" rx="10" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="55" y="10" width="35" height="35" rx="10" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="55" width="35" height="35" rx="10" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="55" y="55" width="35" height="35" rx="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Services',
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" className="w-32 h-32">
        {/* Globe with curved lines */}
        <circle cx="50" cy="50" r="38" strokeLinecap="round"/>
        <path d="M12 50 Q30 30 50 50 Q70 30 88 50" strokeLinecap="round"/>
        <path d="M12 50 Q30 70 50 50 Q70 70 88 50" strokeLinecap="round"/>
        <line x1="50" y1="12" x2="50" y2="88" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Innovations',
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-8 text-white" style={{ background: 'linear-gradient(to bottom right, #0C494E, #005A64)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center mb-8 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Text block and button */}
        <div className="max-w-2xl ml-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Innovations</h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            At Lummus, we make the world work better, bringing together the best minds in science, technology, and business. Together, we give potential the energy to transform possibility into progress.
          </p>
          <Link href="/about">
            <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition rounded">
              Who we are
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

