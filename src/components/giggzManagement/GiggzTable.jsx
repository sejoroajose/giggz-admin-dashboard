import React, { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import SearchInput from '../common/SearchInput'
import GiggzStatusBadge from './GiggzStatusBadge'
import GiggzDrawer from './GiggzDrawer'
import { mockGiggz } from './mockData'

const GiggzTable = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGigg, setSelectedGigg] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly')

  const handleViewGigg = (gigg) => {
    setSelectedGigg(gigg)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedGigg(null)
  }

  const filteredGiggz = mockGiggz.filter(
    (gigg) =>
      gigg.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gigg.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gigg.serviceProvider.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <SearchInput
          placeholder="Search using ID or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md"
        />
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <img src="/filter-icon.png" alt="Filter" className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
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
                  Date Posted
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
              {filteredGiggz.map((gigg) => (
                <tr key={gigg.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {gigg.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {gigg.client}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {gigg.serviceProvider}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {gigg.datePosted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <GiggzStatusBadge status={gigg.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewGigg(gigg)}
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

      <GiggzDrawer
        gigg={selectedGigg}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  )
}

export default GiggzTable
