import React, { useState } from 'react'
import UserStats from './UserStats'
import ClientsTab from './ClientsTab'
import ServiceProvidersTab from './ServiceProvidersTab'

const Database = () => {
  const [activeTab, setActiveTab] = useState('Clients')

  return (
    <div className="p-6 bg-gray-50">
      <UserStats />

      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {['Clients', 'Service Providers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'Clients' && <ClientsTab />}
      {activeTab === 'Service Providers' && <ServiceProvidersTab />}
    </div>
  )
}

export default Database
