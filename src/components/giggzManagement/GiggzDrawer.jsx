import React, { useState } from 'react'
import GiggzStatusBadge from './GiggzStatusBadge'

const GiggzDrawer = ({ gigg, isOpen, onClose }) => {
  const [linkCopied, setLinkCopied] = useState(false)

  if (!isOpen || !gigg) return null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(gigg.giggLink)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Giggz Description
              </h2>
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

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Giggz status</span>
              <GiggzStatusBadge status={gigg.status} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Client info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Client:</span>
                  <span className="text-gray-900 font-medium">
                    {gigg.clientInfo.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Email:</span>
                  <span className="text-gray-900">{gigg.clientInfo.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone number:</span>
                  <span className="text-gray-900">{gigg.clientInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">
                    {gigg.clientInfo.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-gray-900 text-right">
                    {gigg.clientInfo.address}
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
                    {gigg.serviceProviderInfo.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Email:</span>
                  <span className="text-gray-900">
                    {gigg.serviceProviderInfo.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone number:</span>
                  <span className="text-gray-900">
                    {gigg.serviceProviderInfo.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="text-gray-900">
                    {gigg.serviceProviderInfo.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-gray-900 text-right">
                    {gigg.serviceProviderInfo.address}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Job posted
              </h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-medium text-gray-900">
                    {gigg.jobPosted.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {gigg.jobPosted.postedDate}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {gigg.jobPosted.description}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Gigg link</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={gigg.giggLink}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              {linkCopied && (
                <p className="text-green-600 text-xs mt-1">
                  Link copied to clipboard!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GiggzDrawer
