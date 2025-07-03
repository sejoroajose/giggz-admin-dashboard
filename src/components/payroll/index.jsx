import React from 'react'
import PayrollStats from './PayrollStats'
import PayoutRecords from './PayoutRecords'

const Payroll = () => {
  return (
    <div className="p-6">
      <PayrollStats />

      <PayoutRecords />
    </div>
  )
}

export default Payroll