"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Shield, TrendingUp, Users, ArrowRight, Play, FileText, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeInUp, SlideInLeft } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  useEffect(() => {
    // Calculator functionality
    const updateCalculation = (amount: number, years: number) => {
      const principal = amount;
      const sevakRate = 0.05;
      const enbdRate = 0.0215;
      
      const sevakInterest = principal * sevakRate * years;
      const enbdInterest = principal * enbdRate * years;
      const totalAmount = principal + sevakInterest;
      
      const totalAmountEl = document.getElementById('totalAmount');
      const sevakInterestEl = document.getElementById('sevakInterest');
      const enbdInterestEl = document.getElementById('enbdInterest');
      const sevakBarEl = document.getElementById('sevakBar');
      const enbdBarEl = document.getElementById('enbdBar');
      
      if (totalAmountEl) totalAmountEl.textContent = '$' + Math.round(totalAmount).toLocaleString();
      if (sevakInterestEl) sevakInterestEl.textContent = '$' + Math.round(sevakInterest).toLocaleString();
      if (enbdInterestEl) enbdInterestEl.textContent = '$' + Math.round(enbdInterest).toLocaleString();
      
      // Update bar heights based on interest comparison
      const maxInterest = Math.max(sevakInterest, enbdInterest);
      const sevakHeight = (sevakInterest / maxInterest) * 100;
      const enbdHeight = (enbdInterest / maxInterest) * 100;
      
      if (sevakBarEl) sevakBarEl.style.height = sevakHeight + '%';
      if (enbdBarEl) enbdBarEl.style.height = enbdHeight + '%';
    };

    // Amount slider handler
    const amountSlider = document.getElementById('amountSlider') as HTMLInputElement;
    const updateSliderFill = (slider: HTMLInputElement) => {
      const value = parseInt(slider.value);
      const min = parseInt(slider.min);
      const max = parseInt(slider.max);
      const percentage = ((value - min) / (max - min)) * 100;
      slider.style.background = `linear-gradient(to right, #c4f82a 0%, #c4f82a ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
    };
    
    if (amountSlider) {
      updateSliderFill(amountSlider); // Initial fill
      
      amountSlider.addEventListener('input', (e) => {
        const slider = e.target as HTMLInputElement;
        const amount = parseInt(slider.value);
        const fdAmountEl = document.getElementById('fdAmount');
        if (fdAmountEl) fdAmountEl.textContent = '$' + amount.toLocaleString();
        
        updateSliderFill(slider); // Update fill on change
        
        const activeButton = document.querySelector('[data-years].bg-yellow-500') as HTMLElement;
        const years = activeButton ? parseInt(activeButton.dataset.years || '1') : 1;
        updateCalculation(amount, years);
      });
    }

    // Time period buttons handler
    const timeButtons = document.getElementById('timeButtons');
    if (timeButtons) {
      timeButtons.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON') {
          // Remove active class from all buttons
          timeButtons.querySelectorAll('button').forEach(btn => {
            btn.className = 'px-6 py-3 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors';
          });
          
          // Add active class to clicked button
          target.className = 'px-6 py-3 rounded-lg font-medium bg-yellow-500 text-black hover:bg-yellow-600 transition-colors';
          
          const years = parseInt(target.dataset.years || '1');
          const amount = amountSlider ? parseInt(amountSlider.value) : 5000;
          updateCalculation(amount, years);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Financial Services 
                  <br />
                  for NRIs,
                  <br />
                  Made Easy
                  <span className="inline-block ml-4">
                    <svg width="80" height="40" viewBox="0 0 80 40" className="text-yellow-500">
                      <path
                        d="M10 20 Q 40 5, 70 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                      />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-700 max-w-md"
                >
                  Bridging the distance with digital solutions. We handle everything from tax compliance 
                  and property management to document procurement - all remotely, saving you substantial time and effort.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4"
              >
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-3 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>
          </SlideInLeft>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/dashboard-mockup.png"
                alt="Sevak NRI Tax & Compliance Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Concierge Dashboard</p>
                    <p className="text-lg font-bold text-yellow-600">15 Tasks • All On Track</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute -top-4 -right-4 bg-yellow-500 rounded-full p-3"
            >
              <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Interactive Chat Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our AI Assistant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant answers about our services. Click on any service below to see how our AI assistant can help you.
            </p>
          </FadeInUp>

          <div className="grid lg:grid-cols-[3fr,2fr] gap-8">
            {/* Chat Interface */}
            <FadeInUp>
              <div className="bg-gray-50 rounded-2xl p-6 h-[500px]">
                <div className="bg-white rounded-xl h-full shadow-inner">
                  <div className="bg-yellow-100 text-black px-6 py-4 rounded-t-xl border-b border-yellow-200">
                    <h3 className="font-semibold">Sevak AI Assistant</h3>
                    <p className="text-sm text-gray-700">Ask me anything about our services</p>
                  </div>
                  <div id="chatMessages" className="p-4 h-80 overflow-y-auto space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-800">Hello! I'm your Sevak assistant. Click on any service on the right to learn more about how I can help you.</p>
                      </div>
                    </div>
                    <div id="dynamicMessages" className="space-y-4"></div>
                  </div>
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        disabled
                      />
                      <Button size="sm" className="bg-yellow-500 text-black hover:bg-yellow-600">
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Service Options */}
            <FadeInUp delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Click to explore our services:</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Income Tax Return Filing",
                      description: "ITR filing with DTAA benefits",
                      response: "Our ITR filing service includes comprehensive tax return preparation for NRIs with income in India. We handle all documentation, ensure DTAA benefits, and manage your tax obligations efficiently."
                    },
                    {
                      title: "Investment Management", 
                      description: "Mutual funds, PMS, retirement planning",
                      response: "Let me guide you through our investment services! We offer diversified portfolio management including mutual funds, SIPs, PMS, and retirement planning specifically designed for NRIs. Our certified advisors help optimize your investments while ensuring tax efficiency and regulatory compliance."
                    },
                    {
                      title: "Document Procurement",
                      description: "PAN, OCI, passport, banking services", 
                      response: "Our document procurement services include PAN card applications, OCI card processing, passport renewal, and NRE/NRO bank account opening with minimal paperwork from your end."
                    },
                    {
                      title: "Property Management",
                      description: "Remote property management and legal support",
                      response: "Managing property from abroad is complex, but I'm here to help! We provide end-to-end property management including tenant relations, rent collection, legal dispute resolution, and maintenance coordination. Our local network ensures your property interests are protected."
                    },
                    {
                      title: "Estate Planning & Succession",
                      description: "Will drafting & POA guidance",
                      response: "Estate planning for NRIs involves unique cross-border considerations. I can help you with will drafting, succession planning, power of attorney guidance, and comprehensive family support services to ensure smooth asset transfer and family care coordination."
                    }
                  ].map((service, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const messagesContainer = document.getElementById('dynamicMessages');
                        const userMessage = document.createElement('div');
                        userMessage.className = 'flex items-start gap-3 justify-end';
                        userMessage.innerHTML = `
                          <div className="bg-yellow-100 rounded-lg p-3 max-w-xs">
                            <p className="text-sm text-gray-800">${service.title}</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                          </div>
                        `;
                        messagesContainer.appendChild(userMessage);
                        
                        setTimeout(() => {
                          const aiMessage = document.createElement('div');
                          aiMessage.className = 'flex items-start gap-3';
                          aiMessage.innerHTML = `
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">AI</span>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3 max-w-sm">
                              <p className="text-sm text-gray-800">${service.response}</p>
                            </div>
                          `;
                          messagesContainer.appendChild(aiMessage);
                          document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
                        }, 1000);
                        
                        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
                      }}
                      className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-yellow-300 hover:bg-yellow-50 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600">{service.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-500" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* USD Fixed Deposit Calculator Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Invest in USD Fixed Deposits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your savings with our competitive USD fixed deposit rates. Calculate your returns and start investing today.
            </p>
          </FadeInUp>

          <FadeInUp>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">USD Fixed Deposit Calculator</h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Compare returns from different USD fixed deposit options and make informed investment decisions.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Amount: <span id="fdAmount" className="font-bold text-yellow-600">$5,000</span>
                      </label>
                      <input 
                        id="amountSlider"
                        type="range" 
                        min="1000" 
                        max="100000" 
                        step="1000"
                        defaultValue="5000"
                        className="w-full h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>$1,000</span>
                        <span>$100,000</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Time Period</label>
                      <div id="timeButtons" className="flex gap-3">
                        <button data-years="1" className="px-6 py-3 rounded-lg font-medium bg-yellow-500 text-black hover:bg-yellow-600 transition-colors">1 Year</button>
                        <button data-years="3" className="px-6 py-3 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">3 Years</button>
                        <button data-years="5" className="px-6 py-3 rounded-lg font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">5 Years</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Investment Returns</h4>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Total Maturity Amount</p>
                      <p id="totalAmount" className="text-4xl font-bold text-yellow-600">$5,250</p>
                    </div>
                    
                    {/* Vertical Bar Comparison */}
                    <div className="border-t pt-6">
                      <div className="flex items-end justify-center gap-8 h-32 mb-6">
                        <div className="flex flex-col items-center">
                          <div className="relative w-16 h-24 bg-gray-100 rounded-t-lg overflow-hidden">
                            <div 
                              id="sevakBar"
                              className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-500 to-yellow-400 transition-all duration-500 rounded-t-lg"
                              style={{ height: '100%' }}
                            >
                              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                                <span className="text-xs font-bold text-white">2.3x</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-center mt-2">
                            <p className="font-medium text-gray-900">Sevak</p>
                            <p className="text-xs text-gray-600">@5.0%*</p>
                            <p id="sevakInterest" className="text-sm font-bold text-yellow-600">$250</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <div className="relative w-16 h-24 bg-gray-100 rounded-t-lg overflow-hidden">
                            <div 
                              id="enbdBar"
                              className="absolute bottom-0 w-full bg-gradient-to-t from-gray-500 to-gray-400 transition-all duration-500 rounded-t-lg"
                              style={{ height: '43%' }}
                            ></div>
                          </div>
                          <div className="text-center mt-2">
                            <p className="font-medium text-gray-900">ENBD Bank</p>
                            <p className="text-xs text-gray-600">@2.15%*</p>
                            <p id="enbdInterest" className="text-sm font-bold text-gray-500">$108</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <p className="text-lg font-bold text-gray-900 mb-1">Interest Comparison</p>
                        <p className="text-sm text-gray-600">* Annual interest rates</p>
                      </div>
                    </div>

                    <Link href="/nri-fds">
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-medium py-3 text-lg">
                        Start Your Investment Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-slate-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Virtual Financial Desk for Global Indians</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial services for NRIs - from tax compliance to investment management, 
              all handled remotely with professional expertise and digital efficiency
            </p>
          </FadeInUp>

          {/* Tax & Regulatory Compliance */}
          <FadeInUp className="mb-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/tax.png" alt="Tax & Compliance" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-black">Tax & Regulatory Compliance</h3>
              </div>
              
              <p className="text-lg text-black mb-8 max-w-4xl">
                We provide comprehensive tax and regulatory compliance services for NRIs, ensuring you stay compliant with Indian tax laws while maximizing your tax benefits.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Residential Status Determination</h4>
                  <p className="text-sm text-black">Expert guidance on determining your residential status for tax purposes</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">ITR Filing (India & Cross-Border)</h4>
                  <p className="text-sm text-black">Comprehensive income tax return filing for all your global income</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">DTAA Benefits & Tax Planning</h4>
                  <p className="text-sm text-black">Maximize tax benefits through Double Taxation Avoidance Agreements</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">FEMA/RBI Consultancy</h4>
                  <p className="text-sm text-black">Expert advice on FEMA regulations and RBI guidelines for NRIs</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Investment Management */}
          <FadeInUp className="mb-8" delay={0.1}>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/investment-management.png" alt="Investment Management" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-black">Investment Management</h3>
              </div>
              
              <p className="text-lg text-black mb-8 max-w-4xl">
                Grow your wealth with our specialized investment solutions designed for NRIs, offering diverse options across multiple asset classes and jurisdictions.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Mutual Fund Investments</h4>
                  <p className="text-sm text-black">Curated mutual fund portfolios for NRIs with different risk profiles and investment horizons</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Portfolio Management Services</h4>
                  <p className="text-sm text-black">Professionally managed investment portfolios tailored to your specific financial goals</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">GIFT City Funds</h4>
                  <p className="text-sm text-black">Access to exclusive investment opportunities in Gujarat International Finance Tec-City</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Retirement Planning</h4>
                  <p className="text-sm text-black">Long-term investment strategies for a secure and comfortable retirement</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Estate Planning & Succession */}
          <FadeInUp delay={0.2}>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-black">Estate Planning & Succession</h3>
              </div>
              
              <p className="text-lg text-black mb-8 max-w-4xl">
                Secure your family's future with our comprehensive estate planning services designed specifically for NRIs with cross-border assets and obligations.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Will Drafting (India & Cross-Border)</h4>
                  <p className="text-sm text-black">Legally sound wills that are valid across multiple jurisdictions and compliant with local laws</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Power of Attorney Guidance</h4>
                  <p className="text-sm text-black">Expert advice on setting up and managing POAs for your assets and affairs in India</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Nomination & Beneficiary Planning</h4>
                  <p className="text-sm text-black">Strategic nomination planning for all your financial assets and investment accounts</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Professional Executor Services</h4>
                  <p className="text-sm text-black">Reliable and professional execution of your will and comprehensive estate plans</p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Document Procurement */}
          <FadeInUp delay={0.3}>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/banking.png" alt="Document Procurement" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-black">Document Procurement</h3>
              </div>
              
              <p className="text-lg text-black mb-8 max-w-4xl">
                We handle all your document-related requirements in India, saving you time and eliminating the hassle of complex paperwork from abroad.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">PAN Card Application/Update</h4>
                  <p className="text-sm text-black">Hassle-free PAN card services for NRIs including new applications and updates</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">OCI Card & Passport Renewal</h4>
                  <p className="text-sm text-black">Complete assistance with OCI applications and Indian passport renewals</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">NRE/NRO Bank Account Opening</h4>
                  <p className="text-sm text-black">Streamlined process for opening and managing NRI bank accounts</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl hover:bg-yellow-50 transition-colors border border-yellow-200">
                  <h4 className="font-semibold text-black mb-3">Document Legalization</h4>
                  <p className="text-sm text-black">Authentication and legalization of documents for cross-border use</p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>




      {/* CTA Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-black mb-4">
              Ready to Experience True Peace of Mind?
            </h2>
            <p className="text-xl text-black mb-8">
              Join thousands of NRIs who trust Sevak as their comprehensive remote concierge for all Indian affairs
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3">
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white/10 px-8 py-3"
              >
                Download Guide
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>


      <Footer />
    </div>
  )
}
