"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function RBIGuidelinesPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />
      
      {/* Back Navigation */}
      <section className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="text-gray-600 hover:text-yellow-600 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="text-sm font-medium text-yellow-600 mb-4">Investment Guidelines</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Understanding the RBI Guidelines for NRI Investing in India
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-yellow-600 ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium mb-2">Key Takeaway</p>
                <p className="text-gray-700">
                  The Reserve Bank of India (RBI) has established comprehensive guidelines for Non-Resident Indians 
                  looking to invest in India, covering portfolio investments, mutual funds, and direct equity investments 
                  with specific limits and compliance requirements.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview of RBI Investment Guidelines</h2>
              <p className="text-gray-700 mb-6">
                Non-Resident Indians have various investment opportunities in India, but they must comply with RBI 
                regulations to ensure proper reporting and adherence to foreign exchange management rules. These 
                guidelines help maintain transparency and prevent money laundering while allowing NRIs to participate 
                in India's economic growth.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Portfolio Investment Scheme (PIS)</h2>
              <p className="text-gray-700 mb-4">
                The Portfolio Investment Scheme allows NRIs to invest in listed Indian securities on a repatriation basis:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Investment limit: Up to 5% of the paid-up capital of an Indian company</li>
                <li>Aggregate ceiling: All NRIs together cannot hold more than 10% of paid-up capital</li>
                <li>Requires PIS permission from designated bank branches</li>
                <li>Full repatriation of capital and dividends allowed</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mutual Fund Investments</h2>
              <p className="text-gray-700 mb-4">
                NRIs can invest in Indian mutual funds under specific conditions:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Direct investment in mutual fund units on repatriation and non-repatriation basis</li>
                <li>No individual or aggregate investment ceiling</li>
                <li>Must comply with SEBI regulations and fund house requirements</li>
                <li>Tax implications vary based on fund type and holding period</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Government Securities and Bonds</h2>
              <p className="text-gray-700 mb-6">
                NRIs have access to various government and corporate bond instruments with specific investment limits 
                and conditions. These provide relatively safer investment options with steady returns while supporting 
                India's infrastructure development.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Compliance Points</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Maintain proper documentation for all investments</li>
                  <li>• File annual returns with designated bank</li>
                  <li>• Ensure KYC compliance with intermediaries</li>
                  <li>• Keep track of investment limits and aggregate holdings</li>
                  <li>• Report foreign remittances as per RBI guidelines</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Recent Updates and Changes</h2>
              <p className="text-gray-700 mb-6">
                The RBI periodically updates investment guidelines to align with changing economic conditions and 
                regulatory requirements. NRIs should stay informed about these changes to ensure continued compliance 
                and optimize their investment strategies.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/guide-investing-bonds-nris" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Guide to Investing in Bonds for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Learn about bond investment opportunities and tax implications</p>
                </div>
              </Link>
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Understand how to avoid double taxation on investments</p>
                </div>
              </Link>
              <Link href="/blog/nri-tax-filing-guide-fy-2023-24" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Tax Filing Guide
                  </h3>
                  <p className="text-sm text-gray-600">Step-by-step guide for filing tax returns as an NRI</p>
                </div>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}