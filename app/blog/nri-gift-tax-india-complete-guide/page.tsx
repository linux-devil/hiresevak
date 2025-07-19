"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, Gift } from "lucide-react"

export default function NRIGiftTaxPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">Gift Tax</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About NRI Gift Tax in India
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 10, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min read
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
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 flex items-start gap-3">
                <Gift className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-800 font-medium mb-2">Key Takeaway</p>
                  <p className="text-gray-700 mb-0">
                    Gift tax in India applies to both giver and receiver under specific conditions. NRIs must understand 
                    exemptions, taxability, and compliance requirements for both domestic and international gifts.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Gift Tax in India</h2>
              <p className="text-gray-700 mb-6">
                In India, gift tax was abolished in 1998, but gifts received above certain limits are taxable in the 
                hands of the recipient under the Income Tax Act. For NRIs, gift tax implications can be complex due 
                to cross-border considerations and varying rules in different countries.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When are Gifts Taxable?</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Taxability Threshold</h3>
                <p className="text-gray-700 mb-4">
                  Gifts received from <strong>non-relatives</strong> exceeding <strong>₹50,000</strong> per year are 
                  taxable as "Income from Other Sources" at applicable slab rates.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-800 text-sm"><strong>Important:</strong> All gifts from non-relatives are clubbed together for the ₹50,000 limit calculation.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Specified Relatives (Tax-Free Gifts)</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Relatives (No Limit)</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Spouse</li>
                    <li>• Brother or sister</li>
                    <li>• Brother/sister of spouse</li>
                    <li>• Brother/sister of parents</li>
                    <li>• Lineal ascendant/descendant</li>
                    <li>• Spouse of above relatives</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">ℹ️ Special Occasions</h3>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Marriage ceremony</li>
                    <li>• Through will/inheritance</li>
                    <li>• Local authority gifts</li>
                    <li>• Registered trust/institution</li>
                    <li>• Medical treatment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Gifts and Tax Implications</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Cash Gifts</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">From Relatives:</h4>
                    <p className="text-gray-700 text-sm">No tax liability regardless of amount</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">From Non-Relatives:</h4>
                    <p className="text-gray-700 text-sm">Taxable if aggregate > ₹50,000 per year</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Property Gifts</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Valuation for Tax:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• <strong>Immovable Property:</strong> Stamp duty value or market value (whichever is higher)</li>
                  <li>• <strong>Shares/Securities:</strong> Fair market value as per IT rules</li>
                  <li>• <strong>Jewelry:</strong> Value determined by registered valuer</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3. Foreign Gifts</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Additional Compliance: FCRA Rules</h4>
                <p className="text-blue-700 mb-3">
                  Foreign gifts exceeding ₹20 lakh per year require reporting under Foreign Contribution Regulation Act (FCRA).
                </p>
                <div className="text-sm text-blue-700">
                  <p><strong>FCRA Exemptions:</strong> Gifts from relatives, inheritance, personal use items up to ₹1 lakh</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">NRI-Specific Scenarios</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 1: NRI Receiving Gift in India</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Situation:</strong> NRI receives ₹15 lakh from friend for house purchase
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Tax Implication:</strong> Taxable as "Income from Other Sources" in India
                  </p>
                  <p className="text-gray-700">
                    <strong>Action Required:</strong> File ITR in India, pay tax at applicable slab rates
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 2: NRI Giving Gift to Indian Resident</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Situation:</strong> NRI parent gifts ₹50 lakh to child in India
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Tax Implication:</strong> No tax liability (parent-child relationship)
                  </p>
                  <p className="text-gray-700">
                    <strong>Documentation:</strong> Maintain relationship proof and fund source documents
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 3: Foreign Gift to NRI</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Situation:</strong> NRI in US receives $100,000 gift from US friend
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Indian Tax:</strong> No Indian tax (non-Indian source, NRI status)
                  </p>
                  <p className="text-gray-700">
                    <strong>US Tax:</strong> Recipient generally not taxed, but may need Form 3520 filing
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Documentation and Compliance</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">📋 Documents to Maintain</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Gift deed or agreement</li>
                    <li>• Relationship proof (if applicable)</li>
                    <li>• Bank statements showing receipt</li>
                    <li>• Property valuation certificates</li>
                    <li>• Source of funds documentation</li>
                    <li>• Foreign exchange certificates</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">📝 Reporting Requirements</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Report in ITR if taxable</li>
                    <li>• FCRA reporting if > ₹20 lakh foreign</li>
                    <li>• Schedule FA for foreign assets</li>
                    <li>• Form 15CA/15CB for foreign remittance</li>
                    <li>• TDS compliance if applicable</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Planning Strategies</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Structure Gifts Through Relatives</h4>
                    <p className="text-gray-700">Route gifts through eligible relatives to avoid tax liability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Time Gift Receipts</h4>
                    <p className="text-gray-700">Spread large gifts across financial years to manage tax liability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Consider Loan Structure</h4>
                    <p className="text-gray-700">Structure as interest-free loan instead of gift (with proper documentation).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Utilize Special Occasions</h4>
                    <p className="text-gray-700">Time gifts around marriage or other exempt occasions.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">International Gift Tax Comparison</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Country</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Annual Exclusion</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Lifetime Exemption</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">India</td>
                      <td className="border border-gray-300 p-3">₹50,000 (non-relatives)</td>
                      <td className="border border-gray-300 p-3">No limit for relatives</td>
                      <td className="border border-gray-300 p-3">As per income tax slab</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">USA (2024)</td>
                      <td className="border border-gray-300 p-3">$18,000 per recipient</td>
                      <td className="border border-gray-300 p-3">$13.61 million</td>
                      <td className="border border-gray-300 p-3">18% - 40%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">UK</td>
                      <td className="border border-gray-300 p-3">£3,000 per year</td>
                      <td className="border border-gray-300 p-3">£325,000 (inheritance)</td>
                      <td className="border border-gray-300 p-3">40% (inheritance tax)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">⚠️ Important Compliance Points</h3>
                <ul className="space-y-2 text-orange-700">
                  <li>• Maintain detailed records of all gifts received and given</li>
                  <li>• Report taxable gifts in ITR filing</li>
                  <li>• Consider DTAA benefits for international gifts</li>
                  <li>• Consult tax professionals for complex gift structures</li>
                  <li>• Ensure compliance with both Indian and foreign country rules</li>
                  <li>• Regular review of gift tax laws as they change frequently</li>
                </ul>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/estate-planning-nris-cross-border" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Estate Planning for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Integrate gift strategies in estate planning</p>
                </div>
              </Link>
              <Link href="/blog/nri-tax-filing-guide-fy-2023-24" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    NRI Tax Filing Guide
                  </h3>
                  <p className="text-sm text-gray-600">Report gift income in your ITR filing</p>
                </div>
              </Link>
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits
                  </h3>
                  <p className="text-sm text-gray-600">Avoid double taxation on cross-border gifts</p>
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