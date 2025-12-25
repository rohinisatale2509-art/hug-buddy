'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      date: 'December 2024',
      title: 'Lummus Technology Announces Strategic Partnership',
      description: 'Expanding our global footprint with innovative solutions for sustainable energy.',
      image: '/images/news-1.jpg',
    },
    {
      date: 'November 2024',
      title: 'New Olefins Technology Breakthrough',
      description: 'Revolutionary advancement in ethylene production efficiency.',
      image: '/images/news-2.jpg',
    },
    {
      date: 'October 2024',
      title: 'Sustainability Report 2024 Released',
      description: 'Highlighting our commitment to environmental responsibility.',
      image: '/images/news-3.jpg',
    },
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Latest News
            </h2>
            <p className="text-muted-foreground text-lg">
              Stay updated with our latest developments
            </p>
          </div>
          <Link
            href="/news"
            className="mt-4 md:mt-0 flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All News
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Link
                  href="#"
                  className="flex items-center text-primary font-semibold hover:text-accent transition-colors"
                >
                  Read More
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
