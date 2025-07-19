"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function EstatePlanningPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />
      
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

      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="text-sm font-medium text-yellow-600 mb-4">Estate Planning</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Estate Planning for NRIs: Cross-Border Considerations
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 20, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-yellow-600 ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="prose prose-lg max-w-none">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium mb-2">Key Takeaway</p>
                <p className="text-gray-700">
                  NRI estate planning requires careful coordination between multiple jurisdictions to minimize taxes, 
                  avoid legal complications, and ensure smooth asset transfer to beneficiaries across countries.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why NRIs Need Special Estate Planning</h2>
              <p className="text-gray-700 mb-6">
                NRIs face unique challenges in estate planning due to assets spread across multiple countries, 
                different legal systems, varying tax implications, and complex succession laws. Without proper 
                planning, families can face significant tax burdens, legal disputes, and delayed asset transfers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Components of NRI Estate Planning</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">📋 Will Preparation</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Separate wills for different jurisdictions</li>
                    <li>• Clear asset identification and distribution</li>
                    <li>• Appointment of executors in each country</li>
                    <li>• Regular updates and reviews</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🏛️ Trust Structures</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Asset protection and tax efficiency</li>
                    <li>• Succession planning for businesses</li>
                    <li>• Privacy and control over distributions</li>
                    <li>• Cross-border trust considerations</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">💰 Tax Optimization</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Estate and inheritance tax planning</li>
                    <li>• DTAA benefits utilization</li>
                    <li>• Gift tax optimization strategies</li>
                    <li>• Generation-skipping transfer tax</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">📄 Documentation</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Power of attorney arrangements</li>
                    <li>• Beneficiary designations</li>
                    <li>• Asset inventories and valuations</li>
                    <li>• Legal heir certificates</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Will Requirements Across Jurisdictions</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Country</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Key Requirements</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Witness Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">India</td>
                      <td className="border border-gray-300 p-3">Registration recommended, succession certificate</td>
                      <td className="border border-gray-300 p-3">2 witnesses required</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">USA</td>
                      <td className="border border-gray-300 p-3">State-specific laws, notarization varies</td>
                      <td className="border border-gray-300 p-3">2-3 witnesses (state dependent)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">UK</td>
                      <td className="border border-gray-300 p-3">Probate process, inheritance tax considerations</td>
                      <td className="border border-gray-300 p-3">2 witnesses required</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Canada</td>
                      <td className="border border-gray-300 p-3">Provincial laws apply, executor bond</td>
                      <td className="border border-gray-300 p-3">2 witnesses required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Implications by Asset Type</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">🏠 Real Estate</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">India:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• No inheritance tax</li>
                        <li>• Capital gains on subsequent sale</li>
                        <li>• Registration and stamp duty</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">USA:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Estate tax on high-value estates</li>
                        <li>• Stepped-up basis for heirs</li>
                        <li>• State-specific inheritance taxes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">💼 Financial Assets</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Bank Accounts:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Joint account automatic transfer</li>
                        <li>• Nomination facility in India</li>
                        <li>• POD (Payable on Death) in US</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Investments:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Beneficiary designations</li>
                        <li>• Step-up in basis considerations</li>
                        <li>• DTAA treaty benefits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Estate Planning Strategies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Strategic Gift Planning</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Annual Exclusion Gifts:</strong> Utilize annual gift tax exclusions in both countries to 
                  reduce estate size while transferring wealth to heirs tax-efficiently.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">India (2024):</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• ₹50,000 per recipient (non-relatives)</li>
                      <li>• No limit for specified relatives</li>
                      <li>• Stamp duty considerations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">USA (2024):</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• $18,000 per recipient annually</li>
                      <li>• Unlimited spousal gifts (US citizen spouse)</li>
                      <li>• Lifetime exemption: $13.61 million</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Trust Structures</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Revocable Living Trust</h4>
                  <p className="text-gray-700 text-sm mb-2"><strong>Benefits:</strong> Avoids probate, maintains control during lifetime, privacy protection</p>
                  <p className="text-gray-700 text-sm"><strong>Considerations:</strong> No tax benefits, complexity for cross-border assets</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Irrevocable Life Insurance Trust (ILIT)</h4>
                  <p className="text-gray-700 text-sm mb-2"><strong>Benefits:</strong> Removes life insurance from taxable estate, provides liquidity</p>
                  <p className="text-gray-700 text-sm"><strong>Considerations:</strong> Loss of control, complexity in cross-border scenarios</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Estate Planning Process</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Asset Inventory & Valuation</h4>
                    <p className="text-gray-700">Create comprehensive list of all assets across countries with current valuations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Analysis</h4>
                    <p className="text-gray-700">Analyze estate, inheritance, and gift tax implications in all relevant jurisdictions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Strategy Development</h4>
                    <p className="text-gray-700">Develop tax-efficient transfer strategies considering family goals and circumstances</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Documentation & Implementation</h4>
                    <p className="text-gray-700">Draft and execute wills, trusts, and other legal documents in accordance with local laws</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Regular Review & Updates</h4>
                    <p className="text-gray-700">Review and update plans based on law changes, family changes, and asset changes</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Professional Guidance Recommended</h3>
                <p className="text-blue-700 mb-4">
                  NRI estate planning involves complex legal and tax considerations across multiple jurisdictions. 
                  Consider working with professionals who understand:
                </p>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Cross-border tax implications and treaty benefits</li>
                  <li>• Local laws in each jurisdiction where you hold assets</li>
                  <li>• International trust and estate planning strategies</li>
                  <li>• Ongoing compliance requirements and reporting obligations</li>
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
              <Link href="/blog/nri-gift-tax-india-complete-guide" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Gift Tax Guide
                  </h3>
                  <p className="text-sm text-gray-600">Understand gift tax implications for estate planning</p>
                </div>
              </Link>
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits
                  </h3>
                  <p className="text-sm text-gray-600">Utilize tax treaties in estate planning strategies</p>
                </div>
              </Link>
              <Link href="/blog/nri-property-investment-tax-implications" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Property Investment for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Property succession and inheritance considerations</p>
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