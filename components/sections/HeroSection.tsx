'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="hero-section min-h-screen w-full hero-gradient flex items-center relative overflow-hidden">
      {/* Yellow accent bar on left */}
      <div className="accent-bar absolute left-0 top-0 h-full" />
      
      {/* Floating background shapes */}
      <div className="floating-shape absolute top-20 left-20 w-96 h-96 bg-white animate-float" />
      <div className="floating-shape absolute bottom-20 right-40 w-80 h-80 bg-white animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-white space-y-8 animate-fade-in-left">
            <div>
              <h1 className="hero-title text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="block">Potential's</span>
                <span className="block">Energy</span>
              </h1>
              <p className="hero-subtitle text-white/90 max-w-xl mt-8 text-lg lg:text-xl">
                At Lummus, we make the world work better, bringing sustainable solutions to modern energy challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="btn-hero-primary inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full"
              >
                Explore Solutions
              </Link>
              <Link
                href="#about"
                className="btn-hero-secondary inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="flex justify-end items-center w-full max-w-[420px] md:max-w-[520px] lg:max-w-[620px] flex-shrink-0 animate-fade-in-right">
            <div className="video-container glass-effect relative w-full aspect-square">
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                  <div className="video-loader w-12 h-12" />
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                className="w-full h-full object-cover rounded-3xl"
              >
                <source src="/videos/hero-animation.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
