import React from 'react'
import Button from '../common/Button'

const FAQList = ({ faqs, onDeleteFAQ }) => {
  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-gray-200 pb-6 last:border-b-0">
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDeleteFAQ(faq.id)}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </Button>
          </div>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      ))}
      
      {faqs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No FAQs available. Add your first FAQ to get started.</p>
        </div>
      )}
    </div>
  )
}

export default FAQList