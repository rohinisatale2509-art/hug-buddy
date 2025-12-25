import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C494E] font-['Sora']">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Have questions about our technologies or services? Our team is 
              ready to help you find the right solutions for your needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0C494E]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0C494E]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Headquarters</div>
                  <div className="text-[#0C494E] font-medium">Houston, Texas, USA</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0C494E]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0C494E]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-[#0C494E] font-medium">info@lfrummustechnology.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0C494E]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0C494E]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-[#0C494E] font-medium">+1 (713) 555-0100</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0C494E] text-white font-semibold rounded hover:bg-[#005A64] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Map Placeholder */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl bg-gray-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#0C494E]/5 to-[#005A64]/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#0C494E]/30 mx-auto mb-4" />
                  <span className="text-gray-400">Interactive Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
