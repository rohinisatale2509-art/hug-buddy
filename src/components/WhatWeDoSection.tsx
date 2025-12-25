import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WhatWeDoSection = () => {
  const [activeTab, setActiveTab] = useState<'technologies' | 'services'>('technologies');

  const technologies = [
    {
      title: 'Ethylene',
      description: 'World-leading ethylene technology with proven performance and reliability.',
    },
    {
      title: 'Propylene',
      description: 'Advanced propylene production solutions for maximum efficiency.',
    },
    {
      title: 'Aromatics',
      description: 'Comprehensive aromatics technology portfolio for petrochemical production.',
    },
    {
      title: 'Clean Fuels',
      description: 'Sustainable fuel solutions for a cleaner energy future.',
    },
  ];

  const services = [
    {
      title: 'Engineering',
      description: 'World-class engineering services for complex projects.',
    },
    {
      title: 'Consulting',
      description: 'Expert consulting to optimize your operations.',
    },
    {
      title: 'Training',
      description: 'Comprehensive training programs for your teams.',
    },
    {
      title: 'Support',
      description: 'Ongoing technical support and maintenance.',
    },
  ];

  const items = activeTab === 'technologies' ? technologies : services;

  return (
    <section id="technologies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C494E] font-['Sora']">
              What We Do
            </h2>
            <p className="text-gray-600 mt-4 max-w-lg">
              Delivering innovative solutions across the energy value chain with 
              industry-leading technologies and services.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('technologies')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'technologies'
                  ? 'bg-[#0C494E] text-white'
                  : 'text-gray-600 hover:text-[#0C494E]'
              }`}
            >
              Technologies
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === 'services'
                  ? 'bg-[#0C494E] text-white'
                  : 'text-gray-600 hover:text-[#0C494E]'
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-xl hover:bg-[#0C494E] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-[#0C494E] group-hover:text-white mb-4 font-['Sora']">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 mb-6">
                {item.description}
              </p>
              <ArrowRight className="w-5 h-5 text-[#0C494E] group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0C494E] font-semibold hover:gap-4 transition-all"
          >
            View All {activeTab === 'technologies' ? 'Technologies' : 'Services'}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
