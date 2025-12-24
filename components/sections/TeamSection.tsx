'use client'

export function TeamSection() {
  const team = [
    { name: 'John Smith', role: 'CEO', image: '' },
    { name: 'Sarah Johnson', role: 'CTO', image: '' },
    { name: 'Michael Chen', role: 'VP Engineering', image: '' },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#0C494E] flex items-center justify-center text-white text-2xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
