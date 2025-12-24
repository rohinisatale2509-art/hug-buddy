export function Header() {
  const navItems = [
    { label: 'WHO WE ARE', href: '#about' },
    { label: 'WHAT WE DO', href: '#solutions' },
    { label: 'DRIVING CHANGE', href: '#change' },
    { label: 'NEWS', href: '#news' },
    { label: 'CAREERS', href: '#careers' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-lg tracking-wider">
          LUMMUS TECHNOLOGY
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/90 text-sm font-medium tracking-wide hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-white text-[#0C494E] text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
