"use client"

import { useAuth, UserButton } from "@clerk/nextjs"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "./auth-modal"

interface ProtectedChatProps {
  children: React.ReactNode
}

export function ProtectedChat({ children }: ProtectedChatProps) {
  const { isSignedIn, isLoaded } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <>
        <div className="relative">
          {/* Blurred background */}
          <div className="filter blur-sm pointer-events-none select-none">
            {children}
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-xl">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm mx-4 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign In Required</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Please sign in to access our AI assistant and personalized financial advice.
                </p>
              </div>
              <Button 
                onClick={() => setShowAuthModal(true)}
                className="bg-yellow-500 text-black hover:bg-yellow-600 font-medium w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </>
    )
  }

  return (
    <div>
      {/* User button in top right of chat interface */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">AI Assistant</h3>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
            }
          }}
          afterSignOutUrl="/"
        />
      </div>
      {children}
    </div>
  )
}