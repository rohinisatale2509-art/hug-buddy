'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'WHO WE ARE' },
    { href: '/solutions', label: 'WHAT WE DO' },
    { href: '#', label: 'DRIVING CHANGE' },
    { href: '#', label: 'NEWS' },
    { href: '#', label: 'CAREERS' },
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-white font-bold text-lg sm:text-xl tracking-wide hover:opacity-80 transition-opacity uppercase"
          >
            LUMMUS TECHNOLOGY
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white uppercase tracking-wide text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-black/50 backdrop-blur-sm rounded-lg mt-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white uppercase tracking-wide text-sm font-medium py-2 hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors text-center"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
