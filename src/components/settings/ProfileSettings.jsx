import React, { useState } from 'react'
import Button from '../common/Button'

const ProfileSettings = () => {
  const [showUploadArea, setShowUploadArea] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Prince',
    lastName: 'Chijioke',
    email: 'princechijioke@gmail.com',
    contactNumber: '+234 - 9203 - 828 - 3447',
    contactAddress: '1 Abaringa Crescent, Municipal Road',
    city: 'Lagos',
    state: 'Lagos',
    zipCode: '400102',
    country: 'Nigeria'
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSaveChanges = () => {
    setShowSuccessModal(true)
    setTimeout(() => {
      setShowSuccessModal(false)
    }, 2000)
  }

  const handleDiscardChanges = () => {
    // Reset form data to original values
    setFormData({
      firstName: 'Prince',
      lastName: 'Chijioke',
      email: 'princechijioke@gmail.com',
      contactNumber: '+234 - 9203 - 828 - 3447',
      contactAddress: '1 Abaringa Crescent, Municipal Road',
      city: 'Lagos',
      state: 'Lagos',
      zipCode: '400102',
      country: 'Nigeria'
    })
  }

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
        </div>

        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
          <p className="text-gray-600 mb-6">Update your details and verify</p>

          {/* Avatar Section */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💼</span>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="primary"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowUploadArea(!showUploadArea)}
              >
                Upload new picture
              </Button>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </div>
          </div>

          {/* Upload Area */}
          {showUploadArea && (
            <div className="mb-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center">
              <div className="space-y-2">
                <p className="text-gray-600">Drag and Drop to Upload</p>
                <p className="text-sm text-gray-500">Or click to browse file</p>
                <Button size="sm" className="mt-3">
                  Upload Now
                </Button>
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact number
            </label>
            <div className="flex">
              <div className="flex items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                <span className="w-6 h-4 bg-green-500 rounded-sm mr-2"></span>
                <span className="text-sm">🇳🇬</span>
              </div>
              <input
                type="text"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Contact Address */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact address
            </label>
            <input
              type="text"
              value={formData.contactAddress}
              onChange={(e) => handleInputChange('contactAddress', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Kano">Kano</option>
                <option value="Port Harcourt">Port Harcourt</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Lagos">Lagos</option>
                <option value="FCT">FCT</option>
                <option value="Kano">Kano</option>
                <option value="Rivers">Rivers</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip code
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-8">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleDiscardChanges}
            >
              Discard Changes
            </Button>
            <Button
              variant="primary"
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={handleSaveChanges}
            >
              Save Changes and Verify
            </Button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Done</h3>
            <p className="text-gray-600">Profile Updated Successfully</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileSettings