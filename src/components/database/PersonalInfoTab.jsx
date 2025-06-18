import React from 'react'
import Button from '../common/Button'

const PersonalInfoTab = ({ user, onBlockUser }) => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Personal information
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="text-gray-900 font-medium">Prince Chijioke</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email address:</span>
            <span className="text-gray-900">emekepeter@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">State:</span>
            <span className="text-gray-900">{user.state}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone number:</span>
            <span className="text-gray-900">{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Address:</span>
            <span className="text-gray-900 text-right">{user.address}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Wallet info
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Total money deposited:</span>
            <span className="text-gray-900 font-medium">
              {user.totalDeposited}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total money spent:</span>
            <span className="text-gray-900">{user.totalSpent}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Current account balance:</span>
            <span className="text-gray-900 font-medium">
              {user.currentBalance}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Button
          variant="primary"
          className="w-full bg-red-500 hover:bg-red-600 text-white"
          onClick={() => onBlockUser(user.id)}
        >
          BLOCK THIS USER
        </Button>
      </div>
    </div>
  )
}

export default PersonalInfoTab
