import React, { useState } from 'react'
import Button from '../common/Button'
import PersonalInfoTab from './PersonalInfoTab'
import ClientReviewsTab from './ClientReviewsTab'
import JobsPostedTab from './JobsPostedTab'

const UserDrawer = ({ user, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Personal Info')

  if (!isOpen || !user) return null

  const tabs = ['Personal Info', 'Client Reviews', 'Jobs Posted']

  const handleBlockUser = (userId) => {
    console.log('Blocking user:', userId)
    // Implement block user logic
  }

  const getStatusIcon = () => {
    if (user.status === 'Verified') {
      return (
        <div className="flex items-center justify-center text-green-600">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Verified user</span>
        </div>
      )
    } else if (user.status === 'Unverified') {
      return (
        <div className="flex items-center justify-center text-orange-600">
          <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Unverified</span>
          <Button
            size="sm"
            className="ml-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Notify now
          </Button>
        </div>
      )
    }
    return null
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Personal Info':
        return <PersonalInfoTab user={user} onBlockUser={handleBlockUser} />
      case 'Client Reviews':
        return <ClientReviewsTab reviews={user.reviews} />
      case 'Jobs Posted':
        return <JobsPostedTab jobs={user.jobs} />
      default:
        return null
    }
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-blue-900 text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold">Emeka Peter</h2>
              <p className="text-blue-200">Engineer</p>
              <div className="mt-4">{getStatusIcon()}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <div className="text-2xl font-bold">
                  {user.jobsPosted.toString().padStart(2, '0')}
                </div>
                <div className="text-blue-200 text-sm">Jobs Posted</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {user.hiredGiggz.toString().padStart(2, '0')}
                </div>
                <div className="text-blue-200 text-sm">Hired Giggz</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{user.hoursPaid}</div>
                <div className="text-blue-200 text-sm">Hours Paid</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>
        </div>
      </div>
    </>
  )
}

export default UserDrawer
