import React, { useState } from 'react'
import Button from '../common/Button'

const PaymentTab = ({ record, onPaymentAuthorized, onClose }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showShareReceipt, setShowShareReceipt] = useState(false)
  const [recipientEmail, setRecipientEmail] = useState('')
  const [isPaymentProcessed, setIsPaymentProcessed] = useState(record.status === 'Paid')

  const handleAuthorizePayment = () => {
    setShowConfirmModal(true)
  }

  const handleConfirmPayment = () => {
    setShowConfirmModal(false)
    setShowSuccessModal(true)

    setTimeout(() => {
      setShowSuccessModal(false)
      setIsPaymentProcessed(true)
      onPaymentAuthorized(record.id)
    }, 2000)
  }

  const handleShareReceipt = () => {
    setShowShareReceipt(true)
  }

  const handleSendReceipt = () => {
    if (recipientEmail) {
      console.log('Sending receipt to:', recipientEmail)
      setShowShareReceipt(false)
      setRecipientEmail('')
    }
  }

  return (
    <>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Transaction ID</span>
            <span className="text-gray-900 font-medium">{record.paymentDetails.transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Service Provider</span>
            <span className="text-gray-900">{record.paymentDetails.serviceProvider}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Avg. Hrs Worked</span>
            <span className="text-gray-900">{record.paymentDetails.avgHrsWorked}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Finished Date</span>
            <span className="text-gray-900">{record.paymentDetails.finishedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Finished Time</span>
            <span className="text-gray-900">{record.paymentDetails.finishedTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Earned</span>
            <span className="text-gray-900 font-medium">{record.paymentDetails.amountEarned}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Commission</span>
            <span className="text-gray-900">{record.paymentDetails.commission}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Paid</span>
            <span className="text-gray-900 font-medium">{record.paymentDetails.amountPaid}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          {isPaymentProcessed ? (
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleShareReceipt}
              >
                📤 Share Receipt
              </Button>
              
              {showShareReceipt && (
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Recipient Email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Button
                    variant="primary"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleSendReceipt}
                    disabled={!recipientEmail}
                  >
                    Send
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="primary"
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleAuthorizePayment}
            >
              ✓ Authorize Payment
            </Button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Authorize Payment?</h3>
              <p className="text-gray-600 mb-6">
                This is an irreversible action, do you want to release funds to the service provider?
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  className="flex-1 bg-red-500 text-white hover:bg-red-600 border-red-500"
                  onClick={() => setShowConfirmModal(false)}
                >
                  No, Close
                </Button>
                <Button
                  variant="primary"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={handleConfirmPayment}
                >
                  Yes, Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600 mb-4"
                onClick={() => setShowSuccessModal(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="text-gray-600">
                Funds has been released to the appropriate persons.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PaymentTab