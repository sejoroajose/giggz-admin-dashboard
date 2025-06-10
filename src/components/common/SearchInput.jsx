import React from 'react'
import { Search } from 'lucide-react'

const SearchInput = ({
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  onSubmit,
  ...props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
        {...props}
      />
    </form>
  )
}

export default SearchInput
