import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import Button from '../common/Button'
import Input from '../common/Input'

function ForgotPassword() {
  const navigate = useNavigate()
  const { forgotPassword, isLoading, error, clearError } = useAuth()
  const { showError } = useNotification()

  const [email, setEmail] = useState('')
  const [validationError, setValidationError] = useState('')

  useEffect(() => {
    clearError()
    setValidationError('')
  }, [email, clearError])

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // Form validation
  const validateForm = () => {
    if (!email) {
      setValidationError('Email is required')
      return false
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError('Email is invalid')
      return false
    }

    return true
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const result = await forgotPassword(email)

    if (result.success) {
      // Navigate to check email screen
      navigate('/auth/check-email')
    } else {
      showError(
        'Reset failed',
        result.error || 'Failed to send reset email. Please try again.'
      )
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Forgot password?
        </h1>
        <p className="text-gray-600 text-sm">
          Enter your registered email address to reset your password <br />
          and we will send you a link to reset your password.
        </p>
      </div>

      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Type in your email address here..."
            value={email}
            onChange={handleEmailChange}
            error={validationError}
            disabled={isLoading}
            icon={Mail}
          />
        </div>

        {/* Reset Password Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          loading={isLoading}
          disabled={isLoading}
        >
          Reset password
        </Button>

        {/* Back to Sign In Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Go back to sign in? </span>
          <Link
            to="/auth/login"
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
