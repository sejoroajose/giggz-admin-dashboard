import React from 'react'
import Card from '../common/Card'

const MetricCard = ({
  percentage,
  userCount,
  userType,
  newUsers,
  changePercentage = '+12.5%',
  backgroundColor = 'bg-primary-500',
  textColor = 'text-white',
}) => {
  return (
    <Card
      className={`${backgroundColor} ${textColor} p-6 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="text-5xl font-bold mb-2">{percentage}%</div>
        <div className="text-lg opacity-90 mb-4">{userType}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-semibold">{newUsers}</span>
            <span className="text-sm opacity-80">Newly registered users</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">{changePercentage}</span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-current transform translate-x-8 -translate-y-8"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-current transform translate-x-4 translate-y-4"></div>
      </div>
    </Card>
  )
}

export default MetricCard
