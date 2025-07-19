"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "Understanding the RBI Guidelines for NRI Investing in India",
      excerpt:
        "Comprehensive guide to Reserve Bank of India regulations for Non-Resident Indian investments, including portfolio investment schemes and compliance requirements.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Investment Guidelines",
      slug: "rbi-guidelines-nri-investing-india",
    },
    {
      title: "DTAA Benefits: How to Avoid Double Taxation as an NRI",
      excerpt: "Learn how Double Taxation Avoidance Agreements work and how NRIs can optimize their tax liability across multiple countries.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Tax Planning",
      slug: "dtaa-benefits-avoid-double-taxation-nri",
    },
    {
      title: "NRI Property Investment: Tax Implications and Compliance",
      excerpt: "Everything you need to know about buying, selling, and managing property in India as an NRI, including TDS and capital gains.",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Property",
      slug: "nri-property-investment-tax-implications",
    },
    {
      title: "FBAR and FATCA: US Reporting Requirements for NRIs",
      excerpt: "Understanding Foreign Bank Account Reporting and Foreign Account Tax Compliance Act requirements for NRIs in the US.",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "US Compliance",
      slug: "fbar-fatca-us-reporting-requirements-nris",
    },
    {
      title: "Estate Planning for NRIs: Cross-Border Considerations",
      excerpt:
        "Essential strategies for NRI estate planning, including will preparation, inheritance tax implications, and succession planning across jurisdictions.",
      date: "December 20, 2024",
      readTime: "12 min read",
      category: "Estate Planning",
      slug: "estate-planning-nris-cross-border",
    },
    {
      title: "NRI Tax Filing: Step-by-Step Guide for FY 2023-24",
      excerpt: "Complete walkthrough of Indian tax return filing process for NRIs, including required forms and documentation.",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Tax Filing",
      slug: "nri-tax-filing-guide-fy-2023-24",
    },
    {
      title: "Everything You Need to Know About NRI Gift Tax in India",
      excerpt: "Comprehensive guide to gift tax implications for NRIs, including exemptions, compliance requirements, and tax-efficient gifting strategies.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Gift Tax",
      slug: "nri-gift-tax-india-complete-guide",
    },
    {
      title: "Guide to Investing in Bonds for NRIs: Types, Taxes & Benefits",
      excerpt: "Complete overview of bond investment opportunities for NRIs in India, covering government bonds, corporate bonds, tax implications and benefits.",
      date: "December 5, 2024",
      readTime: "11 min read",
      category: "Investment",
      slug: "guide-investing-bonds-nris",
    },
    {
      title: "Remote Concierge Services for NRIs: Complete Digital Solution Guide",
      excerpt: "Comprehensive guide to remote concierge services that handle all your Indian affairs digitally, from property management to document procurement.",
      date: "December 1, 2024",
      readTime: "13 min read",
      category: "Digital Services",
      slug: "remote-concierge-services-nris-complete-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">NRI Tax & Compliance Resources</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Essential guides, insights, and updates for Non-Resident Indians navigating tax and compliance requirements.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="bg-gradient-to-r from-[#c4f82a] to-[#a8e020] rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl">
                <div className="text-sm font-medium text-gray-800 mb-4">FEATURED POST</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Understanding the RBI Guidelines for NRI Investing in India
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Comprehensive guide covering the latest Reserve Bank of India regulations for Non-Resident Indian investments,
                  including portfolio investment schemes, compliance requirements, and investment limits.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    January 15, 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />8 min read
                  </div>
                </div>
                <Link href="/blog/rbi-guidelines-nri-investing-india">
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay up to date with the latest insights and updates</p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="text-sm font-medium text-yellow-600 mb-2">{post.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-gray-900 hover:text-yellow-600">
                          Read more
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated on NRI Tax Changes</h2>
            <p className="text-xl text-gray-300 mb-8">Get the latest tax updates and compliance insights delivered to your inbox.</p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              />
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 px-6">Subscribe</Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
