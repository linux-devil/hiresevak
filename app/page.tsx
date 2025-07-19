"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Shield, TrendingUp, Users, ArrowRight, Play } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, SlideInLeft } from "@/components/scroll-animation"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Financial Services 
                  <br />
                  for NRIs,
                  <br />
                  Made Easy
                  <span className="inline-block ml-4">
                    <svg width="80" height="40" viewBox="0 0 80 40" className="text-yellow-500">
                      <path
                        d="M10 20 Q 40 5, 70 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-700 max-w-md"
                >
                  Bridging the distance with digital solutions. We handle everything from tax compliance 
                  and property management to document procurement - all remotely, saving you substantial time and effort.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
              >
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-3 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </SlideInLeft>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/dashboard-mockup.png"
                alt="mySevak NRI Tax & Compliance Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Concierge Dashboard</p>
                    <p className="text-lg font-bold text-yellow-600">15 Tasks • All On Track</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-4 -right-4 bg-yellow-500 rounded-full p-3"
            >
              <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">500K+</div>
                <p className="text-gray-600">NRIs Served Globally</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">₹12T</div>
                <p className="text-gray-600">Assets Under Management</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
                <p className="text-gray-600">Countries Supported</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
                <p className="text-gray-600">Tax Filing Accuracy</p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Virtual Financial Desk for Global Indians</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From tax compliance and property management to document procurement and family care - 
              we handle all your Indian affairs remotely with professional expertise and digital efficiency
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Property Management",
                description: "Complete remote property management including tenant search, rent collection, maintenance coordination, and legal compliance.",
              },
              {
                icon: Shield,
                title: "Tax & Compliance",
                description: "Expert handling of ITR filing, TDS management, cross-border tax planning with DTAA benefits, and regulatory compliance.",
              },
              {
                icon: TrendingUp,
                title: "Investment Services",
                description: "Diversified investment management in mutual funds, bonds, retirement planning with professional guidance and portfolio optimization.",
              },
              {
                icon: Users,
                title: "Document Services",
                description: "Seamless procurement and updates for PAN, OCI, passport renewal, attestation services, and official documentation."
              },
            ].map((feature, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 flex-1">{feature.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Complete Remote Management Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing management, we handle every aspect of your Indian affairs 
              with professional expertise and cutting-edge digital solutions
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">01</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Comprehensive evaluation of all your Indian affairs including financial, legal, and personal requirements
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete needs assessment across all service areas</li>
                  <li>• Priority mapping and timeline creation</li>
                  <li>• Dedicated relationship manager assignment</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">02</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Digital Execution</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Professional handling of all tasks through secure digital channels and trusted local networks
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 100% digital processing where possible</li>
                  <li>• Trusted local team for on-ground requirements</li>
                  <li>• Real-time updates and progress tracking</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">03</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ongoing Management</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Continuous monitoring, proactive updates, and strategic guidance across all your Indian interests
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Proactive monitoring and maintenance</li>
                  <li>• Regular review and optimization</li>
                  <li>• 24/7 support and emergency assistance</li>
                </ul>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience True Peace of Mind?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Join thousands of NRIs who trust mySevak as their comprehensive remote concierge for all Indian affairs
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 font-medium px-8 py-3">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Download Guide
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>


      <Footer />
    </div>
  )
}
