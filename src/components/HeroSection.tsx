import { useRef, useEffect, useState } from 'react'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-r from-[#0C494E] to-[#005A64] overflow-hidden">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#C4A962]" />
      
      {/* Subtle floating shapes for depth */}
      <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl" />
      <div className="absolute bottom-1/4 right-[20%] w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-3xl" />

      {/* Main content container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-24 lg:pt-0">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-white font-bold leading-[0.95] tracking-tight">
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">Potential's</span>
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">Energy</span>
            </h1>
            
            <p className="text-white/85 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              At Lummus, we make the world work better, bringing sustainable solutions to modern energy challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0C494E] font-semibold rounded-full hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-black/10"
              >
                Explore Solutions
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/40 hover:border-white/70 hover:bg-white/5 transition-all duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Right Visual - Glass sphere with video */}
          <div className="flex-shrink-0 w-full max-w-[380px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[580px]">
            <div className="relative aspect-square">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl scale-110" />
              
              {/* Glass container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                
                {/* Loading state */}
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                  </div>
                )}
                
                {/* Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedData={() => setVideoLoaded(true)}
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero-animation.mp4" type="video/mp4" />
                </video>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C494E]/30 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
