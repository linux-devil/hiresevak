"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, FileText, CheckCircle } from "lucide-react"

export default function NRITaxFilingPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">Tax Filing</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              NRI Tax Filing: Step-by-Step Guide for FY 2023-24
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 15, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min read
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
                <p className="text-lg text-gray-800 font-medium mb-2">Important Deadline</p>
                <p className="text-gray-700">
                  ITR filing deadline for FY 2023-24 is <strong>July 31, 2024</strong> for most NRIs. 
                  Late filing attracts penalties starting from ₹5,000.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Do You Need to File ITR?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Must File ITR</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Total income > ₹2.5 lakh (₹3 lakh for senior citizens)</li>
                    <li>• Any Indian income (salary, rental, capital gains)</li>
                    <li>• TDS deducted from Indian income</li>
                    <li>• Want to claim refund of excess TDS</li>
                    <li>• Hold assets worth > ₹50 lakh</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">ℹ️ May Need to File</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Carried forward losses</li>
                    <li>• Foreign income if tax resident</li>
                    <li>• Specified financial transactions</li>
                    <li>• Director in Indian company</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choose the Right ITR Form</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-semibold">ITR Form</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Who Should Use</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Income Sources</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">ITR-1</td>
                      <td className="border border-gray-300 p-3">Resident individuals only</td>
                      <td className="border border-gray-300 p-3">Salary, pension, one house property</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">ITR-2</td>
                      <td className="border border-gray-300 p-3">NRIs, HUFs, individuals with multiple income sources</td>
                      <td className="border border-gray-300 p-3">All income sources, capital gains, foreign assets</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">ITR-3</td>
                      <td className="border border-gray-300 p-3">Business/professional income</td>
                      <td className="border border-gray-300 p-3">Business profits, professional fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Documents Required</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <FileText className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Basic Documents</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• PAN Card</li>
                    <li>• Passport copy</li>
                    <li>• Bank statements</li>
                    <li>• TDS certificates (Form 16/16A)</li>
                    <li>• Salary certificate/Form 16</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <FileText className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Proofs</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• PPF statements</li>
                    <li>• ELSS mutual fund statements</li>
                    <li>• Life insurance premiums</li>
                    <li>• Home loan interest certificate</li>
                    <li>• 80C investment proofs</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <FileText className="w-8 h-8 text-yellow-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Property & Assets</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Property tax receipts</li>
                    <li>• Rental agreements</li>
                    <li>• Capital gains statements</li>
                    <li>• Foreign asset details</li>
                    <li>• Mutual fund statements</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Filing Process</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Register on Income Tax Portal</h4>
                    <p className="text-gray-700 mb-3">Visit www.incometax.gov.in and register using your PAN</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="text-gray-700"><strong>First-time users:</strong> Complete profile, set password, verify mobile/email</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Download ITR Form</h4>
                    <p className="text-gray-700 mb-3">Select appropriate ITR form (usually ITR-2 for NRIs)</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="text-gray-700"><strong>Options:</strong> Online filing utility, Excel utility, or manual PDF form</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Fill Personal Information</h4>
                    <p className="text-gray-700 mb-3">Enter personal details, residential status, and contact information</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="text-gray-700"><strong>Important:</strong> Select "Non-Resident" in residential status</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Enter Income Details</h4>
                    <p className="text-gray-700 mb-3">Fill income from salary, house property, capital gains, and other sources</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <p className="font-medium text-gray-700 mb-2">Indian Income:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Salary from Indian employer</li>
                          <li>• Rental income from property</li>
                          <li>• Capital gains from investments</li>
                          <li>• Interest from FDs/bonds</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <p className="font-medium text-gray-700 mb-2">Foreign Income (if applicable):</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Foreign salary</li>
                          <li>• Offshore investments</li>
                          <li>• Foreign property rental</li>
                          <li>• Report even if not taxable in India</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Claim Deductions & Exemptions</h4>
                    <p className="text-gray-700 mb-3">Enter eligible deductions under various sections</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-300 p-2 text-left">Section</th>
                            <th className="border border-gray-300 p-2 text-left">Deduction</th>
                            <th className="border border-gray-300 p-2 text-left">Limit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">80C</td>
                            <td className="border border-gray-300 p-2">PPF, ELSS, Life Insurance</td>
                            <td className="border border-gray-300 p-2">₹1.5 lakh</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">80D</td>
                            <td className="border border-gray-300 p-2">Health Insurance</td>
                            <td className="border border-gray-300 p-2">₹25,000-₹50,000</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">24(b)</td>
                            <td className="border border-gray-300 p-2">Home Loan Interest</td>
                            <td className="border border-gray-300 p-2">₹2 lakh</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">6</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Report Foreign Assets (if applicable)</h4>
                    <p className="text-gray-700 mb-3">Report foreign financial assets in Schedule FA</p>
                    <div className="bg-yellow-50 p-4 rounded-lg text-sm border border-yellow-200">
                      <p className="text-yellow-800"><strong>Mandatory if:</strong> Total foreign assets > ₹50 lakh at any time during the year</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">7</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Verify & Submit</h4>
                    <p className="text-gray-700 mb-3">Review all details, calculate tax, and submit the return</p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="text-gray-700"><strong>Verification options:</strong> Digital signature, net banking, Aadhaar OTP, or physical submission</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Common Errors</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Selecting wrong residential status</li>
                    <li>• Not reporting TDS certificates</li>
                    <li>• Missing foreign asset disclosure</li>
                    <li>• Incorrect bank account details</li>
                    <li>• Not claiming DTAA benefits</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Best Practices</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Keep all documents ready</li>
                    <li>• File before deadline</li>
                    <li>• Double-check all calculations</li>
                    <li>• Save acknowledgment receipt</li>
                    <li>• Verify within 120 days</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Post-Filing Checklist
                </h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Download and save ITR acknowledgment</li>
                  <li>• Complete ITR verification within 120 days</li>
                  <li>• Track refund status if applicable</li>
                  <li>• Keep copies of all supporting documents</li>
                  <li>• Update address/bank details if needed</li>
                  <li>• Set calendar reminder for next year's filing</li>
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
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Claim tax treaty benefits in your ITR filing</p>
                </div>
              </Link>
              <Link href="/blog/nri-property-investment-tax-implications" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Property Tax for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Report rental income and property transactions</p>
                </div>
              </Link>
              <Link href="/blog/fbar-fatca-us-reporting-requirements-nris" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    US Reporting Requirements
                  </h3>
                  <p className="text-sm text-gray-600">Additional filing requirements for US-based NRIs</p>
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