import React from 'react'
import Card from '../common/Card'

const PayrollStats = () => {
  const stats = [
    {
      label: 'Total Income',
      value: 'NGN 14,450,028',
      change: '+12.5%',
      changeText: 'decreased vs last month',
      changeType: 'decrease',
      iconColor: 'bg-purple-100',
      icon: '💰'
    },
    {
      label: 'Total Payouts',
      value: 'NGN 7,141,000',
      change: '+12.5%',
      changeText: 'increased vs last week',
      changeType: 'increase',
      iconColor: 'bg-green-100',
      icon: '💳'
    },
    {
      label: 'Pending Payouts',
      value: 'NGN 5,141,000',
      change: '+12.5%',
      changeText: 'increased vs last week',
      changeType: 'increase',
      iconColor: 'bg-orange-100',
      icon: '⏳'
    },
    {
      label: 'Total Commissions',
      value: 'NGN 2,168,028',
      change: '+12.5%',
      changeText: 'increased vs last week',
      changeType: 'increase',
      iconColor: 'bg-pink-100',
      icon: '💎'
    }
  ]

  const getChangeClasses = (type) => {
    return type === 'increase' ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="relative">
          {/* Three dots menu */}
          <div className="absolute top-4 right-4">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${stat.iconColor} rounded-full flex items-center justify-center text-xl`}>
              {stat.icon}
            </div>
          </div>

          <div className="mb-2">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              {stat.label}
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </div>

          <div className="flex items-center text-xs">
            <span className={`font-medium mr-1 ${getChangeClasses(stat.changeType)}`}>
              {stat.change}
            </span>
            <span className="text-gray-500">{stat.changeText}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default PayrollStats