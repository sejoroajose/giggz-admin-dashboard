import React from 'react'
import { MoreVertical } from 'lucide-react'
import Card from '../common/Card'
import Dropdown, { DropdownItem } from '../common/Dropdown'

const CircularProgress = ({ percentage, changeType, size = 48 }) => {
  const radius = (size - 4) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset =
    circumference - (Math.abs(percentage) / 100) * circumference

  const strokeColor = changeType === 'increase' ? '#10B981' : '#EF4444'

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth="2"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth="2"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  )
}

const StatsCard = ({
  title,
  value,
  change,
  changeType = 'increase',
  icon,
  iconBg = 'bg-primary-100',
  onMenuAction,
  menuOptions = [],
}) => {
  const changeColor =
    changeType === 'increase' ? 'text-success-600' : 'text-error-600'
  const changeSymbol = changeType === 'increase' ? '+' : ''
  const changeArrow = changeType === 'increase' ? '↗' : '↘'

  return (
    <Card className="relative" hover>
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            {change && (
              <div className="absolute inset-0 flex items-center justify-center">
                <CircularProgress
                  percentage={change}
                  changeType={changeType}
                  size={56}
                />
              </div>
            )}
            <div
              className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center relative z-10`}
            >
              <img src={icon} alt="" className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
        </div>

        {menuOptions.length > 0 && (
          <Dropdown
            trigger={
              <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                <MoreVertical className="w-4 h-4" />
              </button>
            }
            menuClassName="w-40"
          >
            {menuOptions.map((option, index) => (
              <DropdownItem
                key={index}
                onClick={() => onMenuAction && onMenuAction(option.value)}
              >
                {option.label}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </div>

      <div className="border-t border-gray-200 mb-4"></div>

      <div className="space-y-3">
        <p className="text-3xl text-gray-900">{value}</p>

        {change && (
          <div className="flex items-center space-x-1">
            <span className={`text-xs font-medium ${changeColor}`}>
              {changeSymbol}
              {change}% {changeArrow}
            </span>
            <span className="text-xs text-gray-500">
              increased vs last week
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}

export default StatsCard
