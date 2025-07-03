import React, { useState } from 'react'
import SettingsSidebar from './SettingsSidebar'
import ProfileSettings from './ProfileSettings'
import NotificationSettings from './NotificationSettings'
import SecuritySettings from './SecuritySettings'

const Settings = () => {
  const [activeSection, setActiveSection] = useState('Profile Settings')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Profile Settings':
        return <ProfileSettings />
      case 'Notification Settings':
        return <NotificationSettings />
      case 'Security Settings':
        return <SecuritySettings />
      default:
        return <ProfileSettings />
    }
  }

  return (
    <div className="p-6">
      <div className="flex space-x-8">
        {/* Left Sidebar */}
        <div className="w-80 flex-shrink-0">
          <SettingsSidebar 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderActiveSection()}
        </div>
      </div>
    </div>
  )
}

export default Settings