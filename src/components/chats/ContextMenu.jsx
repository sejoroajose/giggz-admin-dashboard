// components/chats/ContextMenu.js
import React from 'react'

const ContextMenu = ({ position, onAction, onClose }) => {
  const menuItems = [
    { label: 'View Giggz', action: 'view-giggz' },
    { label: 'View Client', action: 'view-client' },
    { label: 'View Service Provider', action: 'view-service-provider' },
  ]

  return (
    <div
      className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-48"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onAction(item.action)}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default ContextMenu
