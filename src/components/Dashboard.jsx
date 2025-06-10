import React from 'react'
import { useAuth } from '../components/context/AuthContext'
import { useNotification } from '../components/context/NotificationContext'
import Button from './common/Button'
import { LogOut, User, Settings, Bell } from 'lucide-react'

function Dashboard() {
  const { user, logout } = useAuth()
  const { showSuccess } = useNotification()

  const handleLogout = () => {
    logout()
    showSuccess('Logged out', 'You have been successfully logged out.')
  }

  return (
    <div className="min-h-screen bg-primary-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-gray-900 font-semibold text-xl">Giggz</span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {user?.name || user?.email}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Giggz! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            You have successfully completed the authentication flow. This is
            where your main application would begin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-card p-6 border border-card-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-success-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Profile Complete
                </h3>
                <p className="text-gray-600">Your account is set up</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 border border-card-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Settings
                </h3>
                <p className="text-gray-600">Customize your experience</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-card p-6 border border-card-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bell className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Notifications
                </h3>
                <p className="text-gray-600">Stay updated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card p-8 border border-card-200 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Account Information
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Email</span>
              <span className="text-gray-900">{user?.email}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Name</span>
              <span className="text-gray-900">
                {user?.name || 'Not provided'}
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">User ID</span>
              <span className="text-gray-900 font-mono text-sm">
                {user?.id}
              </span>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 font-medium">Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Demo Note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Demo Application
            </h3>
            <p className="text-blue-700 text-sm">
              This is a demonstration of the Giggz authentication flow. In a
              real application, this dashboard would contain your main
              application features and functionality.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
