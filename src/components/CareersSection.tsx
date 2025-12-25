import { ArrowRight, Users, Globe, Lightbulb } from 'lucide-react';

const CareersSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented teams across the globe.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Shape the future of sustainable energy.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Pioneer breakthrough technologies.',
    },
  ];

  return (
    <section id="careers" className="py-24 gradient-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-['Sora']">
              Join Our Team
            </h2>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Be part of a global team that's driving innovation in the energy 
              industry. We're looking for passionate individuals ready to make 
              an impact.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[hsl(var(--accent))] text-[#0C494E] font-semibold rounded hover:bg-yellow-400 transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10" />
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/70">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
