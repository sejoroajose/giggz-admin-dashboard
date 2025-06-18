// components/database/ClientReviewsTab.js
import React from 'react'
import StarRating from './StarRating'

const ClientReviewsTab = ({ reviews }) => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Client Review
      </h3>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{review.title}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{review.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-xs font-medium text-orange-800">
                    {review.reviewer.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {review.reviewer}
                </span>
              </div>
              <StarRating rating={review.rating} />
            </div>
          </div>
        ))}
        {reviews.length === 0 && (
          <p className="text-gray-500 text-center py-8">No reviews available</p>
        )}
      </div>
    </div>
  )
}

export default ClientReviewsTab
