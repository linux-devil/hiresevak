"use client"

import { SignIn, SignUp, useAuth } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false)
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isSignedIn) {
      onClose()
    }
  }, [isSignedIn, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="p-6 pb-0 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">Sevak</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            {isSignUp 
              ? 'Join thousands of NRIs managing their finances with Sevak'
              : 'Sign in to access your personalized financial dashboard'
            }
          </p>
        </div>

        {/* Auth component */}
        <div className="p-6 pt-0">
          <div className="flex items-center justify-center">
            {isSignUp ? (
              <SignUp 
                routing="hash"
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-yellow-500 hover:bg-yellow-600 text-black",
                    card: "shadow-none border-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                  }
                }}
                redirectUrl="/"
              />
            ) : (
              <SignIn 
                routing="hash"
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-yellow-500 hover:bg-yellow-600 text-black",
                    card: "shadow-none border-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                  }
                }}
                redirectUrl="/"
              />
            )}
          </div>

          {/* Toggle between sign in/sign up */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-yellow-600 hover:text-yellow-700 p-0 ml-1 h-auto font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}