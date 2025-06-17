import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export const CustomLineChart = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#EC4899"
          strokeWidth={2}
          dot={{ fill: '#EC4899', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: '#EC4899' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export const CustomBarChart = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Bar
          dataKey="usage"
          fill="#10B981"
          radius={[4, 4, 0, 0]}
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export const CustomPieChart = ({
  data,
  colors,
  height = 300,
  showLegend = true,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={90}
          paddingAngle={0}
          dataKey="value"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        />
        {showLegend && (
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ fontSize: '14px' }}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  )
}

export const CustomAreaChart = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorPayouts" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
          }}
          labelStyle={{ color: 'white' }}
          formatter={(value) => [`₦${value.toLocaleString()}`, 'Payout']}
        />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#06B6D4"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPayouts)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export const LegendItem = ({ color, label, value, icon }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
        {icon && <span className="text-gray-400 text-xs">{icon}</span>}
      </div>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  )
}
