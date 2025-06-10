import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { ChevronUp, ChevronDown } from 'lucide-react'

const generateSparklineData = (trend) => {
  const baseData = [
    { value: 20 },
    { value: 35 },
    { value: 28 },
    { value: 45 },
    { value: 38 },
    { value: 52 },
    { value: 48 },
    { value: 65 },
    { value: 58 },
    { value: 70 },
  ]

  if (trend === 'decrease') {
    return baseData.map((item, index) => ({
      value: Math.max(10, item.value - index * 2),
    }))
  }

  return baseData.map((item, index) => ({
    value: item.value + index * 1.5,
  }))
}

const CategoryItem = ({ category, providers, trend, change }) => {
  const sparklineData = generateSparklineData(trend)
  const isIncrease = trend === 'increase'

  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex-1">
        <p className="font-regular text-sm text-gray-900 text-base">{category}</p>
        <p className="text-xs text-gray-500">{providers}</p>
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          {isIncrease ? (
            <ChevronUp className={`w-4 h-4 text-green-500`} />
          ) : (
            <ChevronDown className={`w-4 h-4 text-red-500`} />
          )}
          <span
            className={`text-xs font-regular ${
              isIncrease ? 'text-green-600' : 'text-red-600'
            }`}
          >
            ({change})
          </span>
        </div>

        <div className="w-16 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <defs>
                <linearGradient
                  id={`gradient-${category.toLowerCase()}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={isIncrease ? '#3B82F6' : '#EF4444'}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={isIncrease ? '#3B82F6' : '#EF4444'}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={isIncrease ? '#3B82F6' : '#EF4444'}
                strokeWidth={2}
                fill={`url(#gradient-${category.toLowerCase()})`}
                dot={false}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

const CategoryRating = ({ className = '' }) => {
  const categoryData = [
    {
      category: 'Dispatch',
      providers: '210 Giggz | 32 Service providers',
      trend: 'increase',
      change: '+25%',
    },
    {
      category: 'Teacher',
      providers: '210 Giggz | 32 Service providers',
      trend: 'decrease',
      change: '+25%',
    },
    {
      category: 'Cleaner',
      providers: '210 Giggz | 32 Service providers',
      trend: 'decrease',
      change: '+25%',
    },
    {
      category: 'Mechanic',
      providers: '210 Giggz | 32 Service providers',
      trend: 'increase',
      change: '+25%',
    },
  ]

  return (
    <div
      className={`bg-white  p-6 ${className}`}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        Category rating
      </h3>

      <div className="space-y-2">
        {categoryData.map((category, index) => (
          <CategoryItem
            key={index}
            category={category.category}
            providers={category.providers}
            trend={category.trend}
            change={category.change}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryRating
