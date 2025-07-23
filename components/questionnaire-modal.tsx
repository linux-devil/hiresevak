"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { submitQuestionnaire } from "@/lib/questionnaire"

interface QuestionnaireModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  currentLocation: string
  primaryConcern: string[]
  serviceInterest: string[]
  investmentRange: string
  timeline: string
  name: string
  email: string
  phone: string
  countryCode: string
}

const countryCodes = [
  { code: '+1', country: 'US/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' }
]

const questions = [
  {
    id: 'currentLocation',
    type: 'single',
    question: 'Where are you currently based?',
    options: ['United States', 'United Kingdom', 'Canada', 'Australia', 'UAE', 'Singapore', 'Other']
  },
  {
    id: 'primaryConcern',
    type: 'multiple',
    question: 'What are your primary concerns as an NRI? (Select all that apply)',
    options: [
      'Tax compliance and filing',
      'Property management in India',
      'Investment and wealth management',
      'Document procurement (PAN, OCI, etc.)',
      'Estate planning and succession',
      'Family support and care'
    ]
  },
  {
    id: 'serviceInterest',
    type: 'multiple',
    question: 'Which services are you most interested in?',
    options: [
      'Income Tax Return Filing',
      'Investment Management',
      'Property Management',
      'Document Services',
      'Estate Planning',
      'Banking Services'
    ]
  },
  {
    id: 'investmentRange',
    type: 'single',
    question: 'What is your approximate investment capacity?',
    options: [
      'Under $10,000',
      '$10,000 - $50,000',
      '$50,000 - $100,000',
      '$100,000 - $500,000',
      'Above $500,000'
    ]
  },
  {
    id: 'timeline',
    type: 'single',
    question: 'When do you need our services?',
    options: [
      'Immediately (within 1 week)',
      'Within 1 month',
      'Within 3 months',
      'Within 6 months',
      'Just exploring for now'
    ]
  }
]

export function QuestionnaireModal({ isOpen, onClose }: QuestionnaireModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    currentLocation: '',
    primaryConcern: [],
    serviceInterest: [],
    investmentRange: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    countryCode: '+1'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const totalSteps = questions.length + 1 // +1 for contact details

  const handleOptionSelect = (questionId: string, value: string, isMultiple = false) => {
    if (isMultiple) {
      const currentValues = formData[questionId as keyof FormData] as string[]
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
      setFormData(prev => ({ ...prev, [questionId]: newValues }))
    } else {
      setFormData(prev => ({ ...prev, [questionId]: value }))
    }
  }

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const submissionData = {
        current_location: formData.currentLocation,
        primary_concern: formData.primaryConcern,
        service_interest: formData.serviceInterest,
        investment_range: formData.investmentRange,
        timeline: formData.timeline,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country_code: formData.countryCode,
      }

      const result = await submitQuestionnaire(submissionData)
      
      if (result.success) {
        console.log('Questionnaire submitted successfully:', result.data)
        if ('warning' in result) {
          console.warn(result.warning)
        }
        setIsCompleted(true)
      } else {
        console.error('Failed to submit questionnaire:', result.error)
        // Show more detailed error message
        const errorMessage = result.error?.message || 'Unknown error occurred'
        alert(`Failed to submit questionnaire: ${errorMessage}`)
      }
    } catch (error) {
      console.error('Submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`An error occurred: ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setCurrentStep(0)
    setFormData({
      currentLocation: '',
      primaryConcern: [],
      serviceInterest: [],
      investmentRange: '',
      timeline: '',
      name: '',
      email: '',
      phone: '',
      countryCode: '+1'
    })
    setIsCompleted(false)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Progress bar */}
        <div className="h-2 bg-gray-200">
          <motion.div
            className="h-full bg-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {isCompleted ? (
              <motion.div
                key="completed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We've received your information and will contact you within 24 hours with personalized recommendations.
                </p>
                <Button
                  onClick={handleClose}
                  className="bg-yellow-500 text-black hover:bg-yellow-600"
                >
                  Close
                </Button>
              </motion.div>
            ) : currentStep < questions.length ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-2">
                    Question {currentStep + 1} of {totalSteps}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {questions[currentStep].question}
                  </h2>
                </div>

                <div className="space-y-3 mb-8">
                  {questions[currentStep].options.map((option, index) => {
                    const isSelected = questions[currentStep].type === 'multiple'
                      ? (formData[questions[currentStep].id as keyof FormData] as string[]).includes(option)
                      : formData[questions[currentStep].id as keyof FormData] === option

                    return (
                      <motion.button
                        key={option}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleOptionSelect(
                          questions[currentStep].id,
                          option,
                          questions[currentStep].type === 'multiple'
                        )}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all hover:border-yellow-300 ${
                          isSelected
                            ? 'border-yellow-500 bg-yellow-50'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 font-medium">{option}</span>
                          {isSelected && (
                            <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </motion.button>
                    )
                  })}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={
                      questions[currentStep].type === 'multiple'
                        ? (formData[questions[currentStep].id as keyof FormData] as string[]).length === 0
                        : !formData[questions[currentStep].id as keyof FormData]
                    }
                    className="bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-2">
                    Final Step
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    How can we reach you?
                  </h2>
                  <p className="text-gray-600">
                    We'll use this information to provide you with personalized recommendations.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                        className="px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none bg-white text-sm min-w-[120px]"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:outline-none"
                        placeholder="Enter your phone number (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || isSubmitting}
                    className="bg-yellow-500 text-black hover:bg-yellow-600 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Check className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}