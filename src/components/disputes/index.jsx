import React from 'react'
import DisputeStats from './DisputeStats'
import DisputesTable from './DisputesTable'

const Disputes = () => {
  return (
    <div className="p-6">

      <DisputeStats />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Disputes Reported
        </h2>
      </div>

      <DisputesTable />
    </div>
  )
}

export default Disputes
