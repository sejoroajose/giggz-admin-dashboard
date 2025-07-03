import React from 'react'

const PayrollStatusBadge = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-800'
      case 'Paid':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses()}`}>
      {status}
    </span>
  )
}

export default PayrollStatusBadge