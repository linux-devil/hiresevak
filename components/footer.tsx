import Link from "next/link"
import { FadeInUp } from "./scroll-animation"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-xl font-semibold">Sevak</span>
              </div>
              <p className="text-gray-400">
                Comprehensive remote concierge services for Non-Resident Indians, bridging geographical 
                distance with professional expertise and digital solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  Property Management
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  Tax & Estate Planning
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  Document Services
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">
                  Investment Management
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
                <Link href="/community" className="block text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Resources</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                  NRI Guides
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Service Calculators
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Digital Tools
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Expert Webinars
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sevak. All rights reserved.</p>
          </div>
        </FadeInUp>
      </div>
    </footer>
  )
}
