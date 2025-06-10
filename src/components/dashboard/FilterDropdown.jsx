import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Card from '../common/Card'

const FilterDropdown = ({
  title,
  options,
  selectedValues = [],
  onChange,
  className = '',
  multiSelect = false,
  showStatusColors = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (value) => {
    if (multiSelect) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
      onChange(newValues)
    } else {
      onChange([value])
      setIsOpen(false)
    }
  }

  const getStatusColor = (value) => {
    const colors = {
      Completed: 'bg-success-100 text-success-700',
      Active: 'bg-primary-100 text-primary-700',
      Ongoing: 'bg-warning-100 text-warning-700',
      Closed: 'bg-gray-100 text-gray-700',
    }
    return colors[value] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-w-[120px]"
      >
        <span className="text-sm text-gray-700">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <Card className="absolute top-full left-0 mt-2 w-48 z-50 p-0 max-h-64 overflow-y-auto">
          <div className="py-2">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <input
                    type={multiSelect ? 'checkbox' : 'radio'}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => {}} // Handled by button click
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </div>
                {showStatusColors && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      option.value
                    )}`}
                  >
                    {option.value}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}

// Status Pills Component
export const StatusPill = ({ status, className = '' }) => {
  const getStatusColor = (status) => {
    const colors = {
      Active: 'bg-primary-100 text-primary-700',
      Completed: 'bg-success-100 text-success-700',
      Ongoing: 'bg-warning-100 text-warning-700',
      Closed: 'bg-gray-100 text-gray-700',
    }
    return colors[status] || 'bg-gray-100 text-gray-700'
  }

  return (
    <span
      className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
        status
      )} ${className}`}
    >
      {status}
    </span>
  )
}

export default FilterDropdown
