'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'History', href: '/history' },
      { name: 'Locations', href: '/locations' },
    ],
    solutions: [
      { name: 'Technologies', href: '/technologies' },
      { name: 'Services', href: '/services' },
      { name: 'Catalysts', href: '/catalysts' },
      { name: 'Digital', href: '/digital' },
    ],
    resources: [
      { name: 'News', href: '/news' },
      { name: 'Events', href: '/events' },
      { name: 'Publications', href: '/publications' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ]

  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-wider">
                LUMMUS TECHNOLOGY
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              A leading licensor of proprietary petrochemicals, refining, 
              and gas processing technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Lummus Technology. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-white/50 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
