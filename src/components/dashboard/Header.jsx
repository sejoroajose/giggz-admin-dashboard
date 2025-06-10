import React, { useState } from 'react'
import { Bell } from 'lucide-react'
import Dropdown, { DropdownItem } from '../common/Dropdown'

const Header = ({
  title = 'Dashboard',
  user = {
    name: 'Prince Chijioke',
    role: 'Super admin',
    avatar: '/avatar-placeholder.png',
  },
  onNotificationClick,
  onProfileAction,
}) => {
  const [showNotifications, setShowNotifications] = useState(false)

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications)
    if (onNotificationClick) onNotificationClick()
  }

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={handleNotificationClick}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
            </button>
          </div>

          {/* User Profile */}
          <Dropdown
            trigger={
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {user.name}
                  </div>
                  <div className="text-xs text-gray-500">{user.role}</div>
                </div>
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-10 h-10 rounded-full bg-secondary-200 object-cover"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGM0Q2OUMiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI4IiB5PSI4Ij4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSIjNjk2OTY5Ii8+CjxwYXRoIGQ9Ik0xMiAxNEM5LjMzIDIwIDcgMTcuMzMgNyAxNEM3IDEyLjY3IDguMzMgMTIgMTIgMTJDMTUuNjcgMTIgMTcgMTIuNjcgMTcgMTRDMTcgMTcuMzMgMTQuNjcgMjAgMTIgMjBaIiBmaWxsPSIjNjk2OTY5Ii8+Cjwvc3ZnPgo8L3N2Zz4K'
                  }}
                />
              </div>
            }
            menuClassName="w-48"
          >
            <DropdownItem
              onClick={() => onProfileAction && onProfileAction('profile')}
            >
              View Profile
            </DropdownItem>
            <DropdownItem
              onClick={() => onProfileAction && onProfileAction('settings')}
            >
              Settings
            </DropdownItem>
            <div className="border-t border-gray-100 my-1" />
            <DropdownItem
              onClick={() => onProfileAction && onProfileAction('logout')}
              className="text-error-600 hover:bg-error-50"
            >
              Logout
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
