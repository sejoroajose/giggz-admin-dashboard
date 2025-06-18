import React, { useState } from 'react'
import GiggzStats from './GiggzStats'
import GiggzTable from './GiggzTable'

const GiggzManagement = () => {
  return (
    <div className="p-6 bg-gray-50">
      <GiggzStats />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Giggz</h2>
      </div>

      <GiggzTable />
    </div>
  )
}

export default GiggzManagement
