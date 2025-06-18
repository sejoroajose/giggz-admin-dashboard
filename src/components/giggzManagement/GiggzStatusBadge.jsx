import React from 'react'

const GiggzStatusBadge = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Active':
        return 'bg-blue-100 text-blue-800'
      case 'Ongoing':
        return 'bg-orange-100 text-orange-800'
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'Closed':
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

export default GiggzStatusBadge
