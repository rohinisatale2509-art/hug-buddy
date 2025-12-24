export function NewsSection() {
  const newsItems = [
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      title: 'Lummus Technology and Advanced Ionics Break Ground on Green Hydrogen Pilot Plant',
      description: 'Next phase of partnership will accelerate the availability of cost-effective green hydrogen.',
      date: 'December 15, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
      title: 'Erika Taurel Named Chief Financial Officer of Lummus Technology',
      description: 'New CFO will help strengthen Lummus\' strategic growth, financial performance and long-term value creation',
      date: 'November 4, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
      title: 'Lummus and InnoVent Renewables Partner to Accelerate Global Deployment of Tire Pyrolysis Technology',
      description: 'Next phase of partnership will increase global availability of circular solution to reduce tire waste and environmental impact',
      date: 'October 30, 2025'
    }
  ]

  return (
    <section id="news" className="relative py-24 lg:py-32 gradient-primary">
      {/* Yellow accent bar */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-accent-yellow" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-foreground/60 text-sm font-medium tracking-wider uppercase mb-4 block">Making news</span>
          </div>
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
          >
            View all news
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="group cursor-pointer card-hover"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-6">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-foreground text-xl font-bold leading-tight group-hover:text-foreground/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                <span className="text-foreground/50 text-sm block">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
