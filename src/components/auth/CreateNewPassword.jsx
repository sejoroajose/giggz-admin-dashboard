import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import Button from '../common/Button'
import Input from '../common/Input'

function CreateNewPassword() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { resetPassword, isLoading, error, clearError } = useAuth()
  const { showError, showSuccess } = useNotification()

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  })

  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false,
  })

  const [validationErrors, setValidationErrors] = useState({})
  const [resetToken] = useState(searchParams.get('token') || 'demo_token') // Get token from URL

  // Clear errors when component mounts or form data changes
  useEffect(() => {
    clearError()
    setValidationErrors({})
  }, [formData, clearError])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  // Password strength validation
  const getPasswordStrength = (password) => {
    if (password.length < 6) return { strength: 'weak', message: 'Too short' }
    if (password.length < 8)
      return { strength: 'fair', message: 'Add more characters' }

    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    const criteriaMet = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
      Boolean
    ).length

    if (criteriaMet >= 3 && password.length >= 10) {
      return { strength: 'strong', message: 'Strong password' }
    } else if (criteriaMet >= 2 && password.length >= 8) {
      return { strength: 'good', message: 'Good password' }
    } else {
      return { strength: 'fair', message: 'Add numbers or symbols' }
    }
  }

  // Form validation
  const validateForm = () => {
    const errors = {}

    if (!formData.newPassword) {
      errors.newPassword = 'New password is required'
    } else if (formData.newPassword.length < 8) {
      errors.newPassword = 'Password must be at least 8 characters long'
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password'
    } else if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const result = await resetPassword(
      formData.newPassword,
      formData.confirmPassword,
      resetToken
    )

    if (result.success) {
      showSuccess(
        'Password successfully reset',
        'Your password has been reset, proceed to login'
      )

      // Redirect to login after a short delay
      setTimeout(() => {
        navigate('/auth/login')
      }, 2000)
    } else {
      showError(
        'Reset failed',
        result.error || 'Failed to reset password. Please try again.'
      )
    }
  }

  const passwordStrength = formData.newPassword
    ? getPasswordStrength(formData.newPassword)
    : null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Create a new password
        </h1>
        <p className="text-gray-600 text-sm">
          Input a password you can always remember to enable you <br />
          log into the eportal at ease.
        </p>
      </div>

      {/* Reset Password Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Field */}
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <Input
            id="newPassword"
            name="newPassword"
            type={showPasswords.newPassword ? 'text' : 'password'}
            placeholder="Enter your password here"
            value={formData.newPassword}
            onChange={handleInputChange}
            error={validationErrors.newPassword}
            disabled={isLoading}
            icon={Lock}
            rightElement={
              <button
                type="button"
                onClick={() => togglePasswordVisibility('newPassword')}
                className="p-1 hover:bg-gray-100 rounded"
                disabled={isLoading}
              >
                {showPasswords.newPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            }
          />

          {/* Password Strength Indicator */}
          {passwordStrength && formData.newPassword && (
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      passwordStrength.strength === 'weak'
                        ? 'w-1/4 bg-red-500'
                        : passwordStrength.strength === 'fair'
                        ? 'w-2/4 bg-yellow-500'
                        : passwordStrength.strength === 'good'
                        ? 'w-3/4 bg-blue-500'
                        : 'w-full bg-green-500'
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-medium ${
                    passwordStrength.strength === 'weak'
                      ? 'text-red-600'
                      : passwordStrength.strength === 'fair'
                      ? 'text-yellow-600'
                      : passwordStrength.strength === 'good'
                      ? 'text-blue-600'
                      : 'text-green-600'
                  }`}
                >
                  {passwordStrength.message}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showPasswords.confirmPassword ? 'text' : 'password'}
            placeholder="Enter your password here"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={validationErrors.confirmPassword}
            disabled={isLoading}
            icon={Lock}
            rightElement={
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="p-1 hover:bg-gray-100 rounded"
                disabled={isLoading}
              >
                {showPasswords.confirmPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            }
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

        {/* Back to Login Link */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Go back to login? </span>
          <Link
            to="/auth/login"
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  )
}

export default CreateNewPassword
