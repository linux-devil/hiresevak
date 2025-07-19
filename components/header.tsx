"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-6 py-4 relative z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">mySevak</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-yellow-600 transition-colors">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-yellow-600 transition-colors">
            Resources
          </Link>
          <Link href="/community" className="text-gray-700 hover:text-yellow-600 transition-colors">
            Community
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium transition-colors">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 mt-4"
          >
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-yellow-600">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-700 hover:text-yellow-600">
                Services
              </Link>
              <Link href="/blog" className="block text-gray-700 hover:text-yellow-600">
                Resources
              </Link>
              <Link href="/community" className="block text-gray-700 hover:text-yellow-600">
                Community
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
