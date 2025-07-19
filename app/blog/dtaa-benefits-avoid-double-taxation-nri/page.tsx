"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function DTAABenefitsPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">Tax Planning</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              DTAA Benefits: How to Avoid Double Taxation as an NRI
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 10, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                6 min read
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
                  Double Taxation Avoidance Agreements (DTAA) help NRIs avoid paying tax on the same income in both 
                  India and their country of residence, providing significant tax savings through proper planning and documentation.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is DTAA?</h2>
              <p className="text-gray-700 mb-6">
                Double Taxation Avoidance Agreement (DTAA) is a bilateral agreement between India and other countries 
                to prevent the same income from being taxed in both jurisdictions. India has signed DTAAs with over 
                90 countries, making it easier for NRIs to optimize their tax obligations legally.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How DTAA Benefits NRIs</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tax Credit Method</h3>
                  <p className="text-gray-700">Tax paid in one country can be claimed as credit against tax liability in the other country.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Exemption Method</h3>
                  <p className="text-gray-700">Income taxed in one country is completely exempt from taxation in the other country.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Income Covered</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li><strong>Salary Income:</strong> Employment income from either country</li>
                <li><strong>Business Income:</strong> Profits from business or profession</li>
                <li><strong>Capital Gains:</strong> Gains from sale of assets like property or securities</li>
                <li><strong>Dividend Income:</strong> Dividends received from companies</li>
                <li><strong>Interest Income:</strong> Interest from bank deposits, bonds, or loans</li>
                <li><strong>Rental Income:</strong> Income from property rentals</li>
                <li><strong>Royalty Income:</strong> Income from intellectual property</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Popular DTAA Countries for NRIs</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Americas</h4>
                    <ul className="text-sm space-y-1">
                      <li>• United States</li>
                      <li>• Canada</li>
                      <li>• Brazil</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Europe</h4>
                    <ul className="text-sm space-y-1">
                      <li>• United Kingdom</li>
                      <li>• Germany</li>
                      <li>• France</li>
                      <li>• Netherlands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Asia-Pacific</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Singapore</li>
                      <li>• Australia</li>
                      <li>• UAE</li>
                      <li>• Japan</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Claim DTAA Benefits</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Obtain Tax Residency Certificate (TRC)</h4>
                    <p className="text-gray-700">Get TRC from your country of residence's tax authorities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Submit Form 10F</h4>
                    <p className="text-gray-700">File Form 10F with Indian tax authorities to claim DTAA benefits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Maintain Proper Documentation</h4>
                    <p className="text-gray-700">Keep records of tax payments and relevant income documents.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Scenarios and Solutions</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Study: NRI in the USA</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Situation:</strong> Software engineer earning $120,000 in the US, also receiving ₹5 lakh rental income from Indian property.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Without DTAA:</strong> Pays tax on rental income in both India (~₹50,000) and US (~$2,000) = Total ₹2.15 lakh
                </p>
                <p className="text-gray-700">
                  <strong>With DTAA:</strong> Claims foreign tax credit in US for Indian tax paid = Saves approximately $2,000 (₹1.65 lakh)
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Points to Remember</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• DTAA benefits must be claimed proactively - they're not automatic</li>
                  <li>• TRC is typically valid for one financial year</li>
                  <li>• Different DTAA treaties have different provisions and rates</li>
                  <li>• Consult tax professionals for complex scenarios</li>
                  <li>• Maintain detailed records of all tax payments and claims</li>
                </ul>
              </div>
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
              <Link href="/blog/nri-tax-filing-guide-fy-2023-24" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Tax Filing Guide
                  </h3>
                  <p className="text-sm text-gray-600">Step-by-step guide for filing tax returns as an NRI</p>
                </div>
              </Link>
              <Link href="/blog/fbar-fatca-us-reporting-requirements-nris" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    FBAR and FATCA Requirements
                  </h3>
                  <p className="text-sm text-gray-600">US reporting requirements for NRI bank accounts</p>
                </div>
              </Link>
              <Link href="/blog/nri-property-investment-tax-implications" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Property Investment
                  </h3>
                  <p className="text-sm text-gray-600">Tax implications of property investments for NRIs</p>
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