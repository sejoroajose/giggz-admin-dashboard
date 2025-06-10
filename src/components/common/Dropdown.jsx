import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Dropdown = ({
  trigger,
  children,
  className = '',
  menuClassName = '',
  position = 'right',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const positionClasses = {
    right: 'right-0',
    left: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute ${positionClasses[position]} mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 ${menuClassName}`}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

// Dropdown Item Component
export const DropdownItem = ({
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  )
}

// Simple Select Dropdown
export const Select = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  className = '',
}) => {
  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <Dropdown
      className={className}
      trigger={
        <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer">
          <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      }
      menuClassName="w-full min-w-[200px]"
    >
      {options.map((option) => (
        <DropdownItem
          key={option.value}
          onClick={() => onChange(option.value)}
          className={
            value === option.value ? 'bg-primary-50 text-primary-700' : ''
          }
        >
          {option.label}
        </DropdownItem>
      ))}
    </Dropdown>
  )
}

export default Dropdown
