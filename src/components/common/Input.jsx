import React from 'react'
import clsx from 'clsx'

const Input = React.forwardRef(
  (
    {
      type = 'text',
      placeholder = '',
      value = '',
      onChange,
      onBlur,
      onFocus,
      error = '',
      disabled = false,
      icon,
      rightElement,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-4 py-3 border rounded-lg text-sm placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

    const variants = {
      default:
        'border-gray-300 bg-white focus:border-primary-500 focus:ring-primary-500/20',
      error:
        'border-red-300 bg-red-50 focus:border-red-500 focus:ring-red-500/20',
      disabled: 'border-gray-200 bg-gray-50 cursor-not-allowed',
    }

    const getVariant = () => {
      if (disabled) return 'disabled'
      if (error) return 'error'
      return 'default'
    }

    const variant = getVariant()

    const renderIcon = () => {
      if (!icon) return null

      if (typeof icon === 'string') {
        return (
          <img
            src={icon}
            alt=""
            className={clsx('w-4 h-4', error ? 'opacity-60' : 'opacity-70')}
          />
        )
      }

      const IconComponent = icon
      return (
        <IconComponent
          className={clsx('w-4 h-4', error ? 'text-red-400' : 'text-gray-400')}
        />
      )
    }

    return (
      <div className="relative">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              {renderIcon()}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            className={clsx(
              baseStyles,
              variants[variant],
              {
                'pl-10': icon,
                'pr-10': rightElement,
              },
              className
            )}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-1 text-xs text-red-600 animate-fade-in">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
