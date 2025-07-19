"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, AlertTriangle } from "lucide-react"

export default function FBARFATCAPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">US Compliance</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              FBAR and FATCA: US Reporting Requirements for NRIs
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 28, 2024
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
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-red-800 font-medium mb-2">Critical Compliance Alert</p>
                  <p className="text-red-700 mb-0">
                    Non-compliance with FBAR and FATCA requirements can result in severe penalties ranging from 
                    $10,000 to $60,000 or more. US persons (including NRIs) must report foreign financial accounts.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Must Comply?</h2>
              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <p className="text-gray-800 mb-4 font-medium">US Persons include:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>US citizens (including those living abroad)</li>
                  <li>US permanent residents (Green Card holders)</li>
                  <li>US tax residents (meeting substantial presence test)</li>
                  <li>US entities, trusts, and estates</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FBAR (Foreign Bank Account Reporting)</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">When to File FBAR</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Threshold</h4>
                  <p className="text-gray-700">Aggregate value of foreign accounts exceeds <strong>$10,000</strong> at any time during the calendar year</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Filing Deadline</h4>
                  <p className="text-gray-700"><strong>April 15</strong> (automatically extended to October 15 - no extension request needed)</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Accounts to Report</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-yellow-600 mb-2">✅ Must Report</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Bank accounts (savings, current)</li>
                    <li>• Fixed deposits</li>
                    <li>• Investment accounts</li>
                    <li>• Mutual fund accounts</li>
                    <li>• Demat accounts</li>
                    <li>• NRI accounts (NRE, NRO)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Generally Excluded</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Direct stock holdings</li>
                    <li>• Real estate</li>
                    <li>• Precious metals</li>
                    <li>• Cryptocurrency (unless in account)</li>
                    <li>• Safe deposit boxes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">FATCA (Foreign Account Tax Compliance Act)</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Form 8938 Requirements</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Reporting Thresholds (Living Abroad)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Single Filers:</p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• $200,000 on last day of year, OR</li>
                      <li>• $300,000 at any time during year</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Joint Filers:</p>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• $400,000 on last day of year, OR</li>
                      <li>• $600,000 at any time during year</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">FATCA vs FBAR: Key Differences</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Aspect</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">FBAR</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">FATCA</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Threshold</td>
                      <td className="border border-gray-300 p-3">$10,000</td>
                      <td className="border border-gray-300 p-3">$200,000+ (abroad)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Form</td>
                      <td className="border border-gray-300 p-3">FinCEN Form 114</td>
                      <td className="border border-gray-300 p-3">Form 8938</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Filing</td>
                      <td className="border border-gray-300 p-3">Separate e-filing</td>
                      <td className="border border-gray-300 p-3">With tax return</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Deadline</td>
                      <td className="border border-gray-300 p-3">April 15 (auto extension)</td>
                      <td className="border border-gray-300 p-3">Tax return deadline</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Filing Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">For FBAR Filing</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collect Account Information</h4>
                    <p className="text-gray-700">Bank name, address, account number, maximum balance during the year</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access BSA E-Filing System</h4>
                    <p className="text-gray-700">Visit BSA E-Filing System website and create account if needed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Form 114</h4>
                    <p className="text-gray-700">Fill in personal information and account details for each foreign account</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Submit Electronically</h4>
                    <p className="text-gray-700">Review and submit - keep confirmation receipt for records</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common NRI Scenarios</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 1: H-1B Visa Holder</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Situation:</strong> US resident with NRO account in India containing ₹12 lakh ($14,500)
                  </p>
                  <p className="text-gray-700">
                    <strong>Requirement:</strong> Must file FBAR (exceeds $10,000). May need FATCA depending on total foreign assets.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 2: US Citizen Working in India</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Situation:</strong> Multiple Indian bank accounts totaling $85,000
                  </p>
                  <p className="text-gray-700">
                    <strong>Requirement:</strong> Must file both FBAR and FATCA (if single and living abroad).
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Penalties for Non-Compliance</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-800 mb-4">FBAR Penalties</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Non-willful:</strong> Up to $12,921 per account per year</li>
                  <li>• <strong>Willful:</strong> Greater of $129,210 or 50% of account balance</li>
                  <li>• <strong>Criminal penalties:</strong> Up to $500,000 and 10 years imprisonment</li>
                </ul>
                <h3 className="text-lg font-semibold text-red-800 mb-4 mt-6">FATCA Penalties</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Failure to file:</strong> Up to $60,000 per form</li>
                  <li>• <strong>Understatement:</strong> 40% penalty on underreported tax</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Pro Tips for Compliance</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Set calendar reminders for filing deadlines</li>
                  <li>• Keep detailed records of account statements</li>
                  <li>• Use currency conversion rates from IRS or Federal Reserve</li>
                  <li>• Consider professional help for complex situations</li>
                  <li>• File even if accounts are dormant or have zero balance</li>
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
                  <p className="text-sm text-gray-600">Complete guide for US tax return filing as NRI</p>
                </div>
              </Link>
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits
                  </h3>
                  <p className="text-sm text-gray-600">Avoid double taxation between US and India</p>
                </div>
              </Link>
              <Link href="/blog/estate-planning-nris-cross-border" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Cross-Border Estate Planning
                  </h3>
                  <p className="text-sm text-gray-600">Plan your estate across US and Indian jurisdictions</p>
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