import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Mock user data - you can replace this with actual user data from context/props
  const user = {
    name: 'Prince Chijioke',
    role: 'Super admin',
    avatar: '/avatar-placeholder.png',
  }

  // Determine active item and page title based on current route
  const getActiveItem = () => {
    const path = location.pathname
    if (path === '/dashboard') return 'Dashboard'
    if (path === '/dashboard/analytics') return 'Analytics & Reports'
    // Add more routes as needed
    return 'Dashboard'
  }

  const getCurrentPageTitle = () => {
    const path = location.pathname
    if (path === '/dashboard') return 'Dashboard'
    if (path === '/dashboard/analytics') return 'Analytics & Reports'
    // Add more routes as needed
    return 'Dashboard'
  }

  const handleItemSelect = (itemName) => {
    switch (itemName) {
      case 'Dashboard':
        navigate('/dashboard')
        break
      case 'Analytics & Reports':
        navigate('/dashboard/analytics')
        break
      // Add more cases as you add more routes
      default:
        break
    }
  }

  const handleUserAction = (action) => {
    console.log('User action:', action)
    // Handle user actions like logout, profile, etc.
  }

  return (
    <div className="h-screen bg-gray-50 flex">
      <div
        className={`${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } transition-all duration-300 flex-shrink-0`}
      >
        <Sidebar activeItem={getActiveItem()} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        <Header
          title={getCurrentPageTitle()}
          user={user}
          onProfileAction={handleUserAction}
        />

        <main className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
