import React from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'

const Checkbox = React.forwardRef(
  (
    {
      id,
      name,
      checked = false,
      onChange,
      disabled = false,
      label,
      description,
      error,
      className = '',
      ...props
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <div className={clsx('flex items-start', className)}>
        <div className="flex items-center h-5">
          <div className="relative">
            <input
              ref={ref}
              id={id}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              disabled={disabled}
              className={clsx(
                'w-4 h-4 border-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1',
                {
                  'border-gray-300 bg-white focus:ring-primary-500':
                    !checked && !error,
                  'border-primary-600 bg-primary-600 focus:ring-primary-500':
                    checked && !error,
                  'border-red-300 bg-white focus:ring-red-500':
                    !checked && error,
                  'border-red-600 bg-red-600 focus:ring-red-500':
                    checked && error,
                  'opacity-50 cursor-not-allowed': disabled,
                  'cursor-pointer': !disabled,
                }
              )}
              {...props}
            />

            {/* Check Icon */}
            {checked && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
            )}
          </div>
        </div>

        {/* Label and Description */}
        {(label || description) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={id}
                className={clsx('font-medium cursor-pointer', {
                  'text-gray-900': !error,
                  'text-red-900': error,
                  'cursor-not-allowed opacity-50': disabled,
                })}
              >
                {label}
              </label>
            )}

            {description && (
              <p
                className={clsx('text-xs mt-1', {
                  'text-gray-600': !error,
                  'text-red-600': error,
                })}
              >
                {description}
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-xs text-red-600 mt-1 animate-fade-in">
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
