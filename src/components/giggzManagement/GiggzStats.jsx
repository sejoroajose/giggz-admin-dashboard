import React from 'react'
import Card from '../common/Card'

const GiggzStats = () => {
  const stats = [
    { label: 'ALL GIGGZ', value: '35,950', color: 'gray' },
    { label: 'ACTIVE GIGGZ', value: '10,405', color: 'blue' },
    { label: 'COMPLETED GIGGZ', value: '16,123', color: 'green' },
    { label: 'ONGOING GIGGZ', value: '9,210', color: 'orange' },
    { label: 'CLOSED GIGGZ', value: '212', color: 'red' },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500'
      case 'green':
        return 'text-green-500'
      case 'orange':
        return 'text-orange-500'
      case 'red':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="grid grid-cols-5 gap-6 mb-8">
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

export default GiggzStats
