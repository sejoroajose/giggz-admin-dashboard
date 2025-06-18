import React, { useState } from 'react'
import Card from '../common/Card'
import Button from '../common/Button'
import SearchInput from '../common/SearchInput'

// Mock data for demonstration
const mockUsers = [
  {
    id: 1,
    name: 'James Hadish',
    occupation: 'Web Designer',
    email: 'sara.cruz@example.com',
    balance: 'N20,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Verified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [
      {
        id: 1,
        title: 'Responsive client',
        content:
          'A wonderful client to work with! He had a clear vision for the project and provided detailed specifications. Communication was excellent throughout the process, and he was always responsive and accommodating. It was a pleasure bringing his ideas to life. Highly recommended!',
        reviewer: 'Suleman Blakes',
        rating: 4,
        date: '2 wks ago',
      },
      {
        id: 2,
        title: 'Responsive client',
        content:
          'A wonderful client to work with! He had a clear vision for the project and provided detailed specifications. Communication was excellent throughout the process, and he was always responsive and accommodating. It was a pleasure bringing his ideas to life. Highly recommended!',
        reviewer: 'Jenny Wilson',
        rating: 4,
        date: '2 wks ago',
      },
    ],
    jobs: [
      {
        id: 1,
        title: 'Cooks Needed',
        description:
          'Lorem ipsum dolor sit amet, consectetur. Molestie at arma feugiat turpis urna id. Ullamcorper ornare aliquet turpis nulla. Purus risus pellentesque purus quis elit ornat nunc. Pretium in non laorls posuere nec sagittis duis Est morbi laoreet eu lorem.',
        status: 'Ongoing',
        date: '2 wks ago',
      },
      {
        id: 2,
        title: 'Cooks Needed',
        description:
          'Lorem ipsum dolor sit amet, consectetur. Molestie at arma feugiat turpis urna id. Ullamcorper ornare aliquet turpis nulla. Purus risus pellentesque purus quis elit ornat nunc. Pretium in non laorls posuere nec sagittis duis Est morbi laoreet eu lorem.',
        status: 'Completed',
        date: '2 wks ago',
      },
    ],
  },
  {
    id: 2,
    name: 'James Hadish',
    occupation: 'Marketing Coordinator',
    email: 'sara.cruz@example.com',
    balance: 'N25,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Verified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
  {
    id: 3,
    name: 'James Hadish',
    occupation: 'Medical Assistant',
    email: 'michael.mitc@example.com',
    balance: 'N40,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Verified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
  {
    id: 4,
    name: 'James Hadish',
    occupation: 'Dog Trainer',
    email: 'debra.holt@example.com',
    balance: 'N80,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Verified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
  {
    id: 5,
    name: 'James Hadish',
    occupation: 'Nursing Assistant',
    email: 'michael.mitc@example.com',
    balance: 'N10,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Unverified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
  {
    id: 6,
    name: 'James Hadish',
    occupation: 'President of Sales',
    email: 'tim.jennings@example.com',
    balance: 'N20,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Unverified',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
  {
    id: 7,
    name: 'James Hadish',
    occupation: 'Marketing Coordinator',
    email: 'curtis.weaver@example.com',
    balance: 'N20,000.00',
    dateRegistered: 'Feb 25, 2022',
    status: 'Blocked',
    avatar: '/avatar-placeholder.png',
    phone: '+234 903 828 3447',
    state: 'Abuja',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    totalDeposited: 'NGN 200,000.00',
    totalSpent: 'NGN 100,000.00',
    currentBalance: 'NGN 100,000.00',
    jobsPosted: 2,
    hiredGiggz: 2,
    hoursPaid: 214,
    reviews: [],
    jobs: [],
  },
]

// UserStats Component
const UserStats = () => {
  const stats = [
    { label: 'ALL USERS', value: '75,531', color: 'gray' },
    { label: 'VERIFIED USERS', value: '56,123', color: 'green' },
    { label: 'UNVERIFIED USERS', value: '9,000', color: 'orange' },
    { label: 'BLOCKED USERS', value: '10,405', color: 'red' },
  ]

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return 'text-green-500'
      case 'orange':
        return 'text-orange-500'
      case 'red':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div
              className={`w-3 h-3 rounded-full ${getColorClasses(
                stat.color
              )} mr-2`}
            ></div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
        </Card>
      ))}
    </div>
  )
}

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-green-800'
      case 'Unverified':
        return 'bg-orange-100 text-orange-800'
      case 'Blocked':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClasses()}`}
    >
      {status}
    </span>
  )
}

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-orange-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// Personal Info Tab Component
const PersonalInfoTab = ({ user, onBlockUser }) => (
  <div className="p-6 space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Personal information
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Name:</span>
          <span className="text-gray-900 font-medium">Prince Chijioke</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Email address:</span>
          <span className="text-gray-900">emekepeter@gmail.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">State:</span>
          <span className="text-gray-900">{user.state}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Phone number:</span>
          <span className="text-gray-900">{user.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Address:</span>
          <span className="text-gray-900 text-right">{user.address}</span>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Wallet info</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Total money deposited:</span>
          <span className="text-gray-900 font-medium">
            {user.totalDeposited}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total money spent:</span>
          <span className="text-gray-900">{user.totalSpent}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Current account balance:</span>
          <span className="text-gray-900 font-medium">
            {user.currentBalance}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-4">
      <Button
        variant="primary"
        className="w-full bg-red-500 hover:bg-red-600 text-white"
        onClick={() => onBlockUser(user.id)}
      >
        BLOCK THIS USER
      </Button>
    </div>
  </div>
)

// Client Reviews Tab Component
const ClientReviewsTab = ({ reviews }) => (
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Review</h3>
    <div className="space-y-6">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border-b border-gray-200 pb-6 last:border-b-0"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-medium text-gray-900">{review.title}</h4>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{review.content}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-xs font-medium text-orange-800">
                  {review.reviewer.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {review.reviewer}
              </span>
            </div>
            <StarRating rating={review.rating} />
          </div>
        </div>
      ))}
      {reviews.length === 0 && (
        <p className="text-gray-500 text-center py-8">No reviews available</p>
      )}
    </div>
  </div>
)

// Jobs Posted Tab Component
const JobsPostedTab = ({ jobs }) => (
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Jobs Posted</h3>
    <div className="space-y-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border-b border-gray-200 pb-6 last:border-b-0"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-medium text-gray-900">{job.title}</h4>
            <span className="text-sm text-gray-500">{job.date}</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{job.description}</p>
          <div className="flex items-center">
            <div
              className={`flex items-center ${
                job.status === 'Completed'
                  ? 'text-green-600'
                  : 'text-orange-500'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  job.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'
                }`}
              ></div>
              <span className="text-sm font-medium">{job.status}</span>
            </div>
          </div>
        </div>
      ))}
      {jobs.length === 0 && (
        <p className="text-gray-500 text-center py-8">No jobs posted</p>
      )}
    </div>
  </div>
)

// User Drawer Component
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
        <div className="flex items-center text-green-600">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">Verified user</span>
        </div>
      )
    } else if (user.status === 'Unverified') {
      return (
        <div className="flex items-center text-orange-600">
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

// Clients Tab Component
const ClientsTab = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState('2022')
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly')

  const handleViewUser = (user) => {
    setSelectedUser(user)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedUser(null)
  }

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.occupation.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex items-center justify-between">
        <SearchInput
          placeholder="Search using Name, Email and Phone number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md"
        />
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name & Occupation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account balance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Registered
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.occupation}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.balance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.dateRegistered}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewUser(user)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* User Drawer */}
      <UserDrawer
        user={selectedUser}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </div>
  )
}

// Main Database Component
const Database = () => {
  const [activeTab, setActiveTab] = useState('Clients')

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">User Database</h1>
      </div>

      {/* User Stats */}
      <UserStats />

      {/* Tab Navigation */}
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

      {/* Tab Content */}
      {activeTab === 'Clients' && <ClientsTab />}
      {activeTab === 'Service Providers' && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Service Providers tab content coming soon...
          </p>
        </div>
      )}
    </div>
  )
}

export default Database
