import React, { useState } from 'react'
import Button from '../common/Button'

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: 'Always',
    newGiggzNotification: 'Always',
    newDispute: 'Always',
    newSignUp: 'Always',
    walletTopUp: 'Always'
  })

  const notificationTypes = [
    {
      id: 'emailNotifications',
      title: 'Send me email notifications',
      options: ['Always', 'Never', 'Between 08:00 to 17:00']
    },
    {
      id: 'newGiggzNotification',
      title: 'New Giggz Notification',
      options: ['Always', 'Never', 'Between 08:00 to 17:00']
    },
    {
      id: 'newDispute',
      title: 'New Dispute',
      options: ['Always', 'Never', 'Between 08:00 to 17:00']
    },
    {
      id: 'newSignUp',
      title: 'New Sign up',
      options: ['Always', 'Never', 'Between 08:00 to 17:00']
    },
    {
      id: 'walletTopUp',
      title: 'Wallet Top up',
      options: ['Always', 'Never', 'Between 08:00 to 17:00']
    }
  ]

  const handleSettingChange = (settingId, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [settingId]: value
    }))
  }

  const handleSaveChanges = () => {
    console.log('Saving notification settings:', notificationSettings)
    // Add your save logic here
  }

  const handleDiscardChanges = () => {
    setNotificationSettings({
      emailNotifications: 'Always',
      newGiggzNotification: 'Always',
      newDispute: 'Always',
      newSignUp: 'Always',
      walletTopUp: 'Always'
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
      </div>

      {/* Customize Notifications Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Customize your notifications</h3>
        <p className="text-gray-600 mb-8">Update your notification settings.</p>

        {/* Notification Types */}
        <div className="space-y-8">
          {notificationTypes.map((notificationType) => (
            <div key={notificationType.id}>
              <h4 className="text-base font-medium text-gray-900 mb-4">
                {notificationType.title}
              </h4>
              <div className="space-y-3">
                {notificationType.options.map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={notificationType.id}
                      value={option}
                      checked={notificationSettings[notificationType.id] === option}
                      onChange={(e) => handleSettingChange(notificationType.id, e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mt-12">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleDiscardChanges}
          >
            Discard Changes
          </Button>
          <Button
            variant="primary"
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings