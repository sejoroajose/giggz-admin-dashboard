import React from 'react'

const GiggzHistoryTab = ({ giggzHistory }) => {
  return (
    <div className="p-6">
      <div className="space-y-6">
        {giggzHistory.map((gig) => (
          <div
            key={gig.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{gig.title}</h4>
              <span className="text-sm text-gray-500">{gig.date}</span>
            </div>
            <div className="text-sm text-gray-600 mb-2">{gig.client}</div>
            <p className="text-gray-600 text-sm mb-3">{gig.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-500 text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {gig.location}
              </div>
              <div
                className={`flex items-center ${
                  gig.status === 'Completed'
                    ? 'text-green-600'
                    : 'text-orange-500'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    gig.status === 'Completed'
                      ? 'bg-green-500'
                      : 'bg-orange-500'
                  }`}
                ></div>
                <span className="text-sm font-medium">{gig.status}</span>
              </div>
            </div>
          </div>
        ))}
        {giggzHistory.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No gig history available
          </p>
        )}
      </div>
    </div>
  )
}

export default GiggzHistoryTab
