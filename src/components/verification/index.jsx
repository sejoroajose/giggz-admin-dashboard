import React from 'react'
import VerificationStats from './VerificationStats'
import VerificationTable from './VerificationTable'

const Verification = () => {
  return (
    <div className="p-6">
      <VerificationStats />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">User</h2>
      </div>

      <VerificationTable />
    </div>
  )
}

export default Verification