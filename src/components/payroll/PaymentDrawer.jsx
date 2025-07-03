import React, { useState } from 'react'
import Button from '../common/Button'
import PayrollStatusBadge from './PayrollStatusBadge'
import GiggzInfoTab from './GiggzInfoTab'
import FeedbacksTab from './FeedbacksTab'
import PaymentTab from './PaymentTab'

const PaymentDrawer = ({ record, isOpen, onClose, onPaymentAuthorized }) => {
  const [activeTab, setActiveTab] = useState('Giggz Info')

  if (!isOpen || !record) return null

  const tabs = ['Giggz Info', 'Feedbacks', 'Payment']

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Giggz Info':
        return <GiggzInfoTab record={record} />
      case 'Feedbacks':
        return <FeedbacksTab reviews={record.reviews} />
      case 'Payment':
        return (
          <PaymentTab 
            record={record} 
            onPaymentAuthorized={onPaymentAuthorized}
            onClose={onClose}
          />
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Payment summary</h2>
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
                <div className="font-medium text-gray-900">{record.serviceProvider}</div>
                <div className="text-sm text-gray-500">{record.serviceProviderRole}</div>
              </div>
              <PayrollStatusBadge status={record.status} />
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDrawer