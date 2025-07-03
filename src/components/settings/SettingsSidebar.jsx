import React from 'react'
import Card from '../common/Card'

const SettingsSidebar = ({ activeSection, onSectionChange }) => {
  const profileCompletion = 60

  const settingSections = [
    {
      id: 'Profile Settings',
      title: 'Profile Settings',
      description: 'Personal Information, Contact Details',
      icon: '👤',
      iconBg: 'bg-blue-100'
    },
    {
      id: 'Notification Settings',
      title: 'Notification Settings',
      description: 'Streamline what you get.',
      icon: '🔔',
      iconBg: 'bg-gray-100'
    },
    {
      id: 'Security Settings',
      title: 'Security Settings',
      description: 'Change Password, 2FA',
      icon: '🔒',
      iconBg: 'bg-gray-100'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Profile Information Card */}
      <Card className="bg-blue-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Profile Information</h3>
            <p className="text-blue-200 text-sm">Complete your profile to access all features.</p>
          </div>
          <div className="relative w-16 h-16">
            {/* Circular Progress */}
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="white"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${(profileCompletion / 100) * 176} 176`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{profileCompletion}%</span>
            </div>
          </div>
        </div>
        <button className="w-full bg-white text-blue-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Complete my profile
        </button>
      </Card>

      {/* Settings Sections */}
      <div className="space-y-3">
        {settingSections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full p-4 rounded-lg border text-left transition-colors ${
              activeSection === section.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${section.iconBg} rounded-lg flex items-center justify-center text-lg`}>
                  {section.icon}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{section.title}</div>
                  <div className="text-sm text-gray-500">{section.description}</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SettingsSidebar