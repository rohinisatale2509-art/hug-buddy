import heroBubbles from '../assets/hero-bubbles.png'

export function HeroSection() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12" stroke="currentColor" fill="none" strokeWidth="1.5">
          <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" />
          <path d="M8 20l24 12 24-12" />
          <path d="M32 32v24" />
        </svg>
      ),
      label: 'Technologies'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12" stroke="currentColor" fill="none" strokeWidth="1.5">
          <circle cx="32" cy="20" r="8" />
          <circle cx="20" cy="44" r="8" />
          <circle cx="44" cy="44" r="8" />
          <path d="M32 28v8M24 40l4-4M40 40l-4-4" />
        </svg>
      ),
      label: 'Services'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" className="w-12 h-12" stroke="currentColor" fill="none" strokeWidth="1.5">
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="8" />
          <path d="M32 12v8M32 44v8M12 32h8M44 32h8" />
        </svg>
      ),
      label: 'Innovations'
    }
  ]

  return (
    <section className="relative min-h-screen w-full gradient-primary overflow-hidden">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-yellow z-20" />
      
      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-32 lg:pt-0">
          
          {/* Left Content */}
          <div className="flex-1 space-y-12">
            <h1 className="text-foreground font-bold leading-[0.95] tracking-tight">
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">Potential's</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">Energy</span>
            </h1>
            
            {/* Feature Icons */}
            <div className="flex gap-6 pt-8">
              {features.map((feature) => (
                <div key={feature.label} className="text-center">
                  <div className="icon-circle text-foreground mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <span className="text-foreground/90 text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex flex-col items-center lg:items-end gap-8 py-12 lg:py-0">
            {/* Glass Bubbles Image */}
            <div className="relative w-full max-w-[500px]">
              <img 
                src={heroBubbles} 
                alt="Abstract 3D glass bubbles representing innovation and energy"
                className="w-full h-auto"
              />
            </div>
            
            {/* Description Text */}
            <div className="max-w-md text-center lg:text-left lg:absolute lg:bottom-32 lg:right-0">
              <p className="text-foreground/85 text-lg leading-relaxed mb-6">
                At Lummus, we make the world work better, bringing together the best minds in science, technology, and business. Together, we give potential the energy to transform possibility into progress.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground/10 text-foreground font-medium rounded-full border border-foreground/30 hover:bg-foreground/20 hover:border-foreground/50 transition-all duration-300"
              >
                Who we are
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
