import React, { useState } from 'react'

const Sidebar = ({ activeItem = 'Dashboard', onItemSelect }) => {
  const menuItems = [
    {
      section: 'OVERVIEW',
      items: [
        { name: 'Dashboard', icon: '/dashboard-icon.png' },
        { name: 'Analytics & Reports', icon: '/analytics-icon.png' },
        { name: 'Database', icon: '/database-icon.png' },
        { name: 'Giggz Management', icon: '/giggz-icon.png' },
        { name: 'Chats', icon: '/chat-icon.png' },
        { name: 'Disputes', icon: '/disputes-icon.png' },
      ],
    },
    {
      section: 'APPROVAL',
      items: [
        { name: 'Verification', icon: '/verification-icon.png' },
        { name: 'Payroll', icon: '/payroll-icon.png' },
      ],
    },
    {
      section: 'ACCOUNT',
      items: [
        { name: 'Settings', icon: '/settings-icon.png' },
        { name: 'Terms and Conditions', icon: '/terms-icon.png' },
      ],
    },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 py-12">
        <img src="/LOGO.svg" alt="Giggz Logo" className="h-16 w-auto" />
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <div className="px-6 mb-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {section.section}
              </h3>
            </div>
            <nav className="space-y-1 px-3">
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onItemSelect && onItemSelect(item.name)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                    activeItem === item.name
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <img src={item.icon} alt="" className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-error-600 hover:bg-error-50 rounded-lg transition-colors">
          <img src="/logout-icon.png" alt="" className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
