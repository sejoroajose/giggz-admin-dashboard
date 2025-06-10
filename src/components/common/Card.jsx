import React from 'react'

const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'p-6',
  ...props
}) => {
  const hoverClass = hover ? 'hover:shadow-card-hover' : ''

  return (
    <div
      className={`bg-white ${hoverClass} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
