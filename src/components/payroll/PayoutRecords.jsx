import React, { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import SearchInput from '../common/SearchInput'
import PayrollStatusBadge from './PayrollStatusBadge'
import PaymentDrawer from './PaymentDrawer'
import { mockPayoutRecords } from './mockData'

const PayoutRecords = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [payoutRecords, setPayoutRecords] = useState(mockPayoutRecords)

  const handleViewRecord = (record) => {
    setSelectedRecord(record)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedRecord(null)
  }

  const handlePaymentAuthorized = (recordId) => {
    setPayoutRecords(prevRecords =>
      prevRecords.map(record =>
        record.id === recordId
          ? { ...record, status: 'Paid' }
          : record
      )
    )
  }

  const filteredRecords = payoutRecords.filter(record =>
    record.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.serviceProvider.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Payout Records</h2>
        <div className="flex items-center space-x-4">
          <SearchInput
            placeholder="Search using ID or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80"
          />
          <Button variant="primary" className="bg-blue-600 hover:bg-blue-700">
            Export Records
          </Button>
        </div>
      </div>

      {/* Payout Records Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount paid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Hours Worked
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {record.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.serviceProvider}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.amountPaid}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.avgHoursWorked}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <PayrollStatusBadge status={record.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewRecord(record)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Payment Drawer */}
      <PaymentDrawer
        record={selectedRecord}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onPaymentAuthorized={handlePaymentAuthorized}
      />
    </div>
  )
}

export default PayoutRecords