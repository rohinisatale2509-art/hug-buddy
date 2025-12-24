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
    <section className="min-h-screen w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 flex items-center px-8 lg:px-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-white space-y-8">
            <div>
              <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block">Potential's</span>
                <span className="block">Energy</span>
              </h1>
              <p className="text-white/90 max-w-xl mt-6 text-lg lg:text-xl leading-relaxed">
                At Lummus, we make the world work better, bringing sustainable solutions to modern energy challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Explore Solutions
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="flex justify-end items-center w-[420px] md:w-[520px] lg:w-[620px] flex-shrink-0">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
