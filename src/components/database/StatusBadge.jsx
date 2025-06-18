import React from 'react'

const StatusBadge = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800'
      case 'Unverified':
        return 'bg-orange-100 text-orange-800'
      case 'Blocked':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses()}`}
    >
      {status}
    </span>
  )
}

export default StatusBadge
