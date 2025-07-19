"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, SlideInLeft } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About mySevak</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We're bridging the geographical distance for Non-Resident Indians through comprehensive remote 
              concierge services that handle all your Indian affairs with professional expertise and digital efficiency.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To eliminate the substantial time and effort NRIs face in managing their Indian affairs by providing 
                comprehensive remote concierge services that bridge geographical distance with professional expertise.
              </p>
              <p className="text-lg text-gray-700">
                We believe that NRIs should focus on their life abroad without worrying about their interests in India. That's why we've
                created a comprehensive platform that handles everything from property management to tax compliance remotely.
              </p>
            </SlideInLeft>
            <FadeInUp delay={0.2}>
              <div className="bg-[#c4f82a] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-gray-700">Remote Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-gray-700">Support Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500K+</div>
                    <div className="text-gray-700">Tasks Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">50+</div>
                    <div className="text-gray-700">Service Types</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Comprehensive Care",
                description: "We handle all aspects of your Indian affairs - from finances to family care",
              },
              {
                icon: Target,
                title: "Digital Excellence",
                description: "Cutting-edge technology combined with trusted local networks for seamless service",
              },
              {
                icon: Lightbulb,
                title: "Peace of Mind",
                description: "Focus on your life abroad while we professionally manage everything in India",
              },
              {
                icon: Award,
                title: "Professional Network",
                description: "Access to certified experts across all domains - legal, financial, and personal",
              },
            ].map((value, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-[#c4f82a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 flex-1">{value.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to experience true peace of mind?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of NRIs who trust mySevak as their comprehensive remote concierge for all Indian affairs.
            </p>
            <Button className="bg-[#c4f82a] text-gray-900 hover:bg-[#b8e625] font-medium px-8 py-3">Start Your Journey</Button>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
