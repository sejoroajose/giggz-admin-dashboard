import React, { useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Select } from '../common/Dropdown'

const generateTransactionsData = () => {
  return [
    { date: '04/09', sales: 40000, formatted: '04/09' },
    { date: '05/09', sales: 48000, formatted: '05/09' },
    { date: '06/09', sales: 45000, formatted: '06/09' },
    { date: '07/09', sales: 38000, formatted: '07/09' },
    { date: '08/09', sales: 85000, formatted: '08/09' },
    { date: '09/09', sales: 78000, formatted: '09/09' },
    { date: '10/09', sales: 76000, formatted: '10/09' },
    { date: '11/09', sales: 96598, formatted: '11/09' }, 
    { date: '12/09', sales: 88000, formatted: '12/09' },
    { date: '13/09', sales: 65000, formatted: '13/09' },
    { date: '14/09', sales: 58000, formatted: '14/09' },
  ]
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg">
        <p className="text-sm font-medium">Your Sales</p>
        <p className="text-lg font-semibold">
          ₦{payload[0].value.toLocaleString()}
        </p>
      </div>
    )
  }
  return null
}

const CustomDot = (props) => {
  const { cx, cy, payload } = props
  if (payload.sales === 96598) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#3B82F6"
        stroke="#fff"
        strokeWidth={2}
      />
    )
  }
  return null
}

const TransactionsChart = ({ className = '' }) => {
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedMonth, setSelectedMonth] = useState('Monthly')
  const [data, setData] = useState(generateTransactionsData())

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

  const formatYAxis = (value) => {
    return `₦${(value / 1000).toFixed(0)},000`
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
    console.log('Fetching data for year:', year)
  }

  const handleMonthChange = (month) => {
    setSelectedMonth(month)
    console.log('Fetching data for month:', month)
  }

  return (
    <div
      className={`bg-white  p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">Transactions</h3>
        <div className="flex items-center space-x-3">
          <Select
            options={yearOptions}
            value={selectedYear}
            onChange={handleYearChange}
            className="w-24"
          />
          <Select
            options={monthOptions}
            value={selectedMonth}
            onChange={handleMonthChange}
            className="w-32"
          />
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f1f5f9"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="formatted"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={formatYAxis}
              domain={['dataMin - 5000', 'dataMax + 5000']}
              tickMargin={10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#e2e8f0', strokeWidth: 1 }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#salesGradient)"
              dot={<CustomDot />}
              activeDot={{
                r: 6,
                stroke: '#3B82F6',
                strokeWidth: 2,
                fill: '#fff',
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TransactionsChart
