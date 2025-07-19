"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function NRIPropertyInvestmentPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">Property</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              NRI Property Investment: Tax Implications and Compliance
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                January 5, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
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
                  NRIs can invest in Indian real estate with specific restrictions and must navigate complex tax 
                  implications including TDS, capital gains tax, and repatriation rules for optimal returns.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Investment Rules for NRIs</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Allowed Investments</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Residential properties</li>
                    <li>• Commercial properties</li>
                    <li>• Agricultural land (inherited only)</li>
                    <li>• Plantation property (inherited only)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Restricted Investments</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Agricultural land (fresh purchase)</li>
                    <li>• Plantation property (fresh purchase)</li>
                    <li>• Farmhouse</li>
                    <li>• Properties in restricted areas</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Implications for NRI Property Owners</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Tax Deducted at Source (TDS)</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">On Property Sale</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• TDS: 20% + surcharge + cess</li>
                      <li>• On the gross sale value</li>
                      <li>• Buyer is responsible for TDS deduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">On Rental Income</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• TDS: 30% + surcharge + cess</li>
                      <li>• On rental income above ₹2.4 lakh/year</li>
                      <li>• Tenant deducts and pays to government</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Capital Gains Tax</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Short-Term Capital Gains (STCG)</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Holding Period:</p>
                      <p className="text-gray-600">≤ 2 years</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Tax Rate:</p>
                      <p className="text-gray-600">Added to income, taxed as per slab</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Indexation:</p>
                      <p className="text-gray-600">Not available</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Long-Term Capital Gains (LTCG)</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Holding Period:</p>
                      <p className="text-gray-600">> 2 years</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Tax Rate:</p>
                      <p className="text-gray-600">20% + surcharge + cess</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Indexation:</p>
                      <p className="text-gray-600">Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3. Rental Income Taxation</h3>
              <p className="text-gray-700 mb-4">
                Rental income from Indian property is taxable in India for NRIs. You can claim deductions for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Municipal taxes paid during the year</li>
                <li>30% standard deduction for repairs and maintenance</li>
                <li>Interest on home loan (without any ceiling)</li>
                <li>Other expenses directly related to the property</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Repatriation of Property Sale Proceeds</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Repatriation Limits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">Residential Property</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Up to 2 properties can be sold</li>
                      <li>• Proceeds fully repatriable</li>
                      <li>• Subject to tax clearance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">Commercial Property</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• No limit on number of properties</li>
                      <li>• Full repatriation allowed</li>
                      <li>• Compliance with FEMA required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Documentation Required</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Purchase</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Copy of passport with valid visa</li>
                      <li>• Overseas address proof</li>
                      <li>• PAN card</li>
                      <li>• NRI bank account details</li>
                      <li>• Source of funds documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Sale/Repatriation</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Tax clearance certificate (TCC)</li>
                      <li>• CA certificate for repatriation</li>
                      <li>• Property valuation report</li>
                      <li>• Bank certificates</li>
                      <li>• FIRC (Foreign Inward Remittance Certificate)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Planning Strategies</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hold Property for Long Term</h4>
                    <p className="text-gray-700">Hold for more than 2 years to avail LTCG benefits with indexation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Utilize Section 54 Benefits</h4>
                    <p className="text-gray-700">Invest LTCG in another residential property to claim exemption under Section 54.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Plan Joint Ownership</h4>
                    <p className="text-gray-700">Consider joint ownership with resident relatives to optimize tax implications.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Important Compliance Points</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• File ITR even if no tax liability exists</li>
                  <li>• Obtain TCC before repatriation</li>
                  <li>• Maintain proper documentation for all transactions</li>
                  <li>• Report property ownership in foreign country tax returns</li>
                  <li>• Consider DTAA benefits for tax optimization</li>
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
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Learn how to avoid double taxation on property income</p>
                </div>
              </Link>
              <Link href="/blog/nri-tax-filing-guide-fy-2023-24" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Tax Filing Guide
                  </h3>
                  <p className="text-sm text-gray-600">Complete guide for filing property income in ITR</p>
                </div>
              </Link>
              <Link href="/blog/estate-planning-nris-cross-border" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Estate Planning for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Plan property succession across jurisdictions</p>
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