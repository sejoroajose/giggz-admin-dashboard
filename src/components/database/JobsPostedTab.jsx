// components/database/JobsPostedTab.js
import React from 'react'

const JobsPostedTab = ({ jobs }) => {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Jobs Posted</h3>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900">{job.title}</h4>
              <span className="text-sm text-gray-500">{job.date}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{job.description}</p>
            <div className="flex items-center">
              <div
                className={`flex items-center ${
                  job.status === 'Completed'
                    ? 'text-green-600'
                    : 'text-orange-500'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    job.status === 'Completed'
                      ? 'bg-green-500'
                      : 'bg-orange-500'
                  }`}
                ></div>
                <span className="text-sm font-medium">{job.status}</span>
              </div>
            </div>
          </div>
        ))}
        {jobs.length === 0 && (
          <p className="text-gray-500 text-center py-8">No jobs posted</p>
        )}
      </div>
    </div>
  )
}

export default JobsPostedTab
