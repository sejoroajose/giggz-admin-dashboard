import React from 'react'
import { Loader2 } from 'lucide-react'
import clsx from 'clsx'

const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      className = '',
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white shadow-sm focus:ring-primary-500',
      secondary:
        'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-900 focus:ring-gray-500',
      outline:
        'border border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-100 text-gray-700 focus:ring-primary-500',
      ghost:
        'text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500',
      link: 'text-accent-600 hover:text-accent-700 underline-offset-4 hover:underline focus:ring-accent-500',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg',
    }

    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          baseStyles,
          variants[variant],
          sizes[size],
          {
            'cursor-not-allowed': isDisabled,
            'hover:transform hover:scale-105':
              !isDisabled && variant === 'primary',
          },
          className
        )}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
