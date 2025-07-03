import React, { useState, useEffect } from 'react'
import Button from '../common/Button'
import RichTextEditor from './RichTextEditor'

const TermsEditModal = ({ isOpen, onClose, termsData, onSave }) => {
  const [formData, setFormData] = useState({
    background: '',
    acceptanceOfTerms: '',
    eligibility: '',
    accountCreation: '',
    userObligations: '',
    lastUpdated: ''
  })

  useEffect(() => {
    if (isOpen && termsData) {
      setFormData({
        background: termsData.background,
        acceptanceOfTerms: termsData.acceptanceOfTerms,
        eligibility: termsData.eligibility,
        accountCreation: termsData.accountCreation,
        userObligations: termsData.userObligations,
        lastUpdated: termsData.lastUpdated
      })
    }
  }, [isOpen, termsData])

  if (!isOpen) return null

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    const updatedTerms = {
      ...formData,
      lastUpdated: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    onSave(updatedTerms)
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 text-center">
          <div className="inline-block w-full max-w-6xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Terms & Conditions</h2>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleSave}
                  className="bg-blue-900 hover:bg-blue-800 text-white"
                >
                  SAVE
                </Button>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8 max-h-[80vh] overflow-y-auto">
              {/* Background Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Background</h3>
                <RichTextEditor
                  value={formData.background}
                  onChange={(value) => handleFieldChange('background', value)}
                  placeholder="Enter background information..."
                />
              </div>

              {/* Acceptance of Terms */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Acceptance of terms</h3>
                <RichTextEditor
                  value={formData.acceptanceOfTerms}
                  onChange={(value) => handleFieldChange('acceptanceOfTerms', value)}
                  placeholder="Enter acceptance of terms..."
                />
              </div>

              {/* Use of Giggz */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Use of Giggz</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Eligibility:</h4>
                    <RichTextEditor
                      value={formData.eligibility}
                      onChange={(value) => handleFieldChange('eligibility', value)}
                      placeholder="Enter eligibility requirements..."
                    />
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">Account Creation:</h4>
                    <RichTextEditor
                      value={formData.accountCreation}
                      onChange={(value) => handleFieldChange('accountCreation', value)}
                      placeholder="Enter account creation requirements..."
                    />
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-800 mb-2">User Obligations:</h4>
                    <RichTextEditor
                      value={formData.userObligations}
                      onChange={(value) => handleFieldChange('userObligations', value)}
                      placeholder="Enter user obligations..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsEditModal