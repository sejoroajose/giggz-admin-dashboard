import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = ({
  children,
  currentPage = 'Dashboard',
  user,
  onNavigate,
  onUserAction,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const handleSidebarItemSelect = (itemName) => {
    if (onNavigate) {
      onNavigate(itemName)
    }
  }

  const handleUserAction = (action) => {
    if (onUserAction) {
      onUserAction(action)
    }
  }

  return (
    <div className="h-screen bg-gray-50 flex">
      <div
        className={`${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } transition-all duration-300`}
      >
        <Sidebar
          activeItem={currentPage}
          onItemSelect={handleSidebarItemSelect}
          collapsed={sidebarCollapsed}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={currentPage}
          user={user}
          onProfileAction={handleUserAction}
        />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
