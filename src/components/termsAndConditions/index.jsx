import React, { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import TermsEditModal from './TermsEditModal'
import FAQList from './FAQList'
import AddFAQModal from './AddFAQModal'
import { mockTermsData, mockFAQs } from './mockData'

const TermsAndConditions = () => {
  const [termsData, setTermsData] = useState(mockTermsData)
  const [faqs, setFAQs] = useState(mockFAQs)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddFAQModalOpen, setIsAddFAQModalOpen] = useState(false)

  const handleEditTerms = () => {
    setIsEditModalOpen(true)
  }

  const handleSaveTerms = (updatedTerms) => {
    setTermsData(updatedTerms)
    setIsEditModalOpen(false)
  }

  const handleAddFAQ = () => {
    setIsAddFAQModalOpen(true)
  }

  const handleSaveFAQ = (newFAQ) => {
    setFAQs([...faqs, { ...newFAQ, id: Date.now() }])
    setIsAddFAQModalOpen(false)
  }

  const handleDeleteFAQ = (faqId) => {
    setFAQs(faqs.filter(faq => faq.id !== faqId))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
      </div>

      {/* Terms & Conditions Content */}
      <Card className="mb-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Terms & Conditions</h2>
            <Button 
              onClick={handleEditTerms}
              className="bg-blue-900 hover:bg-blue-800 text-white"
            >
              EDIT TERMS & CONDITIONS
            </Button>
          </div>

          {/* Background Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Background</h3>
            <p className="text-gray-600 leading-relaxed">
              {termsData.background}
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptance of terms</h3>
            <p className="text-gray-600 leading-relaxed">
              {termsData.acceptanceOfTerms}
            </p>
          </div>

          {/* Use of Giggz */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Use of Giggz</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p><strong>Eligibility:</strong> {termsData.eligibility}</p>
              <p><strong>Account Creation:</strong> {termsData.accountCreation}</p>
              <p><strong>User Obligations:</strong> {termsData.userObligations}</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {termsData.lastUpdated}
            </p>
          </div>
        </div>
      </Card>

      {/* FAQs Section */}
      <Card>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">FAQs</h2>
          </div>

          <FAQList faqs={faqs} onDeleteFAQ={handleDeleteFAQ} />

          <div className="flex justify-center pt-4">
            <Button 
              variant="outline" 
              onClick={handleAddFAQ}
              className="flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add new FAQ</span>
            </Button>
          </div>

          {/* Last Updated */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: {termsData.lastUpdated}
            </p>
          </div>
        </div>
      </Card>

      {/* Edit Terms Modal */}
      <TermsEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        termsData={termsData}
        onSave={handleSaveTerms}
      />

      {/* Add FAQ Modal */}
      <AddFAQModal
        isOpen={isAddFAQModalOpen}
        onClose={() => setIsAddFAQModalOpen(false)}
        onSave={handleSaveFAQ}
      />
    </div>
  )
}

export default TermsAndConditions