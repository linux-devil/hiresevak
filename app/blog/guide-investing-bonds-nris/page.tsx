"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp } from "lucide-react"

export default function BondInvestmentPost() {
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
            <div className="text-sm font-medium text-yellow-600 mb-4">Investment</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Guide to Investing in Bonds for NRIs: Types, Taxes & Benefits
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                December 5, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                11 min read
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
                <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-800 font-medium mb-2">Investment Overview</p>
                  <p className="text-gray-700 mb-0">
                    Bond investments offer NRIs stable income with predictable returns, but require understanding 
                    of tax implications, currency risks, and regulatory compliance across jurisdictions.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Bonds are Attractive for NRIs</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Benefits</h3>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Predictable income stream</li>
                    <li>• Lower risk than equity investments</li>
                    <li>• Portfolio diversification</li>
                    <li>• Inflation protection (some bonds)</li>
                    <li>• Tax advantages in certain cases</li>
                    <li>• Capital appreciation potential</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Risks</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Interest rate risk</li>
                    <li>• Currency fluctuation risk</li>
                    <li>• Credit/default risk</li>
                    <li>• Liquidity constraints</li>
                    <li>• Inflation eroding real returns</li>
                    <li>• Complex tax implications</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Bonds Available to NRIs</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">1. Government Securities (G-Secs)</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-3">Central Government Bonds</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• 10-year benchmark bonds</li>
                      <li>• Floating Rate Bonds (FRB)</li>
                      <li>• Capital Indexed Bonds</li>
                      <li>• Treasury Bills (91, 182, 364 days)</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2"><strong>Risk Level:</strong> Lowest (sovereign guarantee)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-3">State Government Bonds</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• State Development Loans (SDL)</li>
                      <li>• Various tenure options</li>
                      <li>• Slightly higher yield than G-Secs</li>
                      <li>• State government guarantee</li>
                    </ul>
                    <p className="text-gray-600 text-sm mt-2"><strong>Risk Level:</strong> Very Low</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">2. Corporate Bonds</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">AAA Rated</h4>
                    <p className="text-gray-700 text-sm mb-2">Highest credit quality</p>
                    <p className="text-gray-600 text-sm">Yield: G-Sec + 0.5-1.5%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">AA Rated</h4>
                    <p className="text-gray-700 text-sm mb-2">High credit quality</p>
                    <p className="text-gray-600 text-sm">Yield: G-Sec + 1-2%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-2">Lower Rated</h4>
                    <p className="text-gray-700 text-sm mb-2">Higher risk-return</p>
                    <p className="text-gray-600 text-sm">Yield: G-Sec + 2-5%</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">3. NRI-Specific Bond Options</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-3">Sovereign Gold Bonds (SGBs)</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-blue-700 mb-2"><strong>Features:</strong></p>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Gold price linked returns</li>
                        <li>• 2.5% annual interest</li>
                        <li>• 8-year maturity</li>
                        <li>• Exit option after 5 years</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-700 mb-2"><strong>NRI Benefits:</strong></p>
                      <ul className="text-blue-700 space-y-1">
                        <li>• Hedge against currency risk</li>
                        <li>• No storage issues</li>
                        <li>• Capital gains tax exemption on maturity</li>
                        <li>• Tradeable on exchanges</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">Bharat Bond ETF</h4>
                  <p className="text-purple-700 mb-3">Exchange-traded fund investing in AAA-rated PSU bonds</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="text-purple-700 space-y-1">
                        <li>• Professional management</li>
                        <li>• Diversified PSU exposure</li>
                        <li>• High liquidity</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-purple-700 space-y-1">
                        <li>• Target maturity approach</li>
                        <li>• Low expense ratio</li>
                        <li>• Multiple series available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tax Implications for NRI Bond Investors</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Interest Income Taxation</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Bond Type</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">TDS Rate</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Tax Treatment</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-300 p-3">Government Bonds</td>
                      <td className="border border-gray-300 p-3">30% + surcharge + cess</td>
                      <td className="border border-gray-300 p-3">Taxable as interest income</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Corporate Bonds</td>
                      <td className="border border-gray-300 p-3">30% + surcharge + cess</td>
                      <td className="border border-gray-300 p-3">Taxable as interest income</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Sovereign Gold Bonds</td>
                      <td className="border border-gray-300 p-3">30% + surcharge + cess</td>
                      <td className="border border-gray-300 p-3">Interest taxable, maturity gains exempt</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Capital Gains Taxation</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Short-Term Capital Gains (≤ 36 months)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Tax rate: 30% + surcharge + cess</li>
                    <li>• Added to total income</li>
                    <li>• No indexation benefit</li>
                    <li>• TDS applicable</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Long-Term Capital Gains (> 36 months)</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Tax rate: 20% + surcharge + cess</li>
                    <li>• Indexation benefit available</li>
                    <li>• Separate from other income</li>
                    <li>• Lower effective tax rate</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Investment Process for NRIs</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Open Required Accounts</h4>
                    <p className="text-gray-700 mb-2">NRE/NRO bank account, demat account, and trading account with registered broker</p>
                    <div className="text-sm text-gray-600">
                      <p><strong>Documents needed:</strong> Passport, visa, overseas address proof, PAN card</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Choose Investment Method</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <p className="font-medium text-gray-700 mb-2">Primary Market:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Direct from RBI (G-Secs)</li>
                          <li>• Through banks and brokers</li>
                          <li>• Competitive bidding</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm">
                        <p className="font-medium text-gray-700 mb-2">Secondary Market:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• NSE/BSE trading</li>
                          <li>• Real-time pricing</li>
                          <li>• Better liquidity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Execute Investment</h4>
                    <p className="text-gray-700 mb-2">Place buy orders through broker or banking platform</p>
                    <div className="text-sm text-gray-600">
                      <p><strong>Settlement:</strong> T+1 for government bonds, T+2 for corporate bonds</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Monitor and Manage</h4>
                    <p className="text-gray-700">Track interest payments, market value, and tax obligations</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategic Considerations for NRIs</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Currency Risk Management</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-600 mb-3">INR Appreciation Risk</h4>
                    <p className="text-gray-700 text-sm mb-2">If INR strengthens against your base currency:</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Bond returns increase in foreign currency terms</li>
                      <li>• Higher effective yield</li>
                      <li>• Capital appreciation on currency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">INR Depreciation Risk</h4>
                    <p className="text-gray-700 text-sm mb-2">If INR weakens against your base currency:</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Bond returns decrease in foreign currency terms</li>
                      <li>• Lower effective yield</li>
                      <li>• Capital loss on currency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Portfolio Allocation Strategies</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-yellow-600 mb-3">Conservative (60-80%)</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Government bonds: 60%</li>
                    <li>• AAA corporate bonds: 20%</li>
                    <li>• SGBs: 20%</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">Focus on capital preservation</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-yellow-600 mb-3">Moderate (40-60%)</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Government bonds: 40%</li>
                    <li>• Corporate bonds: 40%</li>
                    <li>• SGBs: 20%</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">Balance of safety and returns</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-yellow-600 mb-3">Aggressive (20-30%)</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Government bonds: 20%</li>
                    <li>• Corporate bonds: 60%</li>
                    <li>• SGBs: 20%</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-2">Higher returns with more risk</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Current Market Scenario (2024)</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Interest Rate Environment</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-medium text-blue-700 mb-2">Current Yields (Approximate):</p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• 10-year G-Sec: 7.0-7.2%</li>
                      <li>• AAA Corporate bonds: 7.5-8.5%</li>
                      <li>• State bonds: 7.2-7.5%</li>
                      <li>• SGBs: 2.5% + gold price appreciation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700 mb-2">Market Outlook:</p>
                    <ul className="text-blue-700 space-y-1">
                      <li>• RBI policy stance: Accommodative</li>
                      <li>• Inflation targeting: 4% (+/- 2%)</li>
                      <li>• GDP growth support focus</li>
                      <li>• Attractive entry point for long-term investors</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Key Takeaways for NRI Bond Investors</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Bonds provide stable income with predictable returns</li>
                  <li>• Tax implications can be complex - consider DTAA benefits</li>
                  <li>• Currency risk is significant - factor in exchange rate volatility</li>
                  <li>• Diversify across government and corporate bonds</li>
                  <li>• Consider SGBs for inflation and currency hedge</li>
                  <li>• Long-term holding reduces interest rate risk</li>
                  <li>• Professional advice recommended for large investments</li>
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
              <Link href="/blog/rbi-guidelines-nri-investing-india" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    RBI Investment Guidelines
                  </h3>
                  <p className="text-sm text-gray-600">Understand regulatory framework for NRI investments</p>
                </div>
              </Link>
              <Link href="/blog/dtaa-benefits-avoid-double-taxation-nri" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    DTAA Benefits
                  </h3>
                  <p className="text-sm text-gray-600">Optimize tax on bond interest through tax treaties</p>
                </div>
              </Link>
              <Link href="/blog/nri-tax-filing-guide-fy-2023-24" className="group">
                <div className="bg-gray-50 rounded-lg p-6 hover:bg-yellow-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-yellow-600">
                    Tax Filing for NRIs
                  </h3>
                  <p className="text-sm text-gray-600">Report bond income correctly in your ITR</p>
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