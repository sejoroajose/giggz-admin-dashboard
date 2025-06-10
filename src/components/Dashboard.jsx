import React, { useState } from 'react'
import DashboardLayout from './dashboard/DashboardLayout'
import StatsCard from './dashboard/StatsCard'
import TransactionsChart from './dashboard/TransactionsChart'
import CategoryRating from './dashboard/CategoryRating'
import RecentGiggz from './dashboard/RecentGiggz' // Import the new component

const Dashboard = () => {
  const user = {
    name: 'Prince Chijioke',
    role: 'Super admin',
    avatar: '/avatar-placeholder.png',
  }

  const statsData = [
    {
      title: 'Total Users',
      value: '7,141',
      change: 12.5,
      changeType: 'increase',
      icon: '/users-icon.png',
      iconBg: 'bg-secondary-100',
    },
    {
      title: 'Total Income',
      value: 'NGN 209,028',
      change: 12.5,
      changeType: 'decrease',
      icon: '/income-icon.png',
      iconBg: 'bg-success-100',
    },
    {
      title: 'Total Clients',
      value: '2,102',
      change: 12.5,
      changeType: 'increase',
      icon: '/clients-icon.png',
      iconBg: 'bg-primary-100',
    },
    {
      title: 'Total Service Providers',
      value: '5,039',
      change: 12.5,
      changeType: 'increase',
      icon: '/providers-icon.png',
      iconBg: 'bg-warning-100',
    },
  ]

  const handleNavigation = (page) => {
    console.log('Navigate to:', page)
  }

  const handleUserAction = (action) => {
    console.log('User action:', action)
  }

  const handleStatsMenuAction = (action) => {
    console.log('Stats menu action:', action)
  }

  return (
    <DashboardLayout
      currentPage="Dashboard"
      user={user}
      onNavigate={handleNavigation}
      onUserAction={handleUserAction}
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
              iconBg=""
              onMenuAction={handleStatsMenuAction}
              menuOptions={[
                { label: 'View Details', value: 'view' },
                { label: 'Export Data', value: 'export' },
              ]}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsChart />
          </div>

          <CategoryRating />
        </div>

        <RecentGiggz />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
