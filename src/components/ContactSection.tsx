export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 gradient-primary text-center">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-yellow" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Let's transform tomorrow.
        </h2>
        <p className="text-foreground/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          For solutions, support, and inspiration, Lummus can show you the way. It starts with a conversation. So, let's have one.
        </p>
        <a
          href="#contact-form"
          className="inline-flex items-center gap-2 px-10 py-4 bg-foreground text-primary font-semibold rounded-full hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
        >
          Contact us
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
