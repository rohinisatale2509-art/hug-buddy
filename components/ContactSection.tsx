'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    { icon: MapPin, label: 'Houston, Texas', detail: 'Global Headquarters' },
    { icon: Phone, label: '+1 (281) 555-0100', detail: 'Main Office' },
    { icon: Mail, label: 'info@lummustechnology.com', detail: 'General Inquiries' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Have questions about our technologies or services? 
              Our team is here to help you find the right solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{item.label}</div>
                    <div className="text-muted-foreground text-sm">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          {/* Right Content - Map placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-secondary rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
