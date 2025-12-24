'use client'

export function TimelineSection() {
  const milestones = [
    { year: '1907', title: 'Founded', description: 'Lummus Technology was established' },
    { year: '1950', title: 'Global Expansion', description: 'Expanded operations worldwide' },
    { year: '2000', title: 'Innovation Era', description: 'Pioneered sustainable technologies' },
    { year: '2024', title: 'Future Forward', description: 'Leading the energy transition' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[#0C494E]" />
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
              <div className={`w-5/12 p-6 bg-white rounded-xl shadow-md ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <span className="text-[#005A64] font-bold text-xl">{milestone.year}</span>
                <h3 className="text-lg font-semibold mt-1">{milestone.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{milestone.description}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#005A64] rounded-full border-4 border-white shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
