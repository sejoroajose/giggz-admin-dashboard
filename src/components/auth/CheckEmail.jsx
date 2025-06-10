import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import Button from '../common/Button'

function CheckEmail() {
  const navigate = useNavigate()
  const { resetEmail, forgotPassword, isLoading } = useAuth()
  const { showSuccess, showError } = useNotification()

  const [countdown, setCountdown] = useState(60) // 60 seconds countdown
  const [canResend, setCanResend] = useState(false)

  // Redirect if no reset email is set
  useEffect(() => {
    if (!resetEmail) {
      navigate('/auth/forgot-password')
    }
  }, [resetEmail, navigate])

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  // Format countdown timer
  const formatCountdown = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`
  }

  // Handle resend email
  const handleResendEmail = async () => {
    if (!canResend || !resetEmail) return

    const result = await forgotPassword(resetEmail)

    if (result.success) {
      showSuccess('Email sent', 'A new reset link has been sent to your email.')
      setCountdown(60)
      setCanResend(false)
    } else {
      showError('Resend failed', 'Failed to resend email. Please try again.')
    }
  }

  // Handle open email app (would open default email client)
  const handleOpenEmailApp = () => {
    // This would typically open the user's default email client
    // For demo purposes, we'll just show a notification
    showSuccess(
      'Opening email app',
      'Your default email application should open shortly.'
    )
  }

  if (!resetEmail) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Check your email
        </h1>
        <p className="text-gray-600 text-sm">
          We have sent you an email containing a link to help you <br />
          get back into your account to{' '}
          <span className="font-medium text-gray-900">{resetEmail}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        {/* Open Email App Button */}
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleOpenEmailApp}
        >
          Open email app
        </Button>

        {/* Resend Link Section */}
        <div className="text-center">
          {!canResend ? (
            <p className="text-sm text-gray-600">
              Didn't receive the email?{' '}
              <span className="font-medium">
                Resend link in: {formatCountdown(countdown)}
              </span>
            </p>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Didn't receive the email?{' '}
                <button
                  onClick={handleResendEmail}
                  disabled={isLoading}
                  className="text-accent-600 hover:text-accent-700 font-medium transition-colors disabled:opacity-50"
                >
                  Click to resend
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Back to Sign In Link */}
        <div className="text-center text-sm pt-4">
          <Link
            to="/auth/login"
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Go back to sign in
          </Link>
        </div>
      </div>

      {/* Demo Note */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Demo Mode</h4>
        <p className="text-xs text-blue-600 mb-2">
          In a real application, you would check your email for the reset link.
        </p>
        <Link
          to="/auth/reset-password"
          className="inline-flex items-center text-xs text-blue-700 font-medium hover:text-blue-800 transition-colors"
        >
          Continue to Reset Password →
        </Link>
      </div>
    </div>
  )
}

export default CheckEmail
