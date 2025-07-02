import React from 'react'
import VerificationStatusBadge from './VerificationStatusBadge'

const VerificationDrawer = ({ user, isOpen, onClose }) => {
  if (!isOpen || !user) return null

  const getCheckmarkIcon = (completed, status = null) => {
    if (status === 'rejected') {
      return (
        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      )
    }
    
    if (completed || status === 'verified') {
      return (
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )
    }
    
    return (
      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
      </div>
    )
  }

  const renderVerificationItem = (item, key) => {
    const isKyc = key === 'kycVerification'
    const status = isKyc ? item.status : null
    
    return (
      <div key={key} className="flex items-start space-x-4 py-4">
        <div className="flex-shrink-0 mt-1">
          {getCheckmarkIcon(item.completed, status)}
        </div>
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    )
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
              <h2 className="text-xl font-semibold text-gray-900">View more</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.occupation}</p>
              </div>
              <VerificationStatusBadge status={user.status} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              <div className="space-y-1">
                {Object.entries(user.verificationChecklist).map(([key, item]) => 
                  renderVerificationItem(item, key)
                )}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Powered by</p>
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-teal-500 text-lg font-semibold">SEON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerificationDrawer