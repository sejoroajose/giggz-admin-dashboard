import React, { useState } from 'react'
import MetricCard from './MetricsCard'
import Card from '../common/Card'
import { Select } from '../common/Dropdown'
import {
  CustomLineChart,
  CustomBarChart,
  CustomPieChart,
  CustomAreaChart,
  LegendItem,
} from './Charts'

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedMonth, setSelectedMonth] = useState('Monthly')

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
  ]

  const newUsersData = [
    { date: '01/01', users: 20 },
    { date: '02/01', users: 15 },
    { date: '03/01', users: 22 },
    { date: '04/01', users: 40 },
    { date: '05/01', users: 30 },
    { date: '06/01', users: 20 },
    { date: '07/01', users: 40 },
    { date: '08/01', users: 35 },
    { date: '09/01', users: 50 },
    { date: '10/01', users: 45 },
  ]

  const dailyUsageData = [
    { day: 'Mon.', usage: 85 },
    { day: 'Tues.', usage: 45 },
    { day: 'Wed.', usage: 65 },
    { day: 'Thur.', usage: 25 },
    { day: 'Fri.', usage: 40 },
    { day: 'Sat.', usage: 65 },
    { day: 'Sun.', usage: 55 },
  ]

  const allUsersData = [
    { name: 'Clients', value: 74214 },
    { name: 'Service Providers', value: 120 },
  ]

  const genderData = [
    { name: 'Female', value: 74214 },
    { name: 'Male', value: 120 },
  ]

  const payoutsData = [
    { month: 'Jan', amount: 5000 },
    { month: 'Feb', amount: 35000 },
    { month: 'Mar', amount: 42000 },
    { month: 'Apr', amount: 25000 },
    { month: 'May', amount: 45000 },
    { month: 'Jun', amount: 40000 },
    { month: 'Jul', amount: 15000 },
    { month: 'Aug', amount: 30000 },
    { month: 'Sept', amount: 35000 },
    { month: 'Oct', amount: 25000 },
    { month: 'Nov', amount: 28000 },
    { month: 'Dec', amount: 32000 },
  ]

  // Updated colors to match the image exactly
  const pieColors = ['#60A5FA', '#8B5CF6'] // Light blue and purple

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricCard
          percentage="75"
          userType="iPhone users"
          newUsers="234"
          changePercentage="+12.5%"
          backgroundColor="bg-blue-600"
          textColor="text-white"
        />
        <MetricCard
          percentage="65"
          userType="Android users"
          newUsers="524"
          changePercentage="+12.5%"
          backgroundColor="bg-orange-400"
          textColor="text-white"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Users Analytics */}
        <Card className="bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              New users analytics
            </h3>
            <div className="flex items-center space-x-3">
              <Select
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                className="w-24 text-sm"
              />
              <Select
                options={monthOptions}
                value={selectedMonth}
                onChange={setSelectedMonth}
                className="w-32 text-sm"
              />
            </div>
          </div>
          <CustomLineChart data={newUsersData} height={280} />
        </Card>

        {/* Daily App Usage */}
        <Card className="bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Daily app usage
            </h3>
            <div className="flex items-center space-x-3">
              <Select
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                className="w-24 text-sm"
              />
              <Select
                options={monthOptions}
                value={selectedMonth}
                onChange={setSelectedMonth}
                className="w-32 text-sm"
              />
            </div>
          </div>
          <CustomBarChart data={dailyUsageData} height={280} />
        </Card>
      </div>

      {/* All Users and Gender Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* All Users */}
        <Card className="bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            All Users
          </h3>
          <CustomPieChart
            data={allUsersData}
            colors={pieColors}
            height={200}
            showLegend={false}
          />
          <div className="mt-6 space-y-1">
            <LegendItem
              color="#60A5FA"
              label="Clients"
              value="74,214"
              icon="👥"
            />
            <LegendItem
              color="#8B5CF6"
              label="Service Providers"
              value="120"
              icon="👨‍💼"
            />
          </div>
        </Card>

        {/* Gender */}
        <Card className="bg-white shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Gender</h3>
          <CustomPieChart
            data={genderData}
            colors={pieColors}
            height={200}
            showLegend={false}
          />
          <div className="mt-6 space-y-1">
            <LegendItem
              color="#60A5FA"
              label="Female"
              value="74,214"
              icon="👩"
            />
            <LegendItem color="#8B5CF6" label="Male" value="120" icon="👨" />
          </div>
        </Card>
      </div>

      {/* Payouts - Full Width */}
      <Card className="bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Payouts</h3>
          <div className="flex items-center space-x-3">
            <Select
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
              className="w-24 text-sm"
            />
            <Select
              options={monthOptions}
              value={selectedMonth}
              onChange={setSelectedMonth}
              className="w-32 text-sm"
            />
          </div>
        </div>
        <CustomAreaChart data={payoutsData} height={280} />
      </Card>
    </div>
  )
}

export default Analytics
