import React, { useState } from 'react'
import Button from '../common/Button'

const SecuritySettings = () => {
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [enable2FA, setEnable2FA] = useState(false)
  const [contactNumber, setContactNumber] = useState('+234 - 0903 - 408 - 2573')

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }))
  }

  const handleSaveChanges = () => {
    console.log('Saving security settings:', { passwordData, enable2FA, contactNumber })
  }

  const handleDiscardChanges = () => {
    setPasswordData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    setEnable2FA(false)
    setContactNumber('+234 - 0903 - 408 - 2573')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Security Settings</h2>
      </div>

      {/* Change Password Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Change my password</h3>
        <p className="text-gray-600 mb-6">Update your details and verify</p>

        <div className="space-y-6 max-w-lg">
          {/* Old Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Old Password
            </label>
            <input
              type="password"
              value={passwordData.oldPassword}
              onChange={(e) => handlePasswordChange('oldPassword', e.target.value)}
              placeholder="Old Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
              placeholder="New Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Two Factor Authentication Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Enable Two Factor Authentication</h3>
        <div className="space-y-4">
          <p className="text-gray-600">Add an extra level of security to your account.</p>
          <p className="text-gray-600">An OTP would be sent to this number every time you want to access your account.</p>
          
          {/* 2FA Toggle */}
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-700">Enable 2FA?</span>
            <button
              onClick={() => setEnable2FA(!enable2FA)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                enable2FA ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  enable2FA ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Contact Number (only show when 2FA is enabled) */}
          {enable2FA && (
            <div className="max-w-lg">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact number
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                  <span className="w-6 h-4 bg-green-500 rounded-sm mr-2"></span>
                  <span className="text-sm">🇳🇬</span>
                </div>
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="flex-1 px-3 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-12">
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
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default SecuritySettings