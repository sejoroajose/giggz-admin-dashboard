import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import Button from '../common/Button'
import Input from '../common/Input'
import Checkbox from '../common/CheckBox.jsx'

function Login() {
  const navigate = useNavigate()
  const { login, isLoading, error, clearError, isAuthenticated } = useAuth()
  const { showError, showSuccess } = useNotification()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [validationErrors, setValidationErrors] = useState({})

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    clearError()
    setValidationErrors({})
  }, [formData.email, formData.password, clearError])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }

    if (!formData.password) {
      errors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const result = await login(
      formData.email,
      formData.password,
      formData.rememberMe
    )

    if (result.success) {
      showSuccess('Welcome back!', 'You have successfully signed in.')
      navigate('/dashboard')
    } else {
      showError(
        'Sign in failed',
        result.error || 'Please check your credentials and try again.'
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600 text-sm">
          Sign in back to your account by filling the form below with your
          personal information.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            value={formData.email}
            onChange={handleInputChange}
            error={validationErrors.email}
            disabled={isLoading}
            icon="/auth-flow/mail-tracking.png"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password here"
            value={formData.password}
            onChange={handleInputChange}
            error={validationErrors.password}
            disabled={isLoading}
            icon="/auth-flow/lock-circle.png"
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="p-1 hover:bg-gray-100 rounded"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            }
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <Checkbox
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            disabled={isLoading}
            label="Keep me signed in"
          />

          <Link
            to="/auth/forgot-password"
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Forgot password
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          loading={isLoading}
          disabled={isLoading}
        >
          Sign in
        </Button>

        <div className="text-center text-sm text-gray-600">
          <p>
            If you can't login, please email helpdesk with error messages on:
          </p>
          <a
            href="mailto:adminhelp@crenova.com"
            className="text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            adminhelp@crenova.com
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
