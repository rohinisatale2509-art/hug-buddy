export function CareersSection() {
  return (
    <section id="careers" className="relative py-24 lg:py-32 gradient-dark">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-yellow" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="text-foreground/60 text-sm font-medium tracking-wider uppercase mb-4 block">Careers</span>
            <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Unleash your own potential.
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8 max-w-xl">
              A great company takes great people. Sound like someone you know? To attract and keep the best talent, Lummus offers competitive salaries and benefits packages, career growth opportunities, and a collaborative environment where your ideas matter. It's time to make a real impact on your future. And to the world in general.
            </p>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-primary font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300"
            >
              Find open positions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration at Lummus Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
