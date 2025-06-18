import React from 'react'
import Card from '../common/Card'

const DisputeStats = () => {
  const stats = [
    { label: 'ALL DISPUTES', value: '201', color: 'gray' },
    { label: 'RESOLVED DISPUTES', value: '180', color: 'green' },
    { label: 'UNRESOLVED DISPUTES', value: '021', color: 'orange' },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'text-green-500'
      case 'orange':
        return 'text-orange-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div
              className={`w-3 h-3 rounded-full ${getColorClasses(
                stat.color
              )} mr-2`}
            ></div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
        </Card>
      ))}
    </div>
  )
}

export default DisputeStats
