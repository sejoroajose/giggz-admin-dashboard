import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const DashboardLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const user = {
    name: 'Prince Chijioke',
    role: 'Super admin',
    avatar: '/avatar-placeholder.png',
  }

  const getActiveItem = () => {
    const path = location.pathname
    if (path === '/dashboard') return 'Dashboard'
    if (path === '/dashboard/analytics') return 'Analytics & Reports'
    if (path === '/dashboard/database') return 'Database'
    if (path === '/dashboard/giggz-management') return 'Giggz Management'
    if (path === '/dashboard/chats') return 'Chats'
    if (path === '/dashboard/disputes') return 'Disputes'
    if (path === '/dashboard/verification') return 'Verification'
    if (path === '/dashboard/payroll') return 'Payroll'
    if (path === '/dashboard/settings') return 'Settings'
    if (path === '/dashboard/terms-and-conditions') return 'Terms and Conditions'
    return 'Dashboard'
  }

  const getCurrentPageTitle = () => {
    const path = location.pathname
    if (path === '/dashboard') return 'Dashboard'
    if (path === '/dashboard/analytics') return 'Analytics & Reports'
    if (path === '/dashboard/database') return 'User Database'
    if (path === '/dashboard/giggz-management') return 'Giggz Management'
    if (path === '/dashboard/chats') return 'Users Chats'
    if (path === '/dashboard/disputes') return 'Disputes'
    if (path === '/dashboard/verification') return 'Verification'
    if (path === '/dashboard/payroll') return 'Payroll'
    if (path === '/dashboard/settings') return 'Settings'
    if (path === '/dashboard/terms-and-conditions') return 'Terms & Conditions'
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
      case 'Database':
        navigate('/dashboard/database')
        break
      case 'Giggz Management':
        navigate('/dashboard/giggz-management')
        break
      case 'Chats':
        navigate('/dashboard/chats')
        break
      case 'Disputes':
        navigate('/dashboard/disputes')
        break
      case 'Verification': 
        navigate('/dashboard/verification')
        break
      case 'Payroll':
        navigate('/dashboard/payroll')
        break
      case 'Settings':
        navigate('/dashboard/settings')
        break
      case 'Terms and Conditions':
        navigate('/dashboard/terms-and-conditions')
        break
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

        <main className="flex-1  overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
