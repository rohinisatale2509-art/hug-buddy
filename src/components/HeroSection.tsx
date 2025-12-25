import { Flame, Droplets, Wind, Atom } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-primary overflow-hidden">
      {/* Yellow Accent Bar */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[hsl(var(--accent))]" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-40 right-40 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Feature Icons */}
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Atom className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-['Sora']">
              Potential's
              <br />
              <span className="text-white/90">Energy</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Innovating for a sustainable future with cutting-edge technology solutions 
              that transform the global energy landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#technologies"
                className="px-8 py-4 bg-white text-[#0C494E] font-semibold rounded hover:bg-white/90 transition-colors"
              >
                Explore Solutions
              </a>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Abstract glass bubbles */}
              <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-teal-300/30 to-transparent backdrop-blur-sm border border-white/20" />
              <div className="absolute top-32 right-32 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-300/20 to-transparent backdrop-blur-sm border border-white/10" />
              <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-emerald-300/25 to-transparent backdrop-blur-sm border border-white/15" />
              <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-teal-200/20 to-transparent backdrop-blur-sm border border-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
