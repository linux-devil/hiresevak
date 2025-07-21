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
                alt="mySevak NRI Tax & Compliance Dashboard"
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
                    <h3 className="font-semibold">mySevak AI Assistant</h3>
                    <p className="text-sm text-gray-700">Ask me anything about our services</p>
                  </div>
                  <div id="chatMessages" className="p-4 h-80 overflow-y-auto space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-800">Hello! I'm your mySevak assistant. Click on any service on the right to learn more about how I can help you.</p>
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
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-500 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/tax.png" alt="Tax & Compliance" className="w-16 h-16" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">Tax & Regulatory Compliance</h3>
                  <p className="text-lg text-white mb-6">
                    Comprehensive tax management for NRIs across multiple jurisdictions. From ITR filing to DTAA benefits, 
                    we ensure complete compliance with Indian and international tax regulations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Indian Income Tax Returns (ITR)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Cross-border Tax Planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>TDS Management & Refunds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>DTAA Benefits & Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Investment Management */}
          <FadeInUp className="mb-8" delay={0.1}>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-500 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/investment-management.png" alt="Investment Management" className="w-16 h-16" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">Investment Management</h3>
                  <p className="text-lg text-white mb-6">
                    Professional portfolio management and diversified investment solutions tailored for NRI needs 
                    with expert guidance and compliance support.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Mutual Funds & SIP Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Portfolio Management Services (PMS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Retirement & Wealth Planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Bonds & Fixed Income Securities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Document Processing */}
          <FadeInUp delay={0.2}>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-500 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/banking.png" alt="Document Processing" className="w-16 h-16" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">Document Processing</h3>
                  <p className="text-lg text-white mb-6">
                    Streamlined document procurement and processing services for all your official requirements, 
                    handled remotely with complete accuracy and compliance.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>PAN Card Applications & Updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>OCI & Passport Services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Banking & Account Services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Attestation & Legalization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>


      {/* Services Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Complete Remote Management Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing management, we handle every aspect of your Indian affairs 
              with professional expertise and cutting-edge digital solutions
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInUp delay={0.1}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="text-yellow-600">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                      <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"/>
                      <path d="M4 24h40"/>
                      <path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clip-rule="evenodd"/>
                      <path d="M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Discovery & Assessment</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Comprehensive evaluation of all your Indian affairs including financial, legal, and personal requirements
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete needs assessment across all service areas</li>
                  <li>• Priority mapping and timeline creation</li>
                  <li>• Dedicated relationship manager assignment</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">02</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Digital Execution</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Professional handling of all tasks through secure digital channels and trusted local networks
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 100% digital processing where possible</li>
                  <li>• Trusted local team for on-ground requirements</li>
                  <li>• Real-time updates and progress tracking</li>
                </ul>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="border border-gray-200 rounded-xl p-8 hover:border-yellow-200 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 font-bold">03</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ongoing Management</h3>
                <p className="text-gray-600 mb-4 flex-1">
                  Continuous monitoring, proactive updates, and strategic guidance across all your Indian interests
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Proactive monitoring and maintenance</li>
                  <li>• Regular review and optimization</li>
                  <li>• 24/7 support and emergency assistance</li>
                </ul>
              </div>
            </FadeInUp>
          </div>
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
              Join thousands of NRIs who trust mySevak as their comprehensive remote concierge for all Indian affairs
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
