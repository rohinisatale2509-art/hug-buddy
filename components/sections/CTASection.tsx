'use client'

import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-32 px-8 text-white" style={{ background: 'linear-gradient(to bottom right, #0C494E, #005A64)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Let's transform tomorrow.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            For solutions, support, and inspiration, Lummus can show you the way. It starts with a conversation. So, let's have one.
          </p>
          <Link href="/contact">
            <button className="bg-white text-gray-900 px-10 py-4 font-medium hover:bg-gray-100 transition rounded">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

