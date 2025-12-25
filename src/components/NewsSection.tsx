import { ArrowRight, Calendar } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Lummus Technology and Advanced Ionics Break Ground on Green Hydrogen Pilot Plant',
      description: 'New facility to demonstrate next-generation electrolysis technology for sustainable hydrogen production.',
      date: 'December 2024',
      category: 'Partnership',
    },
    {
      title: 'Erika Taurel Named Chief Financial Officer of Lummus Technology',
      description: 'Experienced financial leader joins executive team to drive growth strategy.',
      date: 'November 2024',
      category: 'Leadership',
    },
    {
      title: 'Lummus and Innovent Renewables Partner to Accelerate Global Deployment of Tire Pyrolysis Technology',
      description: 'Strategic partnership to advance circular economy solutions for end-of-life tires.',
      date: 'October 2024',
      category: 'Sustainability',
    },
  ];

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C494E] font-['Sora']">
              Latest News
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg">
              Stay updated with the latest developments, partnerships, and innovations 
              from Lummus Technology.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0C494E] font-semibold hover:gap-4 transition-all"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#0C494E] to-[#005A64] flex items-center justify-center">
                <span className="text-white/50 text-sm uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0C494E] group-hover:text-[#005A64] transition-colors mb-3 font-['Sora'] line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-[#0C494E] font-medium text-sm group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
