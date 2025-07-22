"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Shield, TrendingUp, Users, FileText, Clock, CheckCircle, ArrowRight, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/scroll-animation"

export default function ServicesPage() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [] as string[],
    requirements: ''
  })
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  })

  const serviceOptions = [
    'Property Management',
    'Tax Compliance', 
    'Estate Planning',
    'Investment Planning',
    'Document Procurement & Banking',
    'Support Services'
  ]

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '')
    // Check if it's between 10-15 digits (covers most international formats)
    return cleanPhone.length >= 10 && cleanPhone.length <= 15
  }

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }))
    if (email && !validateEmail(email)) {
      setValidationErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
    } else {
      setValidationErrors(prev => ({ ...prev, email: '' }))
    }
  }

  const handlePhoneChange = (phone: string) => {
    setFormData(prev => ({ ...prev, phone }))
    if (phone && !validatePhone(phone)) {
      setValidationErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number (10-15 digits)' }))
    } else {
      setValidationErrors(prev => ({ ...prev, phone: '' }))
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    const isEmailValid = !formData.email || validateEmail(formData.email)
    const isPhoneValid = !formData.phone || validatePhone(formData.phone)
    
    if (!isEmailValid || !isPhoneValid) {
      return // Don't submit if validation fails
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setShowModal(false)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      services: [],
      requirements: ''
    })
    setValidationErrors({
      email: '',
      phone: ''
    })
    alert('Thank you for your interest! We will contact you within 24 hours.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Remote Services for NRIs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empowering Non-Resident Indians through digital solutions. We bridge the geographical distance 
              to handle all your Indian affairs remotely - saving you substantial time and effort.
            </p>
            <Button 
              onClick={() => setShowModal(true)}
              className="bg-yellow-500 text-black hover:bg-yellow-600 px-8 py-3"
            >
              Explore Our Services
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* Core Services Header */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-800 mb-2">Essential Services for NRIs</h2>
              <p className="text-yellow-700">
                Critical services addressing the most significant challenges for NRIs - 
                property disputes, tax compliance issues, and family support needs that require professional expertise.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Globe,
                title: "Property Management",
                description: "Comprehensive property management addressing critical issues like illegal possession, encroachment, and title disputes - major sources of stress and financial loss for NRIs",
                features: [
                  "Property Dispute Resolution & Legal Assistance",
                  "Property Title Verification & Due Diligence", 
                  "Tenant Management & Rent Collection",
                  "Property Inspections & Maintenance Coordination",
                  "Buying & Selling Property Assistance",
                  "Virtual Property Tours & Relationship Management"
                ],
                highlighted: true
              },
              {
                icon: Shield,
                title: "Tax & Regulatory Compliance",
                description: "Essential tax compliance and advisory services crucial for correct tax liability determination in India and abroad, avoiding penalties and optimizing financial outcomes",
                features: [
                  "Residential Status Determination & Advisory",
                  "Income Tax Return (ITR) Filing (India & Cross-Border)",
                  "Tax Planning & Advisory with DTAA Benefits",
                  "FEMA/RBI Consultancy for Complex Regulations",
                  "FATCA & PFIC Compliance (US-based NRIs)",
                  "TDS Management & Refund Processing"
                ],
                highlighted: true
              },
              {
                icon: Users,
                title: "Estate Planning & Family Support",
                description: "Critical succession planning and family support services ensuring smooth asset transfer and addressing significant emotional needs of NRI families",
                features: [
                  "Will Drafting (India & Cross-Border)",
                  "Power of Attorney (POA) Guidance & Execution", 
                  "Nomination & Beneficiary Planning",
                  "Professional Executor Services",
                  "Health & Personal Care for Family Members",
                  "Medical Emergency Coordination"
                ],
                highlighted: true
              }
            ].map((service, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className={`${service.highlighted ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-16 h-16 ${service.highlighted ? 'bg-yellow-100' : 'bg-gray-100'} rounded-full flex items-center justify-center`}>
                      <service.icon className={`w-8 h-8 ${service.highlighted ? 'text-yellow-600' : 'text-gray-600'}`} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Document Services */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment & Document Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Essential services for wealth management and administrative efficiency - important for long-term financial growth and seamless operations.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Investment Management & Planning",
                description: "Comprehensive investment solutions addressing common NRI challenges: complex paperwork, inadequate support, and limited investment options",
                features: [
                  "Mutual Fund Investments (Equity, Debt, Hybrid)",
                  "Portfolio Management Services (PMS)",
                  "Diversified Investment Avenues & GIFT City Funds",
                  "Retirement Planning & Wealth Management",
                  "Startup Investments & Fractional Real Estate",
                  "Guaranteed Return Plans & Direct Equity"
                ],
                challenge: "Why NRIs struggle: Complex paperwork, inadequate RM support, tax compliance complexity, limited investment options"
              },
              {
                icon: FileText,
                title: "Document Procurement & Banking",
                description: "Streamlined document processing and banking services essential for all NRI financial transactions and compliance requirements",
                features: [
                  "PAN Card Application/Update (Essential for all transactions)",
                  "OCI Card Applications & Indian Passport Renewal",
                  "NRE/NRO Bank Account Opening & Services",
                  "Procurement of Vital Documents",
                  "Legalization & Attestation Services",
                  "Immigration Documentation Support"
                ]
              }
            ].map((service, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.challenge && (
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                      <p className="text-sm text-orange-800 font-medium">{service.challenge}</p>
                    </div>
                  )}
                  <ul className="space-y-2 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support Services */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal & Support Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Convenient lifestyle and business support services that enhance your quality of life and provide comprehensive assistance for various needs.
              </p>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "Personal Assistance",
                features: ["Bill Payments & Errands", "Local Purchases & Deliveries", "Travel Assistance & Planning"]
              },
              {
                icon: Globe,
                title: "Relocation Support", 
                features: ["Comprehensive Repatriation Assistance", "Logistical Coordination", "Administrative Support"]
              },
              {
                icon: Users,
                title: "Business & Legal",
                features: ["General Business Advisory", "Legal Documentation", "Compliance Assistance"]
              },
              {
                icon: Shield,
                title: "Immigration Support",
                features: ["Visa Documentation", "Immigration Guidance", "Golden Visa Assistance"]
              }
            ].map((service, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <ul className="space-y-2 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to comprehensive NRI service management that eliminates geographical barriers 
              and reduces the substantial time and effort typically required
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Comprehensive assessment of all your Indian affairs and service requirements"
              },
              {
                step: "02",
                title: "Digital Setup",
                description: "Secure onboarding with dedicated relationship manager and digital platform access"
              },
              {
                step: "03",
                title: "Professional Execution",
                description: "Expert handling through digital channels and trusted local networks"
              },
              {
                step: "04",
                title: "Ongoing Management",
                description: "Continuous monitoring, proactive updates, and 24/7 support availability"
              }
            ].map((item, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-black mb-4">
              Ready to Experience True Peace of Mind?
            </h2>
            <p className="text-xl text-black mb-8">
              Join thousands of NRIs who trust mySevak for comprehensive remote management of all Indian affairs
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium px-8 py-3">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-3"
              >
                Download Guide
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />

      {/* Requirements Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Tell Us About Your Requirements</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-600 mt-2">Help us understand your needs so we can provide the best service recommendations.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                      validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${
                    validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number (e.g., +1234567890)"
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Which services are you interested in? *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
                {formData.services.length === 0 && (
                  <p className="text-red-500 text-xs mt-1">Please select at least one service</p>
                )}
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe Your Specific Requirements
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Please describe your specific needs, timeline, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={
                    formData.services.length === 0 || 
                    !formData.name || 
                    !formData.email ||
                    !!validationErrors.email ||
                    !!validationErrors.phone
                  }
                  className="flex-1 bg-yellow-500 text-black hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Requirements
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to be contacted by our team regarding your requirements.
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
