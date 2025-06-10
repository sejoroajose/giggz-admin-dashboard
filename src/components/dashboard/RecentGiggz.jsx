import React, { useState } from 'react'

// StatusPill component for the status column
const StatusPill = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'ongoing':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200'
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'closed':
        return 'bg-gray-50 text-gray-700 border-gray-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(
        status
      )}`}
    >
      {status}
    </span>
  )
}

// Custom Select component to match your design
const Select = ({ options, value, onChange, className = '' }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

const RecentGiggz = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedMonth, setSelectedMonth] = useState('Monthly')

  // Sample data matching your design
  const tableData = [
    {
      giggzId: '#343178',
      client: 'Robert Fox',
      serviceProvider: 'Esther Howard',
      dateReported: 'Feb 25, 2022',
      status: 'Active',
    },
    {
      giggzId: '#370668',
      client: 'Cody Fisher',
      serviceProvider: 'Ronald Richards',
      dateReported: 'Feb 25, 2022',
      status: 'Active',
    },
  ]

  const yearOptions = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
  ]

  const monthOptions = [
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Jan', label: 'January' },
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'Jun', label: 'June' },
    { value: 'Jul', label: 'July' },
    { value: 'Aug', label: 'August' },
    { value: 'Sep', label: 'September' },
    { value: 'Oct', label: 'October' },
    { value: 'Nov', label: 'November' },
    { value: 'Dec', label: 'December' },
  ]

  const handleViewAction = (row) => {
    console.log('View action for:', row)
  }

  return (
    <div className={`bg-white ${className}`}>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Giggz</h3>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src="/search-normal.png"
                  alt="Search"
                  className="h-4 w-4 text-gray-400"
                />
                
              </div>
              <input
                type="text"
                placeholder="Search using ID or name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <img src="/sort.png" alt="Filter" className="h-4 w-4" />
              
              <span>Filter</span>
            </button>

            <Select
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
              className="w-20"
            />

            <Select
              options={monthOptions}
              value={selectedMonth}
              onChange={setSelectedMonth}
              className="w-28"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Giggz ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service Provider
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Reported
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
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.giggzId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.client}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.serviceProvider}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.dateReported}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleViewAction(row)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tableData.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500 text-sm">
            Recent Giggz! Once Giggz are being created, their data will
            populate.
          </p>
        </div>
      )}
    </div>
  )
}

export default RecentGiggz
