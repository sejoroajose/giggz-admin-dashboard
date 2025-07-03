import React from 'react'
import Button from '../common/Button'

const GiggzInfoTab = ({ record }) => {
  return (
    <div className="p-6 space-y-8">
      {/* Client Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Client info</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Client:</span>
            <span className="text-gray-900 font-medium">{record.clientInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Client Email:</span>
            <span className="text-gray-900">{record.clientInfo.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone number:</span>
            <span className="text-gray-900">{record.clientInfo.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location:</span>
            <span className="text-gray-900">{record.clientInfo.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Address:</span>
            <span className="text-gray-900 text-right">{record.clientInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Service Provider Info */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Provider info</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Service Provider:</span>
            <span className="text-gray-900 font-medium">{record.serviceProviderInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Client Email:</span>
            <span className="text-gray-900">{record.serviceProviderInfo.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone number:</span>
            <span className="text-gray-900">{record.serviceProviderInfo.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location:</span>
            <span className="text-gray-900">{record.serviceProviderInfo.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Address:</span>
            <span className="text-gray-900 text-right">{record.serviceProviderInfo.address}</span>
          </div>
        </div>
      </div>

      {/* Job Posted */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Job posted</h3>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
            VIEW GIGG →
          </Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h4 className="font-medium text-gray-900">{record.jobPosted.title}</h4>
            <span className="text-sm text-gray-500">{record.jobPosted.postedDate}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {record.jobPosted.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GiggzInfoTab