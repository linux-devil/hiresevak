"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, SlideInLeft } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function NRIFDsPage() {
  const [selectedCategory, setSelectedCategory] = useState("GIFT City")
  const [selectedTenure, setSelectedTenure] = useState("Under 3M")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)

  const categories = [
    { id: "GIFT City", name: "GIFT City", active: true },
    { id: "FCNR", name: "FCNR", active: false },
    { id: "NRE", name: "NRE", active: false },
    { id: "NRO", name: "NRO", active: false }
  ]

  const tenureOptions = ["Under 3M", "3M-1Y", "1Y-3Y", "Above 3Y"]
  const currencyOptions = ["USD", "EUR", "GBP", "AED"]

  const popularBanks = [
    { name: "HDFC Bank", rate: "up to 4.75%", logo: "🏦", color: "bg-blue-100" },
    { name: "ICICI Bank", rate: "up to 4.85%", logo: "🏛️", color: "bg-orange-100" },
    { name: "SBI Bank", rate: "up to 4.85%", logo: "🏦", color: "bg-blue-100" },
    { name: "Axis Bank", rate: "up to 4.90%", logo: "🏛️", color: "bg-red-100" }
  ]

  const fdRates = [
    { bank: "IDFC First Bank", rate: "4.70%", logo: "🏦" },
    { bank: "IDBI Bank", rate: "4.90%", logo: "🏛️" },
    { bank: "ICICI Bank", rate: "4.35%", logo: "🏛️" },
    { bank: "Axis Bank", rate: "4.30%", logo: "🏦" },
    { bank: "SBI", rate: "4.60%", logo: "🏦" },
    { bank: "Kotak Mahindra Bank", rate: "4.40%", logo: "🏛️" },
    { bank: "Yes Bank", rate: "5.30%", logo: "🏦" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <SlideInLeft>
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-yellow-600 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">NRI Fixed Deposits</h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Explore competitive fixed deposit rates across different NRI account types and choose the best option for your investment needs.
              </p>
            </div>
          </SlideInLeft>

          {/* Category Tabs */}
          <FadeInUp className="mb-8">
            <div className="flex gap-2 bg-white rounded-lg p-2 shadow-sm border border-gray-200 max-w-md">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </FadeInUp>


          {/* Popular Banks Section */}
          <FadeInUp className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular banks</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {popularBanks.map((bank, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-yellow-300 transition-colors">
                  <div className={`w-16 h-16 ${bank.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{bank.logo}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{bank.name}</h3>
                  <p className="text-green-600 font-medium">{bank.rate}</p>
                </div>
              ))}
            </div>
          </FadeInUp>

          {/* FD Rates Section */}
          <FadeInUp>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Top {selectedCategory} FD rates</h2>
                <p className="text-gray-600 mt-2">Updated by Belong on 14th July 2025</p>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                *Rates are sourced from official bank websites and may vary. Verify with banks before investing
              </p>

              {/* Filter Options */}
              <div className="flex gap-4 mb-8">
                {/* Currency Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    {selectedCurrency}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showCurrencyDropdown && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[100px]">
                      {currencyOptions.map((currency) => (
                        <button
                          key={currency}
                          onClick={() => {
                            setSelectedCurrency(currency)
                            setShowCurrencyDropdown(false)
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                            selectedCurrency === currency ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                          } ${currency === currencyOptions[0] ? 'rounded-t-lg' : ''} ${
                            currency === currencyOptions[currencyOptions.length - 1] ? 'rounded-b-lg' : ''
                          }`}
                        >
                          {currency}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tenure Options */}
                <div className="flex gap-2">
                  {tenureOptions.map((tenure) => (
                    <button
                      key={tenure}
                      onClick={() => setSelectedTenure(tenure)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedTenure === tenure
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tenure}
                    </button>
                  ))}
                </div>
              </div>

              {/* FD Rates Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Bank</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Rate (p.a.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {fdRates.map((fd, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-sm">{fd.logo}</span>
                            </div>
                            <span className="font-medium text-gray-900">{fd.bank}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="font-bold text-blue-600 text-lg">{fd.rate}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium px-8 py-3">
                  Get Started with FD Investment
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </main>

      <Footer />
    </div>
  )
}