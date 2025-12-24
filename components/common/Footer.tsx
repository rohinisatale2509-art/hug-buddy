import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="text-white py-16 px-4" style={{ background: 'linear-gradient(to right, #0C494E, #005A64)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Lummus</h4>
            <p className="text-gray-300 text-sm">
              Global leader in developing technology solutions for sustainable energy and industrial transformation.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Clean Fuels</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Renewables</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Gas Processing</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Petrochemicals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition text-blue-300 underline">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">News</Link></li>
              <li><Link href="#" className="hover:text-white transition text-blue-300 underline">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@lummus.com" className="hover:text-white transition text-blue-300 underline">info@lummus.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+17137401300" className="hover:text-white transition text-blue-300 underline">+1 (713) 740-1300</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>5825 N Sam Houston Pkwy W<br />Houston, TX 77086</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">&copy;2024 Lummus Technology. All rights reserved.</p>
          <div className="flex gap-2">
            <a href="#" className="text-blue-300 underline hover:text-white transition text-sm">in</a>
            <a href="#" className="text-blue-300 underline hover:text-white transition text-sm">x</a>
            <a href="#" className="text-blue-300 underline hover:text-white transition text-sm">f</a>
          </div>
        </div>
      </div>
    </footer>
  )
}