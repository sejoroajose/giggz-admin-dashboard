import React, { useState } from 'react'
import Button from '../common/Button'
import StarRating from '../database/StarRating'

const DisputeDrawer = ({ dispute, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Giggz Info')
  const [managementFeedback, setManagementFeedback] = useState('')

  if (!isOpen || !dispute) return null

  const tabs = ['Giggz Info', 'Feedbacks', 'Resolution']

  const handleResolveAndPay = () => {
    console.log('Resolving dispute and paying:', dispute.id)
    // Implement resolve and pay logic
  }

  const handleResolveAndReverseFunds = () => {
    console.log('Resolving dispute and reversing funds:', dispute.id)
    // Implement resolve and reverse funds logic
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Giggz Info':
        return (
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Client:</span>
                  <span className="text-gray-900 font-medium">
                    {dispute.clientInfo.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Email:</span>
                  <span className="text-gray-900">
                    {dispute.clientInfo.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone number:</span>
                  <span className="text-gray-900">
                    {dispute.clientInfo.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">
                    {dispute.clientInfo.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-gray-900 text-right">
                    {dispute.clientInfo.address}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Service Provider info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Provider:</span>
                  <span className="text-gray-900 font-medium">
                    {dispute.serviceProviderInfo.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Email:</span>
                  <span className="text-gray-900">
                    {dispute.serviceProviderInfo.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone number:</span>
                  <span className="text-gray-900">
                    {dispute.serviceProviderInfo.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">
                    {dispute.serviceProviderInfo.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-gray-900 text-right">
                    {dispute.serviceProviderInfo.address}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Job posted
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700"
                >
                  VIEW GIGG
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-gray-900">
                    {dispute.jobPosted.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {dispute.jobPosted.postedDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dispute.jobPosted.description}
                </p>
              </div>
            </div>
          </div>
        )

      case 'Feedbacks':
        return (
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client review
              </h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-gray-900">
                    {dispute.clientReview.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {dispute.clientReview.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dispute.clientReview.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-orange-800">
                        {dispute.clientReview.reviewer.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {dispute.clientReview.reviewer}
                    </span>
                  </div>
                  <StarRating rating={dispute.clientReview.rating} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Service provider review
              </h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-gray-900">
                    {dispute.serviceProviderReview.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {dispute.serviceProviderReview.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dispute.serviceProviderReview.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs font-medium text-orange-800">
                        {dispute.serviceProviderReview.reviewer.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {dispute.serviceProviderReview.reviewer}
                    </span>
                  </div>
                  <StarRating rating={dispute.serviceProviderReview.rating} />
                </div>
              </div>
            </div>
          </div>
        )

      case 'Resolution':
        return (
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Management's feedback
              </h3>
              <textarea
                value={managementFeedback || dispute.managementFeedback}
                onChange={(e) => setManagementFeedback(e.target.value)}
                placeholder="Having gone through what transpired between you both we decided to pay the artisan the amount he worked for while terminating this contract."
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                disabled={dispute.resolutionStatus === 'resolved'}
              />
            </div>

            {dispute.resolutionStatus !== 'resolved' && (
              <div className="flex space-x-4">
                <Button
                  variant="primary"
                  className="flex-1 bg-blue-900 hover:bg-blue-800"
                  onClick={handleResolveAndPay}
                >
                  RESOLVE AND PAY
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleResolveAndReverseFunds}
                >
                  RESOLVE AND REVERSE FUNDS
                </Button>
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  const getStatusAlert = () => {
    if (dispute.resolutionStatus === 'resolved') {
      return (
        <div className="mx-6 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-green-800">
              Dispute has been resolved
            </span>
          </div>
          <p className="mt-2 text-sm text-green-700">
            The management have considered reviews from both parties and passed
            a non biased judgement following our Terms and Conditions.
          </p>
        </div>
      )
    } else {
      return (
        <div className="mx-6 mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-orange-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-orange-800">
              Dispute under review
            </span>
          </div>
          <p className="mt-2 text-sm text-orange-700">
            The management is yet to review what transpired between both
            parties, we will resolve this issue as soon as we can. Please do
            exercise some patience.
          </p>
        </div>
      )
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">View more</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {getStatusAlert()}

          <div className="border-b border-gray-200 mt-6">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 flex-1 ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>
        </div>
      </div>
    </>
  )
}

export default DisputeDrawer
